import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class SecurityNav extends React.Component {
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
    //  const { open } = this.state;

    return (
      <div>
        <StyledNav
          ref={node => {
            this.node = node;
          }}
          onClick={this.handleClick}
        >
          <StyledSpan>
            <StyledI className="fas fa-chevron-right" /> Security
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link130">
                <NavLink to="/password-requirements">
                  Password Requirements
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link131">
                <NavLink to="/login-logout-settings">
                  Login & Logout Settings
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link132">
                <NavLink to="/identity-confirmation">
                  Identity Confirmation
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link133">
                <NavLink to="/portal-permissions">Portal Permissions</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link134">
                <NavLink to="/open-visit-permissions">
                  Open Visit Permissions
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link135">
                <NavLink to="/advanced-user-permissions">
                  Advanced User Permissions
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default SecurityNav;
