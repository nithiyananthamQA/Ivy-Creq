import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../data/products';
import { getProductById } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

const STORAGE_KEY = 'ivycrew.cart.v1';

interface PersistedItem {
  productId: number;
  quantity: number;
  size?: string;
}

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as PersistedItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(({ productId, quantity, size }) => {
        const product = getProductById(productId);
        if (!product || quantity <= 0) return null;
        return { product, quantity, size };
      })
      .filter((x): x is CartItem => x !== null);
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    const persisted: PersistedItem[] = items.map(i => ({
      productId: i.product.id,
      quantity: i.quantity,
      size: i.size,
    }));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  } catch {
    // ignore quota / privacy-mode errors
  }
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: number, size?: string) => void;
  updateQuantity: (productId: number, quantity: number, size?: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

// Strips ₹ / $ / commas / whitespace and returns a numeric value.
// Returns 0 for unparseable input so cart math never produces NaN.
export function parsePrice(price: string): number {
  const n = parseFloat(price.replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export const FREE_SHIPPING_THRESHOLD = 2000;
export const FLAT_SHIPPING_RATE = 199;
export const TAX_RATE = 0.05;

function itemKey(productId: number, size?: string) {
  return `${productId}__${size ?? ''}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart());
  const [isCartOpen, setCartOpen] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveCart(items);
  }, [items]);

  const addToCart = useCallback((product: Product, size?: string) => {
    setItems(prev => {
      const existing = prev.find(
        item => itemKey(item.product.id, item.size) === itemKey(product.id, size)
      );
      if (existing) {
        return prev.map(item =>
          itemKey(item.product.id, item.size) === itemKey(product.id, size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, size }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: number, size?: string) => {
    setItems(prev =>
      prev.filter(item => itemKey(item.product.id, item.size) !== itemKey(productId, size))
    );
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number, size?: string) => {
    if (quantity <= 0) {
      setItems(prev =>
        prev.filter(item => itemKey(item.product.id, item.size) !== itemKey(productId, size))
      );
      return;
    }
    setItems(prev =>
      prev.map(item =>
        itemKey(item.product.id, item.size) === itemKey(productId, size)
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal, isCartOpen, setCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
