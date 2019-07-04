import React, { Component } from "react";
import "./Navigation.css";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar-div">
        <Navbar>
          <Navbar.Brand href="#home">AxisCare</Navbar.Brand>
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
      </div>
    );
  }
}
export default NavigationBar;
