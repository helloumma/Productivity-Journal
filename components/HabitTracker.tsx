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
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <form action={newHabit}>
        <input
          name="habit"
          className="border border-gray-300  p-2 rounded w-2/3"
          placeholder="Add new habit..."
        />
        <button
          className="border border-gray-300 p-2 ml-2 rounded w-1/7"
          type="submit"
        >
          Add habit
        </button>
      </form>
      {habitData?.map((habits) => (
        <div className="pb-2">
          <div className="flex justify-between pb-2">
            <p key={habits.id}>{habits.habit}</p>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
          </div>

          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{
                width: "75%",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
