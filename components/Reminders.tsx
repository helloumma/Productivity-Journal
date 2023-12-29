"use client";

// to do: add an onClick to each item - open up a modal and show the data that was mapped over

import { deleteReminder, getReminder, newReminder } from "@/actions/supabase";
import SendEmail from "@/actions/Email";
import { ReactNode, useEffect, useState } from "react";
import { reminders } from "@/lib/reminders/types";
import Modal from "./Modal";

/**
 * TO DO
 * - Render each reminder as card/rectangle and have three dot icon on top right
 * - Use this icon to edit or remove the render item in the map
 * Functionality to un-render reminders that have timed out (or something similar feature wise)
 */

export default function Reminders() {
  const [newData, setNewData] = useState<any>();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  useEffect(() => {
    const fetchNewReminders = async () => {
      const data = await getReminder();
      setNewData(data);
    };
    fetchNewReminders();
  }, []);

  useEffect(() => {
    // Set an interval to periodically check for items to delete
    const interval = setInterval(() => {
      newData.forEach((item: { date: string | number | Date; id: string }) => {
        console.log(item.date);
        if (new Date(item.date) < new Date()) {
          deleteReminder(item.id);
        }
      });
    }, 60000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [newData]);

  const handleSubmit = () => {
    window.location.reload();
  };

  const toggleModal = () => setShowModal(false);

  const handleDelete = async (id: string) => {
    // to do: refresh router path thing
    await deleteReminder(id);

    // if (success) {
    //   // Remove the item from the state
    //   setData(data.filter((item: ToDo) => item.id !== id));
    // } else {
    //   // Handle the error case
    //   console.error("Failed to delete the item.");
    // }

    window.location.reload();
  };

  const date = newData?.map((a: any) => a.date);
  const now: any = new Date().getDate;
  const timeDiff = date - now;
  if (timeDiff > 0) {
    setTimeout(() => {
      SendEmail();
    }, timeDiff);
  }
  console.log(date);
  console.log(now);
  console.log(timeDiff);

  const title = (
    <div className="flex items-center">
      <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em">
        <path d="M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 015.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z" />
      </svg>
      <h1 className="text-2xl font-bold p-2">Reminders</h1>
    </div>
  );

  return (
    <>
      <div className="pl-6 flex items-center justify-between border-b-4 border-gray-500 border-double">
        {title}

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

      <Modal
        show={showModal}
        onClose={toggleModal}
        reminders={true}
        toDo={false}
        title={title}
      >
        <form action={newReminder}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Date
                  </label>
                </div>
                <input
                  name="date"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select date"
                  type="date"
                />
              </div>
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Time
                  </label>
                </div>

                <input
                  name="time"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select time"
                  type="time"
                />
              </div>
            </div>

            <div className="flex">
              <textarea
                name="reminder"
                className="border border-gray-300  p-8 rounded w-full"
                placeholder="Add new reminder..."
                //onChange={onChange}
                //rows={2}
              />
            </div>
          </div>
          <div className="flex mt-2 justify-center">
            <button
              className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7  hover:bg-gray-200"
              type="submit"
              onClick={handleSubmit}
            >
              Add reminder
            </button>
          </div>
        </form>
      </Modal>
      <div className="p-4">
        {newData?.map((reminders: reminders) => (
          <div
            className="flex bg-gray-300 dark:bg-gray-600 rounded  p-4 mb-4 justify-between items-center"
            key={reminders.id}
          >
            <div onClick={handleClick}>
              <h1 className="text-xl font-bold">{reminders?.reminder}</h1>
              <div className="flex text-gray-400">
                <p className="text-sm gray-200">{reminders?.date}</p>
                <p className="text-sm ml-4">{reminders?.time}</p>
              </div>
            </div>

            <div className="-mr-1">
              <button onClick={() => handleDelete(reminders.id as any)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash "
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
