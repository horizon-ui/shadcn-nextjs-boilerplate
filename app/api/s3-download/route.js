import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  },
});

const downloadFileToS3 = async (fileName, userId) => {
  const command = new GetObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `${userId}/${fileName}`,
  });

  try {
    const response = await s3Client.send(command);
    const str = await response.Body.transformToByteArray();
    return str;
  } catch (err) {
    console.error(err);
  }
};

// -------------- POST function to get user ID --------------
export async function POST(request, res) {
  try {
    const formData = await request.formData();
    const userId = formData.get('userId');
    const filename = 'speech.mp3';

    const mp3Data = await downloadFileToS3(filename, userId);
    return NextResponse.json(mp3Data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
