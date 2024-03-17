// import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";
"use server";
import supabaseServerComponentClient from '@/lib/supabase';

import { redirect } from "next/navigation";
import { getUser } from "@/actions/supabase";

export default async function Index() {
  const getUserInfo = await getUser();
  await supabaseServerComponentClient()

  !getUserInfo ? redirect("/login") : redirect("/notes");
}
