import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // regenerate our index route showing the images
    await res.unstable_revalidate("/");
    return res.json({ revalidated: true });
  } catch (error) {
    // If there was an error, Nextjs will continue to render the page
    //show last successful response
    return res.status(500).send("Error revalidating");
  }
}
