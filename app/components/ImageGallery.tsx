'use client'

import { useEffect, useState } from 'react'
import { getImages, type Image } from '../utils/image-service'
import NextImage from 'next/image'

const ImagePlaceholder = () => (
  <div className="w-full h-full bg-neutral-900 animate-pulse rounded-lg" />
)

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const { data, error } = await getImages()
    if (error) {
      setError(error.message)
      console.error('Error fetching images:', error)
    }
    if (data) {
      setImages(data)
    }
    setLoading(false)
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error loading gallery: {error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        // Show placeholders while loading
        Array(9).fill(null).map((_, index) => (
          <div 
            key={`placeholder-${index}`} 
            className="aspect-square relative overflow-hidden rounded-lg"
          >
            <ImagePlaceholder />
          </div>
        ))
      ) : (
        // Show actual images
        images.map((image, index) => (
          <div 
            key={image.name}
            className="aspect-square relative group overflow-hidden rounded-lg bg-neutral-900"
          >
            <NextImage
              src={image.publicUrl}
              alt={image.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 6} // Load first 6 images immediately
            />
          </div>
        ))
      )}
    </div>
  )
}