// Razorpay Checkout integration — loads the script lazily and opens the modal.
// Backend flow lives in functions/api/razorpay/*.

export interface RazorpayPrefill {
  name?: string;
  email?: string;
  contact?: string;
}

export interface RazorpaySuccess {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpayOpenOptions {
  amountPaise: number;
  orderId: string;
  keyId: string;
  prefill?: RazorpayPrefill;
  notes?: Record<string, string>;
  onSuccess: (resp: RazorpaySuccess) => void;
  onDismiss?: () => void;
}

interface RazorpayInstance {
  open(): void;
  on(event: 'payment.failed', cb: (resp: { error: { description?: string } }) => void): void;
}

interface RazorpayCheckoutCtor {
  new (options: Record<string, unknown>): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay?: RazorpayCheckoutCtor;
  }
}

const SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';
let scriptPromise: Promise<void> | null = null;

export function loadRazorpayScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('window unavailable'));
  if (window.Razorpay) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Razorpay script failed to load')), { once: true });
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error('Razorpay script failed to load'));
    };
    document.head.appendChild(s);
  });

  return scriptPromise;
}

export async function openRazorpayCheckout(opts: RazorpayOpenOptions): Promise<void> {
  await loadRazorpayScript();
  if (!window.Razorpay) throw new Error('Razorpay not available');

  const rzp = new window.Razorpay({
    key: opts.keyId,
    amount: opts.amountPaise,
    currency: 'INR',
    order_id: opts.orderId,
    name: 'Ivy Crew',
    description: 'Order payment',
    prefill: opts.prefill ?? {},
    notes: opts.notes ?? {},
    theme: { color: '#1a2026' },
    handler: opts.onSuccess,
    modal: { ondismiss: opts.onDismiss },
  });

  rzp.on('payment.failed', resp => {
    console.error('Razorpay payment failed:', resp?.error);
  });

  rzp.open();
}
