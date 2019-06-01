import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./components";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#165FC7" }}>
          <Navbar.Brand
            href="#home"
            style={{ color: "white", fontSize: "1.6rem" }}
          >
            AxisCare
          </Navbar.Brand>
          <Nav className="mr-auto" style={{ color: "white" }}>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Marketing
            </Nav.Link>
            <Nav.Link href="#scheduling" style={{ color: "white" }}>
              Scheduling
            </Nav.Link>
            <Nav.Link href="#clients" style={{ color: "white" }}>
              Cients
            </Nav.Link>
            <Nav.Link href="#caregivers" style={{ color: "white" }}>
              Caregivers
            </Nav.Link>
            <Nav.Link href="#calls" style={{ color: "white" }}>
              Calls
            </Nav.Link>
            <Nav.Link href="#alerts" style={{ color: "white" }}>
              Alerts
            </Nav.Link>
            <Nav.Link href="#reports" style={{ color: "white" }}>
              Reports
            </Nav.Link>
            <Nav.Link href="#messaging" style={{ color: "white" }}>
              Messaging
            </Nav.Link>
            <Nav.Link href="#more" style={{ color: "white" }}>
              More
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <h1
          style={{
            fontWeight: "300",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            marginBottom: "0"
          }}
        >
          AxisCare System Preferences
        </h1>

        <Navigation />
      </div>
    );
  }
}
export default App;
