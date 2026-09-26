import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://giochygcukhyzxuvsjhc.supabase.co";
const supabaseKey = "sb_publishable_C-wMFO1lyDw9o6x0hCELrg_di0v1DaZ";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);