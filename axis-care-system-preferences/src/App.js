import React, { Component } from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { from } from "rxjs";
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
