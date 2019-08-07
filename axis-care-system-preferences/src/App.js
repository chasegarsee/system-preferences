import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Navigation from "./components/systempreferences/sideBarNavigation/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Navigation />
      </div>
    );
  }
}
export default App;
