import { useState } from "react";
import ThemeSwitcher from "../pages/ThemeSwitcher";
const Header = () => {
  const [selectedFont, setSelectedFont] = useState("sans");

  const handleFont = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-4">
        <div>
          <img src="./src/assets/logo.svg" alt="logo" />
        </div>

        {/* Селектор шрифтів */}
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedFont}
              onChange={handleFont}
              className="dark:bg-dark-900 dark:text-white text-lg border-none block w-full px-9 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="sans">SAN SERIF</option>
              <option value="serif">SERIF</option>
              <option value="mono">MONO</option>
            </select>
            <img
              src="./src/assets/icon-arrow-down.svg"
              alt="arrow"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
