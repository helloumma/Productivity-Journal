import NewToDo from "@/components/NewToDo";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user?.id);

  if (!user) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  // Fetch todos associated with the authenticated user
  const { data: todos } = await supabase
    .from("todo")
    .select()
    .eq("userId", user?.id);

  return (
    <>
      {/*@ts-expect-error */}
      <NewToDo />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
}
