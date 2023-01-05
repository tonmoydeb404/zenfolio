export default async function handler(req, res) {
  // check query secrets
  if (!req.query.secret) {
    return res.redirect(307, "/");
  }

  try {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
      throw { message: "invalid key" };
    }
    // check for body
    if (!req.body) {
      throw { message: "invalid request body" };
    }
    // revalidate path
    await res.revalidate("/portfolio");
    await res.revalidate(path.join("/portfolio/", req.body.data.slug));

    // return success
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    // return error
    return res.status(401).json({ message: err.message });
  }
}
