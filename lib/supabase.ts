import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const cookieStore = cookies();
const supabase = createClient(cookieStore);
const user = getUser();

export async function getUser() {
  "use server";
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getToDo() {
  "use server";
  const { data: todos } = await supabase
    .from("todo")
    .select()
    .eq("userId", (await user)?.id);

  return todos;
}

export async function newToDo(formData: FormData) {
  "use server";
  const title = formData.get("title");
  await supabase
    .from("todo")
    .insert({ title, userId: (await user)?.id })
    .select();
  revalidatePath("/notes");
}
