import React, { ChangeEvent, useState } from 'react';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="focus:ring-2 focus:ring-accent-purple  dark:border-none dark:text-white dark:bg-dark-700  w-full px-4 py-2 border-2 border-gray-300 focus:outline-none   focus:border-blue-500 h-16 rounded-2xl"
      />
     
      <button
        onClick={handleSearch}
        className="text-white font-bold py-4 px-4 rounded-md"
      >
        <img src="./src/assets/icon-search.svg" alt="icon" />
      </button>
    </div>
  );
};

export default SearchField;