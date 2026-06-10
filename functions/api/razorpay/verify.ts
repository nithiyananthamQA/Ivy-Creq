// Cloudflare Pages Function. Bound env var: RAZORPAY_KEY_SECRET.
interface Env {
  RAZORPAY_KEY_SECRET: string;
}

interface VerifyBody {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
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

const toHex = (buf: ArrayBuffer): string =>
  Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

const timingSafeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

export const onRequestPost = async ({ request, env }: Ctx): Promise<Response> => {
  if (!env.RAZORPAY_KEY_SECRET) {
    return json({ error: 'Razorpay secret not configured on server' }, 500);
  }

  let body: VerifyBody;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return json({ error: 'Missing required fields' }, 400);
  }

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(env.RAZORPAY_KEY_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(`${razorpay_order_id}|${razorpay_payment_id}`)
  );
  const expected = toHex(sig);

  if (!timingSafeEqual(expected, razorpay_signature)) {
    return json({ ok: false, error: 'Signature mismatch' }, 400);
  }

  return json({ ok: true, paymentId: razorpay_payment_id, orderId: razorpay_order_id });
};
