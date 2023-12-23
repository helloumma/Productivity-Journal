import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeProvider";
export default function NotesHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M5 21h14a2 2 0 002-2V8a1 1 0 00-.29-.71l-4-4A1 1 0 0016 3H5a2 2 0 00-2 2v14a2 2 0 002 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5H5z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            d="M20.328 11v2H7.5l3.243 3.243-1.415 1.414L3.672 12l5.656-5.657 1.415 1.414L7.5 11h12.828z"
          />
        </svg>
        <input
          name="header-date"
          className="border p-2 rounded w-1/10 mx-8"
          placeholder="Select date"
          type="date"
        />
        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
          />
        </svg>
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
{
  /* <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
        <path d="M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zm-1 7a3 3 0 11-6 0 3 3 0 016 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
      </svg>
      <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
        <path d="M12 1a1 1 0 011 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 011-1h8zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z" />
        <path d="M8 10a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 22H4v-2a5 5 0 015-5h6a5 5 0 015 5v2zm-8-9a6 6 0 110-12 6 6 0 010 12z" />
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 22h-2v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2H4v-2a5 5 0 015-5h6a5 5 0 015 5v2zm-8-9a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8z" />
      </svg> */
}
