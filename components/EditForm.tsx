// to do: refactor further
export default function EditForm({
  formAction,
  errorMessage,
  habitTracker,
  toDo,
  currentToDo,
  handleInputChangeToDo,
  handleBlurToDoEdit,
  handleTimeChangeToDo,
  handleBlurToDoTimeEdit,
  currentHabit,
  handleEmojiInputChange,
  handleEmojiOnBlurChange,
  handleHabitInputChange,
  handleHabitOnBlurChange,
}: any) {
  return (
    <>
      {toDo && (
        <form action={formAction}>
          <div className="flex p-1 items-center">
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none mr-3"
                htmlFor="title"
              >
                Task
              </label>
            </div>
            <input
              name="title"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Edit task..."
              value={currentToDo ? currentToDo.title : ""}
              onChange={handleInputChangeToDo}
              onBlur={handleBlurToDoEdit}
            />
          </div>
          {!errorMessage.title && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <div className="flex p-1 items-center">
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none mr-3"
                htmlFor="time"
              >
                Time
              </label>
            </div>
            <input
              name="time"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Select time"
              type="time"
              value={currentToDo ? currentToDo.time : ""}
              onChange={handleTimeChangeToDo}
              onBlur={handleBlurToDoTimeEdit}
            />
          </div>
          {!errorMessage.time && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <div className="py-4 ml-1">
            <button
              className="px-4 border py-2 border-gray-300 text-gray-800 rounded hover:bg-gray-200 dark:text-white"
              type="submit"
            >
              Save task
            </button>
          </div>
        </form>
      )}
      {habitTracker && (
        <form action={formAction}>
          <input
            name="emoji"
            className="border border-gray-300  p-2 rounded w-1/6"
            placeholder="emoji"
            value={currentHabit ? currentHabit.emoji : ""}
            onChange={handleEmojiInputChange}
            onBlur={handleEmojiOnBlurChange}
          />
          {!errorMessage.emoji && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <input
            name="habit"
            className="border border-gray-300  p-2 rounded w-5/6"
            placeholder="Edit habit..."
            value={currentHabit ? currentHabit.habit : ""}
            onChange={handleHabitInputChange}
            onBlur={handleHabitOnBlurChange}
          />
          {!errorMessage.habit && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <button
            className="border border-gray-300 p-2 ml-2 rounded w-1/7  mt-4  hover:bg-gray-200"
            type="submit"
          >
            Save habit
          </button>
        </form>
      )}
    </>
  );
}
