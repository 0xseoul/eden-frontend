import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

// const init = () => {
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY ?? "";
const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY ?? "";

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

// return { s3Client, bucketName };
// };

export async function getObjectSignedUrl(key: string) {
  // const { bucketName, s3Client } = init();
  if (!bucketName || !region || !accessKeyId || !secretAccessKey)
    throw new Error("Missing AWS credentials");

  const params = { Bucket: bucketName, Key: key };

  // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
  const command = new GetObjectCommand(params);
  const seconds = 60;
  const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });
  return url;
}
