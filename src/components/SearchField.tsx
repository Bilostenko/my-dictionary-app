import React, { useState } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { fetchWord } from "../API/api";
import { setWordData, setLoading, setError } from "../features/wordSlice";

const SearchField: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (searchValue: string) => {
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
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="text-2xl focus:ring-2 focus:ring-accent-purple  dark:border-none dark:text-white dark:bg-dark-700  w-full px-4 py-2 border-2 border-gray-300 focus:outline-none   focus:border-blue-500 h-16 rounded-2xl"
      />

      <button
        onClick={() => handleSearch(searchValue)}
        className="text-white font-bold py-4 px-4 rounded-md"
      >
        <img src="./src/assets/icon-search.svg" alt="icon" />
      </button>
    </div>
  );
};

export default SearchField;
