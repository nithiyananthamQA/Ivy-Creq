// Cloudflare Pages Function. Bound env vars: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET.
interface Env {
  RAZORPAY_KEY_ID: string;
  RAZORPAY_KEY_SECRET: string;
}

interface CreateOrderBody {
  amount: number;
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}

interface Ctx {
  request: Request;
  env: Env;
}

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export const onRequestPost = async ({ request, env }: Ctx): Promise<Response> => {
  if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
    return json({ error: 'Razorpay keys not configured on server' }, 500);
  }

  let body: CreateOrderBody;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  if (typeof body.amount !== 'number' || body.amount <= 0 || !Number.isFinite(body.amount)) {
    return json({ error: 'amount must be a positive number (in paise)' }, 400);
  }

  const auth = btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`);
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      authorization: `Basic ${auth}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      amount: Math.round(body.amount),
      currency: body.currency ?? 'INR',
      receipt: body.receipt ?? `rcpt_${Date.now()}`,
      notes: body.notes,
    }),
  });

  const data = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    return json({ error: 'Razorpay order creation failed', details: data }, res.status);
  }

  return json({
    orderId: data.id,
    amount: data.amount,
    currency: data.currency,
    keyId: env.RAZORPAY_KEY_ID,
  });
};
