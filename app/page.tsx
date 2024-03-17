import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/supabase";

export default async function Index() {
  const getUserInfo = await getUser();

  !getUserInfo ? redirect("/login") : redirect("/notes");
}
