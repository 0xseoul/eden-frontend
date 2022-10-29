// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const endpoint = "tmp";
    // const endpoint = await getObjectSignedUrl("0xSEOUL_TEST.unitypackage");
    res.status(200).send(endpoint);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
