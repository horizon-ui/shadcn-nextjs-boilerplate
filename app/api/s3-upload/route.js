import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  },
});

const openai = new OpenAI({
  apiKey:  process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

// -------------- OpenAI API call to get audio --------------
async function main(text, voice) {
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: voice,
    input: text,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  return buffer;
}

// -------------- Upload file to Amazon AWS S3 --------------
async function uploadFileToS3(file, fileName, userId) {
  const fileBuffer = file;
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `${userId}/${fileName}`,
    Body: fileBuffer,
    ContentType: 'audio/mpeg',
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

// -------------- POST function to get user ID and input --------------
export async function POST(request) {
  try {
    const formData = await request.formData();
    const text = formData.get('text');
    const userId = formData.get('userId');
    const voice = formData.get('voice');
    const filename = 'speech.mp3';
    if (!text) {
      return NextResponse.json({ error: 'Text is required.' }, { status: 400 });
    }

    // -------------- Buffer to manipulate binary --------------
    const buffer = await main(text, voice);
    const fileName = await uploadFileToS3(buffer, filename, userId);
    return NextResponse.json({ success: true, buffer });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
