import { newToDo, getUser, getToDo } from "@/lib/supabase";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default async function NewToDo() {
  const getUserInfo = await getUser();
  const todosData = await getToDo();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold">To Do</h1>
      <form action={newToDo}>
        <input
          name="title"
          className="border border-gray-300 text-gray-300 p-2 rounded w-2/3"
          placeholder="Add new task..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
        >
          Add task
        </button>
      </form>

      {todosData?.map((todo) => (
        <div className="flex pt-4">
          <div className="flex w-3/4">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
            <p key={todo.id} className="ml-4">
              {todo.title}
            </p>
          </div>
          <div className="flex w-1/4">
            <EditButton />
            <DeleteButton />
          </div>
        </div>
      ))}
    </>
  );
}
