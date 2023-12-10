import HabitTracker from "@/components/HabitTracker";
import NewToDo from "@/components/NewToDo";
import Reminders from "@/components/Reminders";
import Schedule from "@/components/Schedule";
import MoodTracker from "@/components/MoodTracker";
/**
 * TO DO [styling]
 * - Add a reusable 'add/plus' button for each bit (for the onClick to modal)
 * - Within each component style it as it should look once the user has added an item
 * - Create an 'edit' icon button (for onClick to modal)
 */

/**
 * TO Do [functionality]
 * - Program an onClick on the add button to a modal (within the components - do one, all the others are the same)
 * - Program onClick for 'edit' icon to a modal
 * - Ensure the modal can be closed once opened
 */

export default function Page() {
  return (
    <div className="flex flex-wrap p-4">
      <div className="w-1/2 p-4 border-left ">
        <Schedule />
      </div>
      <div className="w-1/2  p-4">
        <NewToDo />
      </div>
      <div className="w-1/2  p-4">
        <HabitTracker />
      </div>
      <div className="w-1/2  p-4">
        <Reminders />
      </div>
      <div className="w-full  p-4">
        <MoodTracker />
      </div>
    </div>
  );
}
