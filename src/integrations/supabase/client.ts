// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://phrtzwfgqpffubfzwgud.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocnR6d2ZncXBmZnViZnp3Z3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2NjU4ODgsImV4cCI6MjA1NjI0MTg4OH0.oe4zcs_B2Yh9XHdhxkZ_XkYdV5VlrUgswItViAc3ng4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);