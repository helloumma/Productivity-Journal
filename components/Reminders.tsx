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

  return (
    <>
      <h1 className="text-2xl font-bold">Reminders</h1>
      <form onSubmit={handleAddReminder}>
        <input
          name="reminder"
          className="border border-gray-300  p-2 rounded w-2/3"
          placeholder="Add new reminder..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
        >
          Add reminder
        </button>
      </form>
      {reminderData.map((reminders: any) => (
        <p key={reminders.id} onClick={handleClick}>
          {reminders?.reminder}
        </p>
      ))}
    </>
  );
}
