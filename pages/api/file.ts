// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getObjectSignedUrl } from "../../utils";

type Data = string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // const endpoint = "tmp";
    // const endpoint = "https://s3.amazonaws.com";
    const endpoint = await getObjectSignedUrl("0xSEOUL_Test01.7z");
    res.status(200).send(endpoint);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
}
