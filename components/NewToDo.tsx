"use client";

import { useEffect, useState } from "react";
import { ToDo } from "@/lib/toDo/types";
import DropdownMenu from "./DropdownMenu";
import "../styles/styles.css";
import Modal from "./Modal";
import { ToDoIcon, AddIcon, ToggleDropDownIcon } from "./Assets";

// BUG TO BE FIXED: Modal should close when user adds a new item and list should be updated

export default function NewToDo({
  getData,
  handleDelete,
  handleAdd,
  handleEditsSubmit,
}: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentTodo, setCurrentTodo] = useState<any>(null);
  const [checkedItem, setCheckedItem] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState({ title: false, time: false });

  const handleCheckboxClick = (todoId: string) => {
    setCheckedItem((prevItems) => ({
      ...prevItems,
      [todoId]: !prevItems[todoId],
    }));
  };

  const handleDropdownToggle = (todoId: string) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [todoId]: !prevStates[todoId],
    }));
    setShowDropdown(true);
  };

  const toggleModal = () => {
    setShowModal(false);
    setEditModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    if (currentTodo) {
      setCurrentTodo({
        ...currentTodo,
        title: e.target.value,
      });
    }

    setIsTouched((prev) => ({ ...prev, title: false }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    if (currentTodo) {
      setCurrentTodo({
        ...currentTodo,
        time: e.target.value,
      });
    }

    setIsTouched((prev) => ({ ...prev, time: false }));
  };

  const handleEdit = (todo: ToDo) => {
    setShowModal(true);
    setEditModal(true);
    setShowDropdown(false);
    setCurrentTodo(todo);
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault;
    const updatedData = handleEditsSubmit(
      currentTodo.title,
      currentTodo.id,
      currentTodo.time
    );

    if (updatedData) {
      getData;
    } else {
      console.log("error");
    }
    setShowModal(false);
    setShowDropdown(false);
    //window.location.reload();
  };

  const title = (
    <div className="flex items-center">
      <ToDoIcon />
      <h1 className="text-2xl font-bold p-2">To Do</h1>
    </div>
  );

  const handleBlur = (field: string) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };
  return (
    <>
      <div className="pl-6 flex items-center border-b-4 border-gray-500 border-double justify-between">
        {title}

        <button onClick={() => setShowModal(true)}>
          <AddIcon />
        </button>
      </div>

      <Modal
        show={showModal}
        onClose={toggleModal}
        title={title}
        reminders={false}
        toDo={true}
      >
        {editModal && (
          <form action={handleEditSubmit}>
            <div className="flex p-1 items-center">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none mr-3"
                  htmlFor="title"
                >
                  Task
                </label>
              </div>
              <input
                name="title"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Edit task..."
                value={currentTodo ? currentTodo.title : ""}
                onChange={handleInputChange}
                onBlur={() => handleBlur("title")}
              />
            </div>
            {!isTouched.title && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <div className="flex p-1 items-center">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none mr-3"
                  htmlFor="time"
                >
                  Time
                </label>
              </div>
              <input
                name="time"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Select time"
                type="time"
                value={currentTodo ? currentTodo.time : ""}
                onChange={handleTimeChange}
                onBlur={() => handleBlur("time")}
              />
            </div>
            {!isTouched.time && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <div className="py-4 ml-1">
              <button
                className="px-4 border py-2 border-gray-300 text-gray-800 rounded hover:bg-gray-200 dark:text-white"
                type="submit"
              >
                Save task
              </button>
            </div>
          </form>
        )}
        {!editModal && (
          <form action={handleAdd}>
            <div className="flex p-1 items-center">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none mr-3"
                  htmlFor="title"
                >
                  Task
                </label>
              </div>
              <input
                name="title"
                className={
                  isTouched
                    ? "border border-red-300 p-2 rounded w-full"
                    : "border border-gray-300 p-2 rounded w-full"
                }
                placeholder="Add new task..."
                onBlur={() => handleBlur("title")}
                onChange={() =>
                  setIsTouched((prev) => ({ ...prev, title: false }))
                }
              />
            </div>
            {!isTouched.title && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <div className="flex p-1 items-center">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none mr-3"
                  htmlFor="time"
                >
                  Time
                </label>
              </div>
              <input
                name="time"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Select time"
                type="time"
                step="3600"
                onChange={() =>
                  setIsTouched((prev) => ({ ...prev, time: false }))
                }
                onBlur={() => handleBlur("time")}
              />
            </div>
            {!isTouched.time && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
            <div className="py-4 ml-1">
              <button
                className="px-4 border py-2 border-gray-300 text-gray-800 rounded hover:bg-gray-200 dark:text-white"
                type="submit"
                // onClick={() => setShowModal(false)}
              >
                Add task
              </button>
            </div>
          </form>
        )}
      </Modal>
      <div className="pt-2 px-4">
        {getData?.map((todo: ToDo) => (
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
                  <ToggleDropDownIcon />
                </button>
                {dropdownStates[todo.id] && showDropdown && (
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
