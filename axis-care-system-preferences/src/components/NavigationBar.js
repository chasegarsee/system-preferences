import React, { Component } from "react";
import "./Navigation.css";
import Menu from "./mobileview/Menu";
import MenuButton from "./mobileview/MenuButton";
import MenuItem from "./mobileview/MenuItem";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null
      }
    };
    const menu = ["About Us", "Our Products", "Services", "FAQ", "Contact Us"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div className="navigation-container">
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
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        </div>
        <div className="mobile-nav-bar-div">
          <div className="mobile-nav-bar-container">
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="white"
            />
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>
      </div>
    );
  }
}
export default NavigationBar;
