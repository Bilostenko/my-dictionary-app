// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import WordInfo from "./components/WordInfo";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-white dark:bg-dark-900">
      <div className="w-full max-w-3xl px-4 flex flex-col gap-4">
        <Header />
       <SearchField onSearch={() => {}} />
        <WordInfo />
      </div>
    </div>
  );
}


export default App;
