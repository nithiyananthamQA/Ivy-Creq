import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
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

function parsePrice(price: string): number {
  return parseFloat(price.replace('$', '').replace(',', ''));
}

function itemKey(productId: number, size?: string) {
  return `${productId}__${size ?? ''}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

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
