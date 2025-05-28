// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { toggleTheme } from "../features/toggleThemeSlice";
import moon from "../assets/icon-moon.svg";
const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.app.theme);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleThemeToggle}
        className="relative w-10 h-5 rounded-full bg-gray-300 dark:bg-accent-purple transition-colors duration-300"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div 
          className={`absolute w-3.5 h-3.5 bg-white rounded-full top-[3px] transition-transform duration-300 ${
            theme === "dark" ? "translate-x-5 left-1" : "translate-x-0 left-1"
          }`}
        />
      </button>
      <img
        src={moon}
        alt="Dark Mode"
        className={`w-5 h-5 ${theme === "dark" ? "opacity-100" : "opacity-70"}`}
      />
    </div>
  );
};

export default ThemeSwitcher;