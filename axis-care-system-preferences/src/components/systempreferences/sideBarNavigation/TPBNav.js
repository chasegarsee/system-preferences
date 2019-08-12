import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class TPBNav extends React.Component {
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
            <StyledI className="fas fa-chevron-right" /> Third Party Billing
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link100">
                <NavLink to="/third-party-billing-general-settings">
                  General Settings
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link101">
                <NavLink to="/organization-information">
                  Organization Information
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link102">
                <NavLink to="/custom-quickselect-options">
                  Custom Quickselect Options
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link103">
                <NavLink to="/payer-specific-options">
                  Payer Specific Options
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link104">
                <NavLink to="/administrative-contact-information">
                  Administrative Contact Information
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default TPBNav;
