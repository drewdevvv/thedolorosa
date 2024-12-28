import { supabase } from './supabase'

export interface Image {
  name: string
  publicUrl: string
  metadata?: {
    size: number
    mimetype: string
    createdAt?: string
  }
}

export async function getImages(): Promise<{ data: Image[] | null; error: Error | null }> {
  try {
    // First, try to access bucket info
    const { data: bucketInfo, error: bucketError } = await supabase
      .storage
      .getBucket('thedolorosabuck')
    
    console.log('1. Bucket Info:', bucketInfo)
    if (bucketError) {
      console.error('Bucket Access Error:', bucketError)
    }

    // Try listing without folder first
    const { data: rootFiles, error: rootError } = await supabase
      .storage
      .from('thedolorosabuck')
      .list()

    console.log('2. Root folder contents:', rootFiles)
    if (rootError) {
      console.error('Root listing error:', rootError)
    }

    // Now try with public folder
    const { data: files, error } = await supabase
      .storage
      .from('thedolorosabuck')
      .list('public')

    console.log('3. Public folder contents:', files)
    console.log('4. List error if any:', error)

    if (error) throw error

    if (!files) {
      console.log('5. No files found')
      return { data: [], error: null }
    }

    // Log all found files before filtering
    console.log('6. All files before filtering:', files.map(f => f.name))

    const images = files
      .filter(file => {
        const isJpg = file.name.toLowerCase().endsWith('.jpg')
        console.log(`7. Checking file ${file.name} - is JPG? ${isJpg}`)
        return isJpg
      })
      .map(file => {
        const { data: urlData } = supabase.storage
          .from('thedolorosabuck')
          .getPublicUrl(`public/${file.name}`)

        console.log(`8. Generated URL for ${file.name}:`, urlData.publicUrl)

        return {
          name: file.name,
          publicUrl: urlData.publicUrl,
          metadata: {
            size: file.metadata?.size,
            mimetype: file.metadata?.mimetype,
            createdAt: file.metadata?.createdAt
          }
        }
      })

    console.log('9. Final processed images:', images)

    return { data: images, error: null }
  } catch (error) {
    console.error('10. Final error in getImages:', error)
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('Error fetching images') 
    }
  }
}