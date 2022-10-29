// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  unityFile: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {}
