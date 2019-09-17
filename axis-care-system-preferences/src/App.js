import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Navigation from "./components/systempreferences/sideBarNavigation/Navigation";
import { useDarkMode } from "./Hooks/useDarkMode";

import "./styles.scss";

const App = () => {
  const [mode, toggleMode] = useDarkMode("dark-mode", false);
  return (
    <div
      style={{ width: "100vw", height: "100%" }}
      className={`${mode === true ? "dark-mode" : ""}`}
    >
      <NavigationBar toggleMode={toggleMode} darkMode={mode} />
      <Navigation />
    </div>
  );
};
export default App;
