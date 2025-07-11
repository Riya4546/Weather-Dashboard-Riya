import React, { useState} from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import WeatherCard from "./Components/WeatherCard";
import WeatherDetails from "./Components/WeatherDetails";
import Clock from "./Components/Clock";
import Tip from "./Components/Tip";
import Forecast from "./Components/Forecast";
import HourlyGraph from "./Components/HourlyGraph";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-r from-white to-[#cce7ff] text-black"
        } bg-[length:200%_200%] animate-gradient-x`}
      >
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-white dark:bg-gray-700 dark:text-white text-black px-4 py-2 rounded shadow hover:scale-105 transition-all"
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-5 px-4">
          <SearchBar />
          <Header />
          <div className="grid md:grid-cols-2 gap-6">
            <WeatherCard />
            <Clock />
          </div>
          <WeatherDetails />
          <HourlyGraph />
          <div className="grid md:grid-cols-2 gap-6">
            <Tip />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
