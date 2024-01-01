// to do: refactor further

export default function AddForm({
  formAction,
  onBlurReminderDate,
  onBlurReminderTime,
  onBlurReminderInfo,
  onChangeReminderInfo,
  reminders,
  habitTracker,
  toDo,
  onChangeReminderDate,
  onChangeReminderTime,
  errorMessage,
  emojiVal,
  onChangeEmoji,
  onClickPicker,
  showPicker,
  viewPickerRender,
  onBlurHabit,
  onChangeHabit,
  onClickAddHabit,
  onBlurToDoTitle,
  onChangeToDoTitle,
  onChangeToDoTime,
  onBlurToDoTime,
}: any) {
  return (
    <>
      {reminders && (
        <form action={formAction}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Date
                  </label>
                </div>
                <input
                  name="date"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select date"
                  type="date"
                  onBlur={onBlurReminderDate}
                  onChange={onChangeReminderDate}
                />
              </div>
              {!errorMessage.date && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
              <div className="flex p-1 items-center">
                <div className="space-y-1 mr-4">
                  <label
                    className="text-sm font-medium leading-none"
                    htmlFor="date"
                  >
                    Time
                  </label>
                </div>

                <input
                  name="time"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Select time"
                  type="time"
                  onBlur={onBlurReminderTime}
                  onChange={onChangeReminderTime}
                />
              </div>
              {!errorMessage.time && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
            </div>

            <div className="flex">
              <textarea
                name="reminder"
                className="border border-gray-300  p-8 rounded w-full"
                placeholder="Add new reminder..."
                //onChange={onChange}
                //rows={2}
                onBlur={onBlurReminderInfo}
                onChange={onChangeReminderInfo}
              />
            </div>
          </div>
          {!errorMessage.reminder && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <div className="flex mt-2 justify-center">
            <button
              className="border border-gray-300 p-2 ml-2 rounded flex align-center w-1/7  hover:bg-gray-200"
              type="submit"
              // onClick={handleSubmit}
            >
              Add reminder
            </button>
          </div>
        </form>
      )}
      {habitTracker && (
        <form action={formAction}>
          <input
            name="emoji"
            className="border border-gray-300  p-2 rounded w-1/6"
            value={emojiVal}
            onChange={onChangeEmoji}
            hidden={true}
          />
          <button onClick={onClickPicker} className="text-2xl">
            {emojiVal ? emojiVal : "☺"}
          </button>
          {showPicker && viewPickerRender}
          <input
            name="habit"
            className="border border-gray-300  p-2 rounded w-5/6 ml-4"
            placeholder="Add new habit..."
            onBlur={onBlurHabit}
            onChange={onChangeHabit}
          />
          {!errorMessage.habit && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <button
            className="border border-gray-300 p-2 ml-2 rounded w-1/7 mt-4 hover:bg-gray-200"
            type="submit"
            onClick={onClickAddHabit}
          >
            Add habit
          </button>
        </form>
      )}
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
              className={
                errorMessage
                  ? "border border-red-300 p-2 rounded w-full"
                  : "border border-gray-300 p-2 rounded w-full"
              }
              placeholder="Add new task..."
              onBlur={onBlurToDoTitle}
              onChange={onChangeToDoTitle}
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
              step="3600"
              onChange={onChangeToDoTime}
              onBlur={onBlurToDoTime}
            />
          </div>
          {!errorMessage.time && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
          <div className="py-4 ml-1">
            <button
              className="px-4 border py-2 border-gray-300 text-gray-800 rounded hover:bg-gray-200 dark:text-white"
              type="submit"
              // onClick={() => setShowModal(false)}
            >
              Add task
            </button>
          </div>
        </form>
      )}
    </>
  );
}
