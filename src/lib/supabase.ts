import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!!

// export const supabaseClient = (token: string) => {
//   const client = createClient(supabaseUrl, supabaseKey, {
//     global: {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   })

//   return client
// }

export const supabaseClient = (token: string) => {
  const client = createClientComponentClient({ 
    supabaseUrl, 
    supabaseKey, 
    options: 
    { global: 
      { 
        headers: { 
          Authorization: `Bearer ${token}`
        } 
      } 
    } 
  })

  return client
}