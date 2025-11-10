import { NextResponse } from "next/server"
import { listR2Images, getR2ImageUrl } from "@/lib/r2-client"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const prefix = searchParams.get("prefix") || undefined

    const images = await listR2Images(prefix)

    const imageUrls = images
      .filter((img) => img.Key)
      .map((img) => ({
        key: img.Key,
        url: getR2ImageUrl(img.Key!),
        size: img.Size,
        lastModified: img.LastModified,
      }))

    return NextResponse.json({ images: imageUrls })
  } catch (error) {
    console.error("[v0] Error fetching R2 images:", error)
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 })
  }
}
