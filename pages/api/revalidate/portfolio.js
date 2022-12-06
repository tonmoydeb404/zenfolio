export default async function handler(req, res) {
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

    console.log({ revalidated: true });
  } catch (err) {
    console.log(err);
  } finally {
    // return user to index page
    return res.redirect(307, "/");
  }
}
