import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!!

export const supabaseClient = async (token: string) => {
  const client = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  })

  return client
}