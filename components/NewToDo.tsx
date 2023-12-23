"use client";

import { newToDo, getUser, getToDo, deleteToDo } from "@/actions/supabase";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";
import { ToDo } from "@/lib/toDo/types";
import DropdownMenu from "./DropdownMenu";
import "../styles/styles.css";
import Modal from "./Modal";
import { revalidatePath } from "next/cache";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
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

  const toggleModal = () => {
    setShowModal(false);
    setEditModal(false);
  };

  const handleDelete = async (id: string) => {
    // to do: refresh router path thing
    await deleteToDo(id);

    // if (success) {
    //   // Remove the item from the state
    //   setData(data.filter((item: ToDo) => item.id !== id));
    // } else {
    //   // Handle the error case
    //   console.error("Failed to delete the item.");
    // }

    window.location.reload();
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  const handleEdit = () => {
    setShowModal(true);
    setEditModal(true);
  };

  return (
    <>
      <div className="pl-6 flex items-center border-b-4 border-gray-500 border-double justify-between">
        <div className="flex items-center">
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M3.5 2a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5H12a.5.5 0 010-1h.5A1.5 1.5 0 0114 2.5v12a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-12A1.5 1.5 0 013.5 1H4a.5.5 0 010 1h-.5z" />
            <path d="M10 .5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5.5.5 0 01-.5.5.5.5 0 00-.5.5V2a.5.5 0 00.5.5h5A.5.5 0 0011 2v-.5a.5.5 0 00-.5-.5.5.5 0 01-.5-.5z" />
          </svg>
          <h1 className="text-2xl font-bold p-2 ">To Do</h1>
        </div>

        <button onClick={() => setShowModal(true)}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
            className="mr-8"
          >
            <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
          </svg>
        </button>
      </div>

      {/* some form of logic to understand if add or edit button was clicked and then render correct form */}
      <Modal show={showModal} onClose={toggleModal}>
        {editModal && "edit form here"}
        {!editModal && (
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
              onChange={handleChange}
            >
              Add task
            </button>
          </form>
        )}
      </Modal>

      {data?.map((todo: ToDo, i: number) => (
        <div className=" bg-indigo-100 dark:bg-indigo-800 m-2 p-4" key={i + 1}>
          <ul key={todo.id} className="ml-4 flex justify-between">
            <div className="flex">
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
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"
                  />
                </svg>
              </button>
              {dropdownStates[todo.id] && (
                <DropdownMenu
                  deleteItem={() => handleDelete(todo.id as string)}
                  editItem={handleEdit}
                />
              )}
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

/* <form action={newToDo}>
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
      </form> */
