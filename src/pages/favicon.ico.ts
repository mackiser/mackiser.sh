import type { APIRoute } from "astro";
import { blobatar } from "blobatar";
import sharp from "sharp";
import { AVATAR_SEED } from "@consts";

const SIZE = 64;

// A static render of the homepage blobatar, as a single-image ICO with a PNG
// payload, which every current browser accepts
export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(blobatar(AVATAR_SEED)))
    .resize(SIZE, SIZE)
    .png()
    .toBuffer();

  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(SIZE, 6); // width
  header.writeUInt8(SIZE, 7); // height
  header.writeUInt16LE(1, 10); // colour planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(png.length, 14); // image size
  header.writeUInt32LE(header.length, 18); // image offset

  return new Response(Buffer.concat([header, png]), {
    headers: { "Content-Type": "image/x-icon" },
  });
};
