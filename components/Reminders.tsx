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
      <h1 className="text-2xl font-bold">Reminders</h1>
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
        <div
          key={reminders.id}
          onClick={handleClick}
          className="bg-gray-300 p-4 mb-4"
        >
          <h1 className="text-xl font-bold">{reminders?.reminder}</h1>
          <div className="flex text-gray-400">
            <p className="text-sm gray-200">{reminders?.date}</p>
            <p className="text-sm ml-4">{reminders?.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}
