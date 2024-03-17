"use client";

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./Assets";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Effect to detect system theme
  useEffect(() => {
    const systemTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
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
          <SunIcon />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
