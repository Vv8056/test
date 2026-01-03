export default async function handler(req, res) {
  const secret = process.env.SECRET_API_KEY;

  if (!secret) {
    return res.status(500).json({ error: "Server config error" });
  }

  // Secret used ONLY here
  const ok = secret.length > 10;

  // Send only result, NOT secret
  res.status(200).json({
    success: ok,
    message: ok ? "Server verified securely" : "Verification failed"
  });
}
