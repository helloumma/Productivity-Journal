"use client";

import {
  newToDo,
  getUser,
  getToDo,
  deleteToDo,
  editToDo,
} from "@/actions/supabase";
import { useEffect, useState } from "react";
import { ToDo } from "@/lib/toDo/types";
import DropdownMenu from "./DropdownMenu";
import "../styles/styles.css";
import Modal from "./Modal";

export default function NewToDo() {
  const [data, setData] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentTodo, setCurrentTodo] = useState<any>(null);
  const [checkedItem, setCheckedItem] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxClick = (todoId: string) => {
    setCheckedItem((prevItems) => ({
      ...prevItems,
      [todoId]: !prevItems[todoId],
    }));
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
    await deleteToDo(id);
    window.location.reload();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    if (currentTodo) {
      setCurrentTodo({
        ...currentTodo,
        title: e.target.value,
      });
    }
  };

  const handleEdit = (todo: ToDo) => {
    setShowModal(true);
    setEditModal(true);
    setEditModal(true);
    setCurrentTodo(todo);
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault;
    const updatedData = await editToDo(currentTodo.title, currentTodo.id);

    console.log(updatedData);
    if (updatedData) {
      const getData = await getToDo(); // Refetch the updated list
      setData(getData); // Update the state with the new list
      console.log(data);
    } else {
      console.log("error");
    }
    setShowModal(false);
    window.location.reload();
    console.log(data);
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
            className="mr-6"
          >
            <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
          </svg>
        </button>
      </div>

      <Modal show={showModal} onClose={toggleModal}>
        {editModal && (
          <form action={handleEditSubmit}>
            <input
              name="title"
              className="border border-gray-300 p-2 rounded w-2/3"
              placeholder="Edit task..."
              value={currentTodo ? currentTodo.title : ""}
              onChange={handleInputChange}
            />
            <button
              className="border bg-green-500 p-2 ml-2 rounded w-1/7"
              type="submit"
              // onSubmit={handleEditSubmit}
            >
              Save task
            </button>
          </form>
        )}
        {!editModal && (
          <form action={newToDo}>
            <input
              name="title"
              className="border border-gray-300 p-2 rounded w-2/3"
              placeholder="Add new task..."
            />
            <button
              className="border bg-green-500 p-2 ml-2 rounded w-1/7"
              type="submit"
              onClick={handleSubmit}
            >
              Add task
            </button>
          </form>
        )}
      </Modal>
      <div className="pt-2 px-4">
        {data?.map((todo: ToDo) => (
          <div
            className=" bg-indigo-100 dark:bg-indigo-800 m-2 p-4 mb-4 rounded "
            key={todo.id}
          >
            <ul className="flex justify-between items-center">
              <div className="flex">
                <input
                  type="checkbox"
                  className=" todo appearance-none h-6 w-6 border border-gray-300 
                rounded-full bg-white checked:bg-blue-600 checked:border-transparent 
                focus:outline-none mr-2 cursor-pointer"
                  style={{ borderRadius: "50%" }}
                  onClick={() => handleCheckboxClick(todo.id as string)}
                />
                <li className={checkedItem[todo.id] ? "line-through" : ""}>
                  {todo.title}
                </li>
              </div>
              <div className="-mr-4">
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
                    editItem={() => handleEdit(todo as any)}
                  />
                )}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
