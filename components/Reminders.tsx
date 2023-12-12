"use client";

import { useReminders } from "@/lib/hooks";

// create one part for setting the reminder
// create another part to show reminder
// move the setting reminder part to a modal eventually

export default function Reminders() {
  const { reminderData, addReminder } = useReminders();

  const handleAddReminder = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await addReminder(formData);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("click");
  };

  //   <div className="flex flex-wrap p-4">
  //   <div className="w-1/2 p-4 border-left ">
  //     <Schedule />
  //   </div>
  //   <div className="w-1/2  p-4">
  //     <NewToDo />
  //   </div>
  //   <div className="w-1/2  p-4">
  //     <HabitTracker />
  //   </div>
  //   <div className="w-1/2  p-4">
  //     <Reminders />
  //   </div>
  //   <div className="w-full  p-4">
  //     <MoodTracker />
  //   </div>
  // </div>
  return (
    <>
      <h1 className="text-2xl font-bold">Reminders</h1>
      <form onSubmit={handleAddReminder}>
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
                name="date"
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
              //rows={2}
            />
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <button
            className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7"
            type="submit"
          >
            Add reminder
          </button>
        </div>
      </form>
      {reminderData.map((reminders: any) => (
        <p key={reminders.id} onClick={handleClick}>
          {reminders?.reminder}
        </p>
      ))}
    </>
  );
}
