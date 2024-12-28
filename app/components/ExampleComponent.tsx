import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export default function ExampleComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example query - replace 'your_table' with your actual table name
        const { data, error } = await supabase
          .from('your_table')
          .select('*')
        
        if (error) throw error
        setData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}