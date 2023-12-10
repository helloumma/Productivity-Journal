"use client";

import { useReminders } from "@/lib/hooks";

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
      <form onSubmit={handleAddReminder}>
        <input
          name="reminder"
          className="bg-blue-800"
          placeholder="Insert reminder..."
        />
      </form>
      {reminderData.map((reminders: any) => (
        <p key={reminders.id} onClick={handleClick}>
          {reminders?.reminder}
        </p>
      ))}
    </>
  );
}
