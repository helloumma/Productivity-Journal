export default function Modal({
  show,
  onClose,
  children,
  title,
  reminders,
  toDo,
}: any) {
  if (!show) {
    return null;
  }

  const remindersWidth = "w-1/3";
  const todoWidth = "w-96";
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10">
      <div
        className={`relative top-20 mx-auto p-5 border ${toDo && "w-96"} ${
          reminders && "w-1/3"
        } shadow-lg rounded-md bg-white`}
      >
        <div className="float-right">
          <button onClick={onClose}>
            <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          {children}

          {/* <div className="text-right mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
