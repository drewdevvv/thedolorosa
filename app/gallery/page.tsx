'use client'

import ImageGallery from '../components/ImageGallery'
import FadeInSection from '../components/Animations/FadeInSection'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-12 tracking-wider text-center">GALLERY</h1>
          <ImageGallery />
        </div>
      </FadeInSection>
    </div>
  )
}