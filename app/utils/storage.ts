import { supabase } from './supabase'

export async function uploadImage(
  file: File,
  bucket: string = 'images',
  folder: string = ''
): Promise<{ path: string | null; error: Error | null }> {
  try {
    if (!file) {
      throw new Error('You must select an image to upload.')
    }

    // Create a unique file name
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = folder ? `${folder}/${fileName}` : fileName

    // Upload the file
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file)

    if (uploadError) {
      throw uploadError
    }

    // Get public URL
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return { path: data.publicUrl, error: null }
  } catch (error) {
    return { path: null, error: error as Error }
  }
}