import React, { Component } from "react";
import "./App.css";
import {
  Caregiver,
  Marketing,
  Client,
  Messaging,
  PayrollBillingQuickbooks,
  ReportDisplayOptions,
  Security,
  StatusTypes,
  Telephony,
  ThirdPartyBilling,
  MobileApp,
  UserContact,
  Navigation,
  Communities,
  Forms
} from "./components";
import { Route } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { Card, ListGroup } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#165FC7" }}>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            AxisCare
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Marketing</Nav.Link>
            <Nav.Link href="#scheduling">Scheduling</Nav.Link>
            <Nav.Link href="#clients">Cients</Nav.Link>
            <Nav.Link href="#caregivers">Caregivers</Nav.Link>
            <Nav.Link href="#calls">Calls</Nav.Link>
            <Nav.Link href="#alerts">Alerts</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
            <Nav.Link href="#messaging">Messaging</Nav.Link>
            <Nav.Link href="#more">More</Nav.Link>
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
            justifyContent: "center"
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
