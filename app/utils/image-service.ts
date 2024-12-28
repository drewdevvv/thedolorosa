import { supabase } from './supabase'

export interface Image {
  name: string
  publicUrl: string
}

export async function getImages(): Promise<{ data: Image[] | null; error: Error | null }> {
  try {
    console.log('Initiating Supabase request...')  // Debug log
    const { data: files, error } = await supabase
      .storage
      .from('thedolorosabuck')
      .list()

    console.log('Supabase response:', { files, error })  // Debug log

    if (error) throw error

    if (!files) return { data: [], error: null }

    // Create public URLs for each image
    const images = files
      .filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(file => ({
        name: file.name,
        publicUrl: `https://siohgmjmeoawouvbuxuo.supabase.co/storage/v1/object/public/thedolorosabuck/${file.name}`
      }))

    console.log('Processed images:', images)  // Debug log
    return { data: images, error: null }
  } catch (error) {
    console.error('Error in getImages:', error)  // Debug log
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('Error fetching images') 
    }
  }
}