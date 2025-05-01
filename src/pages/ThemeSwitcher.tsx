import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Перевірка, чи має документ клас .dark
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleTheme}
        className="relative w-10 h-5 rounded-full bg-gray-300 dark:bg-accent-purple transition-colors duration-300"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div 
          className={`absolute w-3.5 h-3.5 bg-white rounded-full top-[3px] transition-transform duration-300 ${
            isDarkMode ? "translate-x-5 left-1" : "translate-x-0 left-1"
          }`}
        />
      </button>
      <img
        src="./src/assets/icon-moon.svg"
        alt="Dark Mode"
        className={`w-5 h-5 ${isDarkMode ? "opacity-100" : "opacity-70"}`}
      />
    </div>
  );
};

export default ThemeSwitcher;