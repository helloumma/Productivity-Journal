"use client";

import { newToDo, getUser, getToDo } from "@/lib/supabase";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";

/**
 * TO DO
 * - Change to client component
 * - Program data fetch and form like reminders component
 * - Program a temp dummy onClick on each item mapped over
 * - Type checking
 * - Edit functionality
 * - Delete functionality
 * - Showing data from the list on the schedule component
 * - Reminder: add edit and delete icons back in with functionality
 */

export default function NewToDo() {
  // const getUserInfo = await getUser();
  // const todosData = await getToDo();

  // if (!getUserInfo) {
  //   // Redirect or handle the case where the user is not authenticated
  //   return <div>You need to be authenticated to view this page.</div>;
  // }

  const [data, setData] = useState<any>();

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  useEffect(() => {
    const fetchList = async () => {
      const getData = await getToDo();
      setData(getData);
    };
    fetchList();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">To Do</h1>
      <form action={newToDo}>
        <input
          name="title"
          className="border border-gray-300  p-2 rounded w-2/3"
          placeholder="Add new task..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
        >
          Add task
        </button>
      </form>

      {data?.map((todo: { id: number; title: string }) => (
        <div className="flex pt-4">
          <div className="flex w-3/4">
            {/*<input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
      />*/}
            <ul key={todo.id} className="ml-4 list-disc">
              <li onClick={handleClick}>{todo.title}</li>
            </ul>
          </div>
          {/* <div className="flex w-1/4">
            <EditButton />
            <DeleteButton />
          </div> */}
        </div>
      ))}
    </>
  );
}
