"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Effect to detect system theme
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-4">
      {theme === "light" ? (
        <button onClick={toggleTheme}>
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.226 2.003a9.971 9.971 0 00-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0a9.972 9.972 0 002.926-7.297 10.037 10.037 0 00-.337-2.368 14.87 14.87 0 01-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842-1.906.423-3.214.032-3.93-.684-.716-.716-1.107-2.024-.684-3.93.279-1.253.893-2.635 1.841-3.986.415-.592.894-1.177 1.437-1.744-.776-.207-1.571-.32-2.368-.337zm5.43 15.654a7.964 7.964 0 002.251-4.438c-3.546 2.045-7.269 2.247-9.321.195-2.052-2.052-1.85-5.775.195-9.321a8 8 0 106.876 13.564z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
