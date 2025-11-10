"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/ui/Header"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"

interface R2Image {
  key: string
  url: string
  size?: number
  lastModified?: string
}

interface ImagesByCategory {
  hero: R2Image[]
  services: R2Image[]
  team: R2Image[]
  process: R2Image[]
  general: R2Image[]
}

export default function R2GalleryPage() {
  const [images, setImages] = useState<R2Image[]>([])
  const [categorized, setCategorized] = useState<ImagesByCategory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  useEffect(() => {
    async function fetchImages() {
      try {
        console.log("[v0] Fetching images from R2...")
        const response = await fetch("/api/r2-images")
        const data = await response.json()

        console.log("[v0] R2 API response:", data)

        if (data.error) {
          setError(data.error)
        } else {
          const imageList = data.images || []
          setImages(imageList)

          // Categorize images
          const cats: ImagesByCategory = {
            hero: [],
            services: [],
            team: [],
            process: [],
            general: [],
          }

          imageList.forEach((img: R2Image) => {
            const key = img.key.toLowerCase()
            if (key.includes("hero")) {
              cats.hero.push(img)
            } else if (
              key.includes("service") ||
              key.includes("crime") ||
              key.includes("biohazard") ||
              key.includes("water") ||
              key.includes("fire") ||
              key.includes("hoard")
            ) {
              cats.services.push(img)
            } else if (key.includes("team") || key.includes("technician")) {
              cats.team.push(img)
            } else if (key.includes("process") || key.includes("equipment")) {
              cats.process.push(img)
            } else {
              cats.general.push(img)
            }
          })

          setCategorized(cats)
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

  const filteredImages =
    activeCategory === "all" ? images : categorized ? categorized[activeCategory as keyof ImagesByCategory] : []

  return (
    <>
      <Header />
      <main className="min-h-screen bg-coal py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">R2 Image Gallery</h1>
            <p className="text-gray-400">Browse and manage images from your Cloudflare R2 bucket</p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gold border-t-transparent"></div>
              <p className="text-lg text-white mt-4">Loading images from R2 bucket...</p>
            </div>
          )}

          {error && (
            <div className="bg-fire/10 border border-fire/30 rounded-lg p-6 mb-8">
              <p className="text-fire font-semibold">Error: {error}</p>
              <p className="text-sm text-gray-400 mt-2">
                Check the browser console for details or verify R2 credentials
              </p>
            </div>
          )}

          {!loading && !error && images.length === 0 && (
            <div className="bg-water/10 border border-water/30 rounded-lg p-6">
              <p className="text-water">No images found in R2 bucket</p>
              <p className="text-sm text-gray-400 mt-2">
                Upload images to your biohazard-website bucket to see them here
              </p>
            </div>
          )}

          {!loading && images.length > 0 && categorized && (
            <>
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant={activeCategory === "all" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("all")}
                  >
                    All ({images.length})
                  </Button>
                  <Button
                    variant={activeCategory === "hero" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("hero")}
                  >
                    Hero ({categorized.hero.length})
                  </Button>
                  <Button
                    variant={activeCategory === "services" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("services")}
                  >
                    Services ({categorized.services.length})
                  </Button>
                  <Button
                    variant={activeCategory === "team" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("team")}
                  >
                    Team ({categorized.team.length})
                  </Button>
                  <Button
                    variant={activeCategory === "process" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("process")}
                  >
                    Process ({categorized.process.length})
                  </Button>
                  <Button
                    variant={activeCategory === "general" ? "primary" : "secondary"}
                    onClick={() => setActiveCategory("general")}
                  >
                    General ({categorized.general.length})
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <div key={image.key} className="border border-gold/20 rounded-lg overflow-hidden bg-charcoal">
                    <div className="relative w-full h-64 bg-coal">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.key}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-sm text-white truncate mb-2" title={image.key}>
                        {image.key}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        {image.size && <span>{(image.size / 1024).toFixed(2)} KB</span>}
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold/80 hover:underline"
                        >
                          View →
                        </a>
                      </div>
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
