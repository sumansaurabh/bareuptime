import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lkzjegtzvaluchvfouyb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxremplZ3R6dmFsdWNodmZvdXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NjUzODgsImV4cCI6MjA1NjQ0MTM4OH0.DXe83bPF8TwX7j8XZcy6KCIYNnlYO1TcbFCKht9d-Fo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
