import HabitTracker from "@/components/HabitTracker";
import NewToDo from "@/components/NewToDo";
import Reminders from "@/components/Reminders";
import Schedule from "@/components/Schedule";
export default function Page() {
  /**
   * TO DO
   * - Create an onClick handler for each todo item
   * - Create a modal component which uses a WISWQIG thing to auto-populate with what is currently
   * in the to-do list item
   * - Program the modal to save the updated "to do" item
   * - Program the modal to enable user to set a time for the "to do" item
   * - Ensure the modal is reusable for things such as habit tracker and reminders component
   * - Program the modal to enable users to assign a tag [MAY BE - not important atm]
   * - Add a save button to be able to update the state (atm keep everything local)
   * - Set up a libs file and put yo' SQL queries there
   * - Set up types files for each different component (to do, habit tracker etc etc)
   */

  return (
    <>
      <div>
        <h2>[TO DO]</h2>
        <NewToDo />
      </div>
      <div>
        <h2>[REMINDERS]</h2>
        <Reminders />
      </div>
      <div>
        <h2>[HABIT TRACKER]</h2>
        <HabitTracker />
      </div>
      <div>
        <h2>[SCHEDULE]</h2>
        <Schedule />
      </div>
    </>
  );
}
