import { createClient } from "@supabase/supabase-js";

const supabse = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_SUPABASE_SERVICE_KEY
);
export default supabse;
