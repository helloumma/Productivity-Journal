import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function supabaseServerComponentClient() {

return createServerComponentClient({ cookies });

}