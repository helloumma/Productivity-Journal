"use client";

// to do: add an onClick to each item - open up a modal and show the data that was mapped over

import { getReminder, newReminder } from "@/lib/supabase";
import { ReactNode, useEffect, useState } from "react";
import { reminders } from "@/lib/reminders/types";

/**
 * TO DO
 * - Render each reminder as card/rectangle and have three dot icon on top right
 * - Use this icon to edit or remove the render item in the map
 * Functionality to un-render reminders that have timed out (or something similar feature wise)
 */

export default function Reminders() {
  const [newData, setNewData] = useState<any>();

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

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reminders</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
        </svg>
      </div>

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
    </>
  );
}
