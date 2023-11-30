import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function NewToDo() {
  const addTodo = async (formData: FormData) => {
    "use server";

    const title = formData.get("title");
    const supabase = createServerActionClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("todo").insert({ title, userId: user?.id }).select();

    revalidatePath("/notes");
  };

  return (
    <form action={addTodo}>
      <input name="title" className="bg-green-800" />
    </form>
  );
}
