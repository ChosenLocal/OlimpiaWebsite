import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"

// Initialize R2 client using S3-compatible API
const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT || "https://c0ae873bc7e14bd0a5059f36c4875766.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "ef7c1ce152916339b04c173b8ed93ec0",
    secretAccessKey:
      process.env.R2_SECRET_ACCESS_KEY || "7a3ccccf5a9c0e40765e6192c1e749df68bb8749aed35e76f728d8be6ac5b34c",
  },
})

const BUCKET_NAME = "biohazard-website"
const PUBLIC_URL_BASE = "https://c0ae873bc7e14bd0a5059f36c4875766.r2.cloudflarestorage.com/biohazard-website"

/**
 * List all images in the R2 bucket
 */
export async function listR2Images(prefix?: string) {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    })

    const response = await r2Client.send(command)
    return response.Contents || []
  } catch (error) {
    console.error("[v0] Error listing R2 images:", error)
    return []
  }
}

/**
 * Get public URL for an R2 image
 */
export function getR2ImageUrl(key: string): string {
  return `${PUBLIC_URL_BASE}/${key}`
}

/**
 * Get all images organized by category
 */
export async function getImagesByCategory() {
  const images = await listR2Images()

  const categorized: Record<string, string[]> = {
    hero: [],
    services: [],
    team: [],
    process: [],
    general: [],
  }

  images.forEach((image) => {
    if (!image.Key) return

    const key = image.Key.toLowerCase()
    if (key.includes("hero")) {
      categorized.hero.push(image.Key)
    } else if (
      key.includes("service") ||
      key.includes("crime") ||
      key.includes("biohazard") ||
      key.includes("water") ||
      key.includes("fire") ||
      key.includes("hoarder")
    ) {
      categorized.services.push(image.Key)
    } else if (key.includes("team") || key.includes("technician")) {
      categorized.team.push(image.Key)
    } else if (key.includes("process") || key.includes("equipment")) {
      categorized.process.push(image.Key)
    } else {
      categorized.general.push(image.Key)
    }
  })

  return categorized
}
