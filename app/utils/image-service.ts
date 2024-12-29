export interface Image {
  name: string
  publicUrl: string
  metadata?: {
    size?: number
    mimetype?: string
    createdAt?: string
  }
}

// Static list of images as a temporary solution
const GALLERY_IMAGES: Image[] = [
  {
    name: 'gallery1.jpg',
    publicUrl: '/gallery/gallery1.jpg',
    metadata: {
      mimetype: 'image/jpeg'
    }
  },
  // Add more static images as needed
]

export async function getImages(): Promise<{ data: Image[] | null; error: Error | null }> {
  try {
    return { data: GALLERY_IMAGES, error: null }
  } catch (error) {
    console.error('Error in getImages:', error)
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('Error fetching images') 
    }
  }
}