import HabitTracker from "@/components/HabitTracker";
import NewToDo from "@/components/NewToDo";
import Reminders from "@/components/Reminders";
import Schedule from "@/components/Schedule";
import MoodTracker from "@/components/MoodTracker";
import { getToDo } from "@/actions/supabase";
import NotesHeader from "@/components/NotesHeader";

/**
 * TO DO
 * - Move all data handling to be HERE and then send things like new Habit, getReminders from this component
 */

//     box-shadow: 13px 12px 2px 1px rgba(0, 0, 255, .2);

export default function Page() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap">
        <div className="w-full p-4 mx-8 my-2 rounded border-slate-600 border">
          <NotesHeader />
        </div>
        <div className="flex  mx-8 my-2 w-full">
          <div className="w-full rounded border-slate-600 border flex">
            <div className="w-1/2 border-r">
              <Schedule />
            </div>
            <div className="w-1/2">
              <NewToDo />
            </div>
          </div>
        </div>
        <div className="flex w-full mx-8 my-2">
          <div className="w-full mr-2 rounded border-slate-600 border">
            <HabitTracker />
          </div>
          <div className="w-full ml-2 rounded border-slate-600 border">
            <Reminders />
          </div>
        </div>
        <div className="w-full p-4  mx-8 my-2 rounded border-slate-600 border">
          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
