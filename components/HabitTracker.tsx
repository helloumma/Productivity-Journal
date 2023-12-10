import { newHabit, getUser, getHabit } from "@/lib/supabase";

export default async function HabitTracker() {
  const getUserInfo = await getUser();
  const habitData = await getHabit();

  if (!getUserInfo) {
    // Redirect or handle the case where the user is not authenticated
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <form action={newHabit}>
        <input
          name="habit"
          className="bg-orange-500"
          placeholder="insert habit"
        />
      </form>
      {habitData?.map((habits) => (
        <p key={habits.id}>{habits.habit}</p>
      ))}
    </>
  );
}
