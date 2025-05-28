import React, { useState } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { fetchWord } from "../API/api";
import { setWordData, setLoading, setError } from "../features/wordSlice";
import search from "../assets/icon-search.svg";

const SearchField: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleSearch = async (searchValue: string) => {
    if (!searchValue.trim()) {
      setInputError(true);
      return;
    }
    setInputError(false);

    try {
      dispatch(setLoading(true));
      dispatch(setError(false));
      const data = await fetchWord(searchValue);
      dispatch(setWordData(data));
    } catch (err) {
      console.error("Помилка при запиті слова:", err);
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className=" w-full flex flex-col gap-2">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className={`text-2xl focus:ring-2 focus:ring-accent-purple dark:text-white dark:bg-dark-700 w-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500 h-16 rounded-2xl ${
            inputError ? "border-[#FF5252]" : "border-gray-300"
          }`}
        />
        {inputError && (
          <span className="text-sm text-[#FF5252] ml-2">
            Whoops, can’t be empty…
          </span>
        )}
      </div>

      <button
        onClick={() => handleSearch(searchValue)}
        className="text-white font-bold py-4 px-4 rounded-md"
      >
        <img src={search} alt="icon" className="w-10 hover:brightness-125"/>
      </button>
    </div>
  );
};

export default SearchField;
