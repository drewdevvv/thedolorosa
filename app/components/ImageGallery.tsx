'use client'

import { useEffect, useState } from 'react'
import { getImages, type Image } from '../utils/image-service'

const ImagePlaceholder = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" fill="#1a1a1a" />
    <path
      d="M30 40 L45 55 L30 70"
      stroke="#333"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M70 40 L55 55 L70 70"
      stroke="#333"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    console.log('Fetching images...')  // Debug log
    const { data, error } = await getImages()
    console.log('Received data:', data)  // Debug log
    console.log('Received error:', error)  // Debug log
    if (error) setError(error.message)
    if (data) setImages(data)
    setLoading(false)
  }

  // Create an array of 9 placeholder items
  const placeholderGrid = Array(9).fill(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {placeholderGrid.map((_, index) => (
        <div 
          key={index} 
          className="aspect-square relative group overflow-hidden bg-neutral-900 rounded-lg"
        >
          <ImagePlaceholder />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm text-gray-500">Loading...</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}