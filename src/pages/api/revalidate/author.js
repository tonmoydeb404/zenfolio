export default async function handler(req, res) {
  // check query secrets
  if (!req.query.secret) {
    return res.redirect(307, "/");
  }

  try {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
      throw { message: "invalid token", code: 401 };
    }
    // check for body
    if (!req.body) {
      throw { message: "invalid request body", code: 400 };
    }

    // revalidate path
    await res.revalidate("/");
    await res.revalidate("/contact");

    // return success
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    // return error
    return res.status(err?.code || 500).json({ error: err.message });
  }
}
