"use client";

import { newHabit, getUser, getHabit } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { habit } from "@/lib/habitTracker/types";
import Toggle from "./Toggle";
import CircleDial from "./CircleDial";
/**
 * TO DO
 * - Program progress bar for each click on checkbox (should this data be stored locally or within the db(?))
 * - Find out if an emoji picker is a thing
 * - Replace the green bars with a toggle instead(?)
 */

/**
 * TO DO [STYLING]
 * - Create a grid for emoji, habit and toggle
 * - Add some dummy small chart dials
 */

export default function HabitTracker() {
  // const getUserInfo = await getUser();
  // const habitData = await getHabit();

  // if (!getUserInfo) {
  //   // Redirect or handle the case where the user is not authenticated
  //   return <div>You need to be authenticated to view this page.</div>;
  // }

  const [data, setData] = useState<any>();

  const handleClick = (e: any) => {
    e.preventDefault;
    console.log("click");
  };

  useEffect(() => {
    const fetchHabits = async () => {
      const getData = await getHabit();
      setData(getData);
    };
    fetchHabits();
  }, []);

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <form action={newHabit}>
        <input
          name="emoji"
          className="border border-gray-300  p-2 rounded w-1/6"
          placeholder="emoji"
        />
        <input
          name="habit"
          className="border border-gray-300  p-2 rounded w-5/6"
          placeholder="Add new habit..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
          onClick={handleSubmit}
        >
          Add habit
        </button>
      </form>
      {data?.map((habits: habit, i: number) => (
        <div className="pb-2" key={i + 1}>
          <div
            className="flex justify-between p-4 bg-green-200"
            key={habits.id}
          >
            <div className="flex items-center">
              <div className="p-4">{habits.emoji}</div>
              <p className="text-xl font-bold ml-2" onClick={handleClick}>
                {habits.habit}
              </p>
            </div>

            {/* <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
            /> */}
            <div className="flex items-center">
              <Toggle />
              <svg
                className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 4 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"
                />
              </svg>
            </div>
          </div>

          {/* <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{
                width: "75%",
              }}
            />
          </div> */}
        </div>
      ))}
      <div className="flex">
        <CircleDial percentage={75} title={"🎄 test"} />
        <CircleDial percentage={50} title={"🫠 another test"} />
        <CircleDial percentage={95} title={"🎄 test"} />
        <CircleDial percentage={35} title={"🫠 another test"} />
      </div>
    </>
  );
}
