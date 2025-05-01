// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-white dark:bg-dark-900">
      <div className="w-full max-w-3xl px-4 flex flex-col gap-4">
        <Header />
        {/* решта компонентів */}
      </div>
    </div>
  );
}


export default App;
