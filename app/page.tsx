import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/supabase";

export default async function Index() {
  const cookieStore = cookies();
  const getUserInfo = await getUser();
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };
  !getUserInfo ? redirect("/login") : redirect("/notes");
}
