import AuthButton from "./AuthButton";

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

      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.226 2.003a9.971 9.971 0 00-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0a9.972 9.972 0 002.926-7.297 10.037 10.037 0 00-.337-2.368 14.87 14.87 0 01-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842-1.906.423-3.214.032-3.93-.684-.716-.716-1.107-2.024-.684-3.93.279-1.253.893-2.635 1.841-3.986.415-.592.894-1.177 1.437-1.744-.776-.207-1.571-.32-2.368-.337zm5.43 15.654a7.964 7.964 0 002.251-4.438c-3.546 2.045-7.269 2.247-9.321.195-2.052-2.052-1.85-5.775.195-9.321a8 8 0 106.876 13.564z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          {" "}
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
