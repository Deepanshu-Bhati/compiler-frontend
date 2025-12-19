"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./hooks";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`
        ${theme === "light"
          ? "text-black bg-amber-100"
          : "text-amber-100 bg-gray-900"
        }
        h-20 sticky top-0 z-50 w-full
        flex items-center px-6 shadow-md border-b border-gray-400
      `}
    >
      <div className="w-full flex justify-between items-center">

        <b className="text-5xl font-extrabold tracking-wide select-none">
          <span className="text-blue-400">DE</span>CODE
        </b>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full transition-all
                     hover:scale-110 active:scale-95"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <FaMoon className="text-3xl text-gray-700" />
          ) : (
            <FaSun className="text-3xl text-yellow-300" />
          )}
        </button>
      </div>
    </div>
  );
}
