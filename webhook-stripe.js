export async function handler(event, context) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
  // TODO: verify Stripe signature with STRIPE_WEBHOOK_SECRET
  console.log("Stripe webhook received:", event.body?.slice(0,200));
  // Example: send email / mark mission as funded
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
}
