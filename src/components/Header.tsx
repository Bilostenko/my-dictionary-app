import ThemeSwitcher from "../pages/ThemeSwitcher";
import { AppDispatch } from "../app/store";
import { setFont } from "../features/fontSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";
const Header = () => {
 const selectedFont = useSelector((state: RootState) => state.font.selectedFont);
  const dispatch = useDispatch<AppDispatch>();

  const handleFont = (selectedFont: string) => {
    dispatch(setFont(selectedFont));
    localStorage.setItem('selectedFont', selectedFont);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* Селектор шрифтів */}
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedFont}
              onChange={(e) => {handleFont(e.target.value)}}
              className="focus:shadow-[0_0_20px_rgba(168,85,247,0.7)] dark:bg-dark-900 dark:text-white text-lg border-none block w-full px-9 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="sans">SANS SERIF</option>
              <option value="serif">SERIF</option>
              <option value="mono">MONO</option>
            </select>
            <img
              src={arrow}
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
