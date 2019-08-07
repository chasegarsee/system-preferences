import React from "react";
import { Nav } from "react-bootstrap";
import "../Navigation.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    // const styles = {
    //   container: {
    //     height: this.state.open ? "auto" : "0"
    //   },
    //   menuList: {
    //     paddingTop: "3rem"
    //   }
    // };
    return (
      <div className="mobile-nav-bar">
        {this.state.open ? (
          <div>
            <div>
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
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
