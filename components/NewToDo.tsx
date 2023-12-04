import { newToDo } from "@/lib/supabase";

export default async function NewToDo() {
  return (
    <form action={newToDo}>
      <input name="title" className="bg-green-800" />
    </form>
  );
}
