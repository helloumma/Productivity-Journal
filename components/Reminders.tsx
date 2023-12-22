"use client";

// to do: add an onClick to each item - open up a modal and show the data that was mapped over

import { getReminder, newReminder } from "@/actions/supabase";
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

  const handleSubmit = () => {
    window.location.reload();
  };

  const toggleModal = () => setShowModal(false);

  return (
    <>
      <div className="pl-6 flex items-center justify-between border-b-4 border-gray-500 border-double">
        <div className="flex items-center">
          {" "}
          <svg
            viewBox="0 0 800.336 1000"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M632.234 424c10.667 22.667 24 40 40 52s31 19.333 45 22c14 2.667 28.667 10.333 44 23 15.333 12.667 27 31 35 55 14.667 41.333-10 95-74 161s-148 118.333-252 157c-109.333 38.667-208.333 53.667-297 45-88.667-8.667-140.333-33.667-155-75-13.333-36-9.333-73 12-111s27.333-75 18-111c-37.333-128-53-228-47-300s43.667-136 113-192c17.333-14.667 27-31.667 29-51s11.667-32.333 29-39c16-5.333 31.333-1.333 46 12 14.667 13.333 33.333 19.333 56 18 88-1.333 154 20.667 198 66s97.333 134.667 160 268m-186 404c58.667-21.333 111.667-49.667 159-85s80.667-65.667 100-91 27.667-42 25-50c-5.333-14.667-21.667-25.667-49-33-27.333-7.333-68.667-7.667-124-1s-117.667 22.667-187 48c-68 25.333-125.667 54.333-173 87s-78.667 60.667-94 84c-15.333 23.333-21 41-17 53 2.667 8 19.333 15.333 50 22s75.333 8 134 4 117.333-16.667 176-38m-62-174c5.333-1.333 12.333-3.667 21-7s14.333-5.667 17-7l2 2c9.333 26.667 3.667 54.333-17 83s-50.333 49.667-89 63c-64 24-114.667 19.333-152-14 52-45.333 124.667-85.333 218-120" />
          </svg>
          <h1 className="text-2xl font-bold p-2">Reminders</h1>
        </div>

        <button onClick={() => setShowModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill mr-8"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
        </button>
      </div>

      <Modal show={showModal} onClose={toggleModal}>
        <form action={newReminder}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <div className="flex p-1 items-center">
                <div className="space-y-1 ">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Date
                  </label>
                </div>
                <input
                  name="date"
                  className="border p-2 rounded w-full"
                  placeholder="Select date"
                  type="date"
                />
              </div>
              <div className="flex p-1 items-center">
                <div className="space-y-1">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Time
                  </label>
                </div>

                <input
                  name="time"
                  className="border p-2 rounded w-full"
                  placeholder="Select time"
                  type="time"
                />
              </div>
            </div>

            <div className="flex ">
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
              className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7"
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
          <div className="flex bg-gray-300 p-4 mb-4 justify-between items-center">
            <div>
              <div key={reminders.id} onClick={handleClick}>
                <h1 className="text-xl font-bold">{reminders?.reminder}</h1>
                <div className="flex text-gray-400">
                  <p className="text-sm gray-200">{reminders?.date}</p>
                  <p className="text-sm ml-4">{reminders?.time}</p>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
