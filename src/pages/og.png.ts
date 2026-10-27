import type { APIRoute } from "astro";
import { blobatar } from "blobatar";
import sharp from "sharp";
import { AVATAR_SEED } from "@consts";

// The link-preview card: the homepage blobatar centred on the site's dark
// background, at the 1200x630 size social sites expect
export const GET: APIRoute = async () => {
  const blob = await sharp(Buffer.from(blobatar(AVATAR_SEED)))
    .resize(420, 420)
    .toBuffer();

  const card = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: "#171717" },
  })
    .composite([{ input: blob }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(card), { headers: { "Content-Type": "image/png" } });
};
