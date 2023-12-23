export default function DropdownMenu({ reminders, deleteItem, editItem }: any) {
  return (
    <div
      className={
        reminders
          ? `dark:bg-black dark:text-white w-1/12 absolute -ml-10 right-21 z-10 mt-32  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
          : `dark:bg-black dark:text-white w-1/12 absolute right-14 z-10 mt-0  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
      }
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <a
          href="#"
          className="text-gray-700 dark:text-white block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
          onClick={editItem}
        >
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="mr-2"
            >
              <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            Edit
          </div>
        </a>
        <hr />

        <a
          href="#"
          className="text-gray-700 dark:text-white block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
          onClick={deleteItem}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
            Delete
          </div>
        </a>
      </div>
    </div>
  );
}
