//import { useState } from "react";
import NewToDo from "@/components/NewToDo";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Modal from "@/components/Modal";
import { getToDo } from "@/lib/supabase";
import { useEffect, useState } from "react";
export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  //console.log(user?.id);

  if (!user) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  // to do (BE): separate all data fetched from each part (to do, reminders, habit tracker etc.)

  /**
   * TO DO
   * - Create an onClick handler for each todo item
   * - Create a modal component which uses a WISWQIG thing to auto-populate with what is currently
   * in the to-do list item
   * - Program the modal to save the updated "to do" item
   * - Program the modal to enable user to set a time for the "to do" item
   * - Ensure the modal is reusable for things such as habit tracker and reminders component
   * - Program the modal to enable users to assign a tag [MAY BE - not important atm]
   * - Add a save button to be able to update the state (atm keep everything local)
   * - Set up a libs file and put yo' SQL queries there
   * - Set up types files for each different component (to do, habit tracker etc etc)
   */

  //Fetch todos associated with the authenticated user
  const { data: todos } = await supabase
    .from("todo")
    .select()
    .eq("userId", user?.id);

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [currentTodo, setCurrentTodo] = useState<null | { title: string }>(
  //   null
  // );

  // const openModal = (todo: { title: string }) => {
  //   setCurrentTodo(todo);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setCurrentTodo(null);
  //   setModalIsOpen(false);
  // };

  // console.log("to do", getToDo);

  // const [todos, setTodos] = useState(null);

  // useEffect(() => {
  //   async function fetchTodos() {
  //     const todoData = await getToDo();
  //     setTodos(todoData);
  //   }

  //   fetchTodos();
  // }, []);

  return (
    <>
      <NewToDo />
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      {/* <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2 className="text-2xl mb-4">Todo Details</h2>
        {currentTodo && <p>{currentTodo?.title}</p>}
      </Modal> */}
    </>
  );
}
