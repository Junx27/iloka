import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL_ADMIN;
const supabaseKey = process.env.REACT_APP_ANON_KEY_ADMIN;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
