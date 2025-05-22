// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import WordInfo from "./components/WordInfo";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const selectedFont = useSelector(
    (state: RootState) => state.font.selectedFont
  );

  return (
    <div
      className={`flex justify-center bg-white dark:bg-dark-900 min-h-screen transition-all duration-300 ${
        selectedFont === "sans"
          ? "font-sans"
          : selectedFont === "serif"
          ? "font-serif"
          : "font-mono"
      }`}
    >
      <div className="w-full max-w-3xl px-4 flex flex-col gap-4">
        <Header />
        <SearchField />
        <WordInfo />
      </div>
    </div>
  );
}

export default App;
