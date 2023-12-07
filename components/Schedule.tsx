// either find an npm package or build a drag + drop
/**
 * TO DO
 * - Automatically show each todo from the list in this component
 * - Figure out a way to use time blocks of 15 mins, 30 mins, one hour
 * -
 */

import { newSchedule, getUser, getSchedule } from "@/lib/supabase";

export default async function Schedule() {
  const getUserInfo = await getUser();
  const scheduleData = await getSchedule();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <form action={newSchedule}>
        <input name="item" className="bg-red-500" />
      </form>
      {scheduleData?.map((schedule) => (
        <p key={schedule.id}>{schedule.item}</p>
      ))}
    </>
  );
}
