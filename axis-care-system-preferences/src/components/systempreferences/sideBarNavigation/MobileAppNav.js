import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class MobileAppNav extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      open: false,
      active: ""
    };
  }

  handleClick() {
    if (!this.state.open) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    // const { open } = this.state;

    return (
      <div>
        <StyledNav
          ref={node => {
            this.node = node;
          }}
          onClick={this.handleClick}
          //aria-controls="example-collapse-text"
          //aria-expanded={openeight}
        >
          <StyledSpan>
            <StyledI className="fas fa-chevron-right" />
            Mobile App
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item action href="#link10">
              <InnerMenuDiv>
                <NavLink to="/mobile-app-settings">Mobile App Settings</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link11">
              <InnerMenuDiv>
                <NavLink to="/calls-and-alerts">Calls and Alerts</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link12">
              <InnerMenuDiv>
                <NavLink to="/open-visit-permissions">
                  Open Visit Permissions
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default MobileAppNav;
