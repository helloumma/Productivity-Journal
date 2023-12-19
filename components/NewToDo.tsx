"use client";

import { newToDo, getUser, getToDo } from "@/lib/supabase";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";
import { ToDo } from "@/lib/toDo/types";
import DropdownMenu from "./DropdownMenu";
import "../styles/styles.css";
/**
 * TO DO
 * - Edit functionality
 * - Delete functionality
 * - Showing data from the list on the schedule component
 * - Reminder: add edit and delete icons back in with functionality
 * - Add inputs for date and time (this will be moved to the modal)
 */

export default function NewToDo() {
  // const getUserInfo = await getUser();
  // const todosData = await getToDo();

  // if (!getUserInfo) {
  //   // Redirect or handle the case where the user is not authenticated
  //   return <div>You need to be authenticated to view this page.</div>;
  // }

  const [data, setData] = useState<any>();
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

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

  const handleSubmit = () => {
    window.location.reload();
  };
  const handleDropdownToggle = (todoId: string) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [todoId]: !prevStates[todoId],
    }));
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">To Do</h1>
      </div>

      <form action={newToDo}>
        <input
          name="title"
          className="border border-gray-300 p-2 rounded w-2/3"
          placeholder="Add new task..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
          onClick={handleSubmit}
        >
          Add task
        </button>
      </form>

      {data?.map((todo: ToDo, i: number) => (
        <div className=" bg-indigo-100 m-2 p-4" key={i + 1}>
          <ul key={todo.id} className="ml-4 flex justify-between">
            <div className="flex ">
              <input
                type="checkbox"
                className="checkbox appearance-none h-6 w-6 border border-gray-300 
                rounded-full bg-white checked:bg-blue-600 checked:border-transparent 
                focus:outline-none mr-2 cursor-pointer"
                style={{ borderRadius: "50%" }}
              />
              <li onClick={handleClick}>{todo.title}</li>
            </div>
            <div>
              <button onClick={() => handleDropdownToggle(todo.id as string)}>
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 4 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"
                  />
                </svg>
              </button>
              {dropdownStates[todo.id] && <DropdownMenu />}
            </div>
          </ul>

          {/* <div className="flex w-1/4">
            <EditButton />
            <DeleteButton />
          </div> */}
        </div>
      ))}
    </>
  );
}
