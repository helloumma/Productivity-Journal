"use client";

import { useState } from "react";
import { ToDo, data } from "@/lib/toDo/types";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { ToDoIcon, AddIcon, ToggleDropDownIcon } from "./Assets";
import "../styles/styles.css";

// BUG TO BE FIXED: Modal should close when user adds a new item and list should be updated

export default function NewToDo({
  getData,
  handleDelete,
  handleAdd,
  handleEditsSubmit,
}: ToDo) {
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
          <EditForm
            toDo={true}
            currentToDo={currentTodo}
            handleInputChangeToDo={handleInputChange}
            handleBlurToDoEdit={() => handleBlur("title")}
            handleTimeChange={handleTimeChange}
            handleBlurToDoTimeEdit={() => handleBlur("time")}
            errorMessage={isTouched}
            formAction={handleEditSubmit}
          />
        )}
        {!editModal && (
          <AddForm
            toDo={true}
            errorMessage={isTouched}
            formAction={handleAdd}
            onBlurToDoTitle={() => handleBlur("title")}
            onChangeToDoTitle={() =>
              setIsTouched((prev) => ({ ...prev, title: false }))
            }
            onChangeToDoTime={() =>
              setIsTouched((prev) => ({ ...prev, time: false }))
            }
            onBlurToDoTime={() => handleBlur("time")}
          />
        )}
      </Modal>
      <div className="pt-2 px-4">
        {getData?.map((todo: data) => (
          <div
            className="bg-indigo-100 dark:bg-indigo-800 m-2 p-4 mb-4 rounded "
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
