// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchField from "./components/SearchField";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-white dark:bg-dark-900">
      <div className="w-full max-w-3xl px-4 flex flex-col gap-4">
        <Header />
       <SearchField onSearch={() => {}} />
      </div>
    </div>
  );
}


export default App;
