import NewToDo from "@/components/NewToDo";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: notes } = await supabase.from("todo").select();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      {/* @ts-expect-error */}
      <NewToDo />
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  );
}
