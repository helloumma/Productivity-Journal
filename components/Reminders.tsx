import { newReminder, getUser, getReminder } from "@/lib/supabase";

export default async function Reminders() {
  const getUserInfo = await getUser();
  const reminderData = await getReminder();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <form action={newReminder}>
        <input name="reminder" className="bg-blue-800" />
      </form>
      {reminderData?.map((reminders) => (
        <p key={reminders.id}>{reminders.reminder}</p>
      ))}
    </>
  );
}
