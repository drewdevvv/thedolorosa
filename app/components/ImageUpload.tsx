import { useState } from 'react'
import { uploadImage } from '../utils/storage'

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false)
  const [imagePath, setImagePath] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)
      setError(null)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const { path, error } = await uploadImage(file, 'images', 'uploads')

      if (error) throw error
      setImagePath(path)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="mt-1 block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
        />
      </div>

      {uploading && <div>Uploading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      
      {imagePath && (
        <div>
          <img
            src={imagePath}
            alt="Uploaded image"
            className="max-w-sm rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}