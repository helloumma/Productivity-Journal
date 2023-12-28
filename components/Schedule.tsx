// either find an npm package or build a drag + drop
/**
 * TO DO
 * - Automatically show each todo from the list in this component
 * - Figure out a way to use time blocks of 15 mins, 30 mins, one hour
 * -
 */
"use client";

import { newSchedule, getUser, getSchedule, getToDo } from "@/actions/supabase";
import AddButton from "./AddButton";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from "react";

export default function Schedule() {
  // const getUserInfo = await getUser();
  // const scheduleData = await getSchedule();
  const [data, setData] = useState<any>();

  // if (!getUserInfo) {
  //   // Redirect or handle the case where the user is not authenticated
  //   return <div>You need to be authenticated to view this page.</div>;
  // }
  // const timeSlots = [];
  // for (let hour = 9; hour <= 22; hour++) {
  //   const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
  //   timeSlots.push(formattedHour);
  // }
  useEffect(() => {
    const fetchList = async () => {
      const getData = await getToDo();
      setData(getData);
    };
    fetchList();
  }, []);

  // const filterTimeStamps = data?.filter((a: any) => a).map((a: any) => a.time);

  // const mapData = timeSlots.map((timeSlot) =>
  //   filterTimeStamps?.filter((task) => task?.time === timeSlot)
  // );

  // console.log(mapData);

  // console.log(filterTimeStamps);
  // console.log(timeSlots);

  // const createTimeSlots = () => {
  //   const slots = [];
  //   for (let hour = 9; hour <= 22; hour++) {
  //     slots.push(`${hour}:00`);
  //   }
  //   return slots;
  // };

  // // Function to map tasks to their corresponding time slots
  // const mapTasksToTimeSlots = () => {
  //   const slots = createTimeSlots();
  //   const slotMap = slots.map((slot) => {
  //     // Find the task that matches the current slot, handle nulls
  //     const task = data.find((d: any) => d.time === slot)?.task || "No task";
  //     return { time: slot, task: task };
  //   });
  //   return slotMap;
  // };

  // const timeSlotTasks = mapTasksToTimeSlots();

  const dataFake = [
    { title: "one", time: "9:00" },
    { title: "two", time: "19:00" },
    { title: "three", time: "12:00" },
    { title: "four", time: "11:00" },
    { title: "five", time: "17:00" },
    { title: "seven", time: null },
  ];

  // Creating an array to represent each hour from 9 AM to 10 PM
  const hours = Array.from({ length: 14 }, (_, i) => 9 + i);

  // Mapping each hour to its tasks
  const schedule = hours.map((hour) => {
    const hourString = `${hour}:00:00`;
    return {
      hour: hourString,
      title: data?.filter((item: any) => item.time === hourString),
    };
  });

  console.log(schedule);
  console.log(data);

  return (
    <>
      <div className="pl-6 flex items-center border-b-4 border-gray-500 border-double">
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
          <path d="M9 7.5a.5.5 0 01.5-.5H15v2H9.5a.5.5 0 01-.5-.5v-1zm-2 3v1a.5.5 0 01-.5.5H1v-2h5.5a.5.5 0 01.5.5z" />
        </svg>
        <h1 className="text-2xl font-bold p-2">Schedule</h1>
      </div>
      {/* <div>
        {timeSlots.map((timeSlot) => (
          <div key={timeSlot}>
            <h3>{timeSlot}</h3>
            {data
              ?.filter((a: any) => a)
              .filter((task: { time: string }) => task.time === timeSlot)
              .map(
                (task: {
                  task:
                    | boolean
                    | Key
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                }) => (
                  <p>{task.task}</p>
                )
              )}
          </div>
        ))}
      </div> */}
      {/* <ul>
        {timeSlotTasks.map((slot, index) => (
          <li key={index}>
            <strong>{slot.time}</strong>: {slot.task}
          </li>
        ))}
      </ul> */}

      <div>
        {schedule.map((slot) => (
          <div key={slot.hour}>
            <h3>{slot.hour}</h3>
            {slot.title?.length > 0 ? (
              <ul>
                {slot.title.map((task: any) => (
                  <li key={task.title}>{task.title}</li>
                ))}
              </ul>
            ) : (
              <p>No tasks</p>
            )}
          </div>
        ))}
      </div>
      {/*<form action={newSchedule}>
        <input
          name="item"
          className="border border-gray-300  p-2 rounded w-2/3"
          placeholder="Add to schedule..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
        >
          Add to schedule
        </button>
  </form>*/}

      {/* <section className="grid grid-cols-1 gap-4 p-4 px-6"> */}
      {/* {scheduleData?.map((schedule) => (
          <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <h3 className="font-semibold text-lg md:text-xl">
              9:00 - 10:00 AM
            </h3>
            <p
              className="text-sm text-gray-500 dark:text-gray-400"
              key={schedule.id}
            >
              {schedule.item}
            </p>
          </div>
        ))} */}
      {/* <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">9:00 - 10:00 AM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Planning Meeting
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">10:00 - 11:00 AM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Team Standup
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">11:00 - 12:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Product Review
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">12:00 - 1:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lunch Break
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">1:00 - 2:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Client Meeting
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">2:00 - 3:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Design Review
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">3:00 - 4:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Coding Session
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">4:00 - 5:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">QA Testing</p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">5:00 - 6:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Project Wrap-up
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">6:00 - 7:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Dinner Break
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">7:00 - 8:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Personal Time
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">8:00 - 9:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Personal Time
          </p>
        </div>
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg md:text-xl">9:00 - 10:00 PM</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Personal Time
          </p>
        </div> */}
      {/* </section> */}
    </>
  );
}
