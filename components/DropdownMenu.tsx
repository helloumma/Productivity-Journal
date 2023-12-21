export default function DropdownMenu({ reminders, deleteItem }: any) {
  return (
    <div
      className={
        reminders
          ? `dark:bg-black w-1/12 absolute -ml-10 right-21 z-10 mt-32  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
          : `dark:bg-black w-1/12 absolute right-16 z-10 mt-0  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
      }
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
        >
          Edit
        </a>
        <hr />
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
          onClick={deleteItem}
        >
          Delete
        </a>
      </div>
    </div>
  );
}
