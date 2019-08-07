import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class ClientNav extends React.Component {
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
        >
          <StyledSpan>
            <StyledI className="fas fa-chevron-right" />
            Client
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item action href="#link30">
              <InnerMenuDiv>
                <NavLink to="/profile-options">Profile Options</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link31">
              <InnerMenuDiv>
                <NavLink to="/client-classes">Client Classes</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link32">
              <InnerMenuDiv>
                <NavLink to="/region-codes-client-and-caregiver">
                  Region Codes Client and Caregiver
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link33">
              <InnerMenuDiv>
                <NavLink to="/triage-categories">Triage Categories</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link34">
              <InnerMenuDiv>
                <NavLink to="/referral-sources">Other Referral Sources</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link35">
              <InnerMenuDiv>
                <NavLink to="/physician-information">
                  Physician Information
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ClientNav;
