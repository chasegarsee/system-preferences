import React from "react";
import { Nav } from "react-bootstrap";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        />
        <Nav.Link href="#marketing">Marketing</Nav.Link>
        <Nav.Link href="#scheduling">Scheduling</Nav.Link>
        <Nav.Link href="#clients">Cients</Nav.Link>
        <Nav.Link href="#caregivers">Caregivers</Nav.Link>
        <Nav.Link href="#calls">Calls</Nav.Link>
        <Nav.Link href="#alerts">Alerts</Nav.Link>
        <Nav.Link href="#reports">Reports</Nav.Link>
        <Nav.Link href="#messaging">Messaging</Nav.Link>
        <Nav.Link href="#more">More</Nav.Link>
      </div>
    );
  }
}

export default MenuItem;
