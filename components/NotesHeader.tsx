import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeProvider";
import Image from "next/image";
import { SaveIcon, GraphIcon, LeftIcon, RightIcon } from "./Assets";
// To do: add onClick on graph icon to show modal of mood tracker analytics

export default function NotesHeader() {
  const date = new Date();
  const futureDate = date.getDate();
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  return (
    <div className="flex justify-between items-center">
      <div>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          <SaveIcon />
        </button>
        <button className="py-2 ml-4 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          <GraphIcon />
        </button>
      </div>
      <div className="flex items-center">
        <LeftIcon />
        <input
          name="header-date"
          className=" p-2 rounded w-1/10 mx-8 bg-transparent"
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
