export async function handler(event, context) {
  const { to, message } = JSON.parse(event.body || "{}");
  // TODO: integrate Twilio or other SMS provider
  console.log("SMS stub:", to, message);
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
}
