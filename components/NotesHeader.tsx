import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeProvider";
import { SaveIcon, LeftIcon, RightIcon } from "./Assets";
import GraphIcon from "./HabitTrackerButton";

export default function NotesHeader() {
  const date = new Date();
  const futureDate = date.getDate();
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  return (
    <div className="flex justify-between items-center">
      <div>
        <button className="py-2 px-4 rounded-md no-underline dark:bg-gray-500 bg-btn-background hover:bg-btn-background-hover">
          <SaveIcon />
        </button>
        <GraphIcon />
      </div>
      <div className="flex items-center">
        <LeftIcon />
        <input
          name="header-date"
          className="dark:text-white p-2 rounded w-1/10 mx-8 bg-transparent dark:[color-scheme:dark]"
          placeholder="Select date"
          type="date"
          defaultValue={defaultValue}
        />
        <RightIcon />
      </div>
      <div className="flex items-baseline">
        <div>
          <ThemeToggle />
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
