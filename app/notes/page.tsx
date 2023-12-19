import HabitTracker from "@/components/HabitTracker";
import NewToDo from "@/components/NewToDo";
import Reminders from "@/components/Reminders";
import Schedule from "@/components/Schedule";
import MoodTracker from "@/components/MoodTracker";
import { getToDo } from "@/lib/supabase";
import NotesHeader from "@/components/NotesHeader";

/**
 * TO DO
 * - Move all data handling to be HERE and then send things like new Habit, getReminders from this component
 */

//     box-shadow: 13px 12px 2px 1px rgba(0, 0, 255, .2);

export default function Page() {
  return (
    <div className=" p-4">
      <div className="flex flex-wrap shadow-custom">
        <div className="w-full p-4  border-slate-600 border">
          <NotesHeader />
        </div>
        <div className="w-1/2 p-4  border-slate-600 border">
          <Schedule />
        </div>
        <div className="w-1/2 p-4  border-slate-600 border">
          <NewToDo />
        </div>
        <div className="w-1/2 p-4  border-slate-600 border">
          <HabitTracker />
        </div>
        <div className="w-1/2 p-4  border-slate-600 border">
          <Reminders />
        </div>
        <div className="w-full p-4  border-slate-600 border">
          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
