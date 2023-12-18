"use client";

import { newHabit, getUser, getHabit } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { habit } from "@/lib/habitTracker/types";
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
          <div className="flex justify-between pb-2">
            <p key={habits.id} onClick={handleClick}>
              {habits.habit}
              {habits.emoji}
            </p>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
          </div>

          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{
                width: "75%",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
