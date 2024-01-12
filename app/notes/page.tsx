import HabitTracker from "@/components/HabitTracker";
import NewToDo from "@/components/NewToDo";
import Reminders from "@/components/Reminders";
import Schedule from "@/components/Schedule";
import MoodTracker from "@/components/MoodTracker";
import {
  deleteReminder,
  deleteToDo,
  editToDo,
  getReminder,
  getToDo,
  newToDo,
  newReminder,
  newHabit,
  getHabit,
  deleteHabit,
  editHabit,
} from "@/actions/supabase";
import NotesHeader from "@/components/NotesHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

/**
 * TO DO
 * - Move all data handling to be HERE and then send things like new Habit, getReminders from this component
 * - BUG: Check add function in "To Do"
 * - BUG: Check add function in "Reminders"
 * - BUG: Edit on Habit Tracker currently not working
 * - BUG: Hydration issue with Dial in Habit Tracker
 * - BUG: Validation messages show on initial render of each modal
 * - BUG: Modal doesn't close on reminders after add
 * - BUG: Reminders are deleted based on date rather than the date AND time set
 * - BUG: Reminders notification modal should show based on the time of the day given the date
 * - BUG: ALL type fixes on all pages
 */

export default async function Page() {
  const getToDoData = await getToDo();
  const getReminderData = await getReminder();
  const getHabitsData = await getHabit();

  const handleToDoDelete = async (id: string) => {
    "use server";
    await deleteToDo(id);
  };
  const handleReminderDelete = async (id: string) => {
    "use server";
    await deleteReminder(id);
  };
  const handleHabitDelete = async (id: string) => {
    "use server";
    await deleteHabit(id);
  };

  const handleToDoEdit = async (title: any, id: any, time: any) => {
    "use server";
    await editToDo(title, id, time);
  };
  const handleHabitEdit = async (habit: any, id: any, emoji: any) => {
    "use server";
    await editHabit(habit, id, emoji);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap">
        <div className="w-full p-4 mx-8 my-2 rounded border-slate-600 border">
          <NotesHeader />
        </div>
        <div className="flex  mx-8 my-2 w-full">
          <div className="w-full rounded border-slate-600 border flex">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>
                <Schedule />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>
                <NewToDo
                  getData={getToDoData}
                  handleDelete={handleToDoDelete}
                  handleAdd={newToDo}
                  handleEditsSubmit={handleToDoEdit}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
        <div className="flex w-full mx-8 my-2">
          <div className="w-full mr-2 rounded border-slate-600 border">
            <HabitTracker
              getData={getHabitsData}
              handleDelete={handleHabitDelete}
              handleAdd={newHabit}
            />
          </div>
          <div className="w-full ml-2 rounded border-slate-600 border">
            <Reminders
              getData={getReminderData}
              handleDelete={handleReminderDelete}
              handleAdd={newReminder}
              handleEditsSubmit={handleHabitEdit}
            />
          </div>
        </div>
        <div className="w-full p-4  mx-8 my-2 rounded border-slate-600 border">
          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
