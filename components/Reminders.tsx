"use client";

// to do: add an onClick to each item - open up a modal and show the data that was mapped over

import { deleteReminder, getReminder, newReminder } from "@/actions/supabase";
import SendEmail from "@/actions/Email";
import { ReactNode, useEffect, useState } from "react";
import { reminders } from "@/lib/reminders/types";
import Modal from "./Modal";
import { RemindersIcon, AddIcon, DeleteReminderIcon } from "./Assets";

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

  // const date = newData?.map((a: any) => a.date);
  // const now: any = new Date().getDate;
  // const timeDiff = date[0] - now;
  // if (timeDiff > 0) {
  //   setTimeout(() => {
  //     SendEmail();
  //   }, timeDiff);
  // }
  // console.log(date);
  // console.log(now);
  // console.log(timeDiff);

  const title = (
    <div className="flex items-center">
      <RemindersIcon />
      <h1 className="text-2xl font-bold p-2">Reminders</h1>
    </div>
  );

  return (
    <>
      <div className="pl-6 flex items-center justify-between border-b-4 border-gray-500 border-double">
        {title}

        <button onClick={() => setShowModal(true)}>
          <AddIcon />
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
                <DeleteReminderIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
