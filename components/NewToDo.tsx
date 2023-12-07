import { newToDo, getUser, getToDo } from "@/lib/supabase";

export default async function NewToDo() {
  const getUserInfo = await getUser();
  const todosData = await getToDo();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <form action={newToDo}>
        <input name="title" className="bg-green-800" />
      </form>
      {todosData?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
}
