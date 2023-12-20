// either find an npm package or build a drag + drop
/**
 * TO DO
 * - Automatically show each todo from the list in this component
 * - Figure out a way to use time blocks of 15 mins, 30 mins, one hour
 * -
 */

import { newSchedule, getUser, getSchedule } from "@/actions/supabase";
import AddButton from "./AddButton";

export default async function Schedule() {
  const getUserInfo = await getUser();
  const scheduleData = await getSchedule();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Schedule</h1>

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

      <section className="grid grid-cols-1 gap-4 p-4">
        {scheduleData?.map((schedule) => (
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
        ))}
        <div className="flex justify-between items-center bg-white p-4 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
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
        </div>
      </section>
    </>
  );
}
