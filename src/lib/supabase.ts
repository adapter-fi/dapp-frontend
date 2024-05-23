import { createClient } from "@supabase/supabase-js"

const supabaseUrl ='https://bqryvnfbxihrhikggprj.supabase.co'

export const supabase = createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_KEY as string
  )