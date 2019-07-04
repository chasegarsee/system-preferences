import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./components";
import NavigationBar from "./components/NavigationBar";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { from } from "rxjs";

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
