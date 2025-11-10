"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/ui/Header"
import Footer from "@/components/sections/Footer"

interface R2Image {
  key: string
  url: string
  size?: number
  lastModified?: string
}

export default function R2ImagesPage() {
  const [images, setImages] = useState<R2Image[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/r2-images")
        const data = await response.json()

        if (data.error) {
          setError(data.error)
        } else {
          setImages(data.images || [])
        }
      } catch (err) {
        setError("Failed to load images")
        console.error("[v0] Error loading R2 images:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">R2 Bucket Images</h1>

          {loading && (
            <div className="text-center py-12">
              <p className="text-lg">Loading images from R2 bucket...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <p className="text-red-600 font-semibold">Error: {error}</p>
              <p className="text-sm text-red-500 mt-2">Check console for details</p>
            </div>
          )}

          {!loading && !error && images.length === 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-600">No images found in R2 bucket</p>
            </div>
          )}

          {!loading && images.length > 0 && (
            <>
              <p className="text-muted-foreground mb-8">Found {images.length} images in your R2 bucket</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div key={image.key} className="border border-border rounded-lg overflow-hidden bg-card">
                    <div className="relative w-full h-64 bg-muted">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.key}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-sm truncate" title={image.key}>
                        {image.key}
                      </p>
                      {image.size && (
                        <p className="text-xs text-muted-foreground mt-1">{(image.size / 1024).toFixed(2)} KB</p>
                      )}
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-2 inline-block"
                      >
                        View full size →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
