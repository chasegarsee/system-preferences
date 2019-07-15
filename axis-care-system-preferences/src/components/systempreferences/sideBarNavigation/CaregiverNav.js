import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class CaregiverNav extends React.Component {
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
    const { open } = this.state;

    return (
      <div>
        <StyledNav
          ref={node => {
            this.node = node;
          }}
          onClick={this.handleClick}
        >
          <StyledSpan>
            <StyledI className="fas fa-chevron-right" /> Caregiver
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item action href="#link1">
              <InnerMenuDiv>
                <NavLink to="/caregiver-setup">Caregiver Setup</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <InnerMenuDiv>
                <NavLink to="/care-notes">Care Notes</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <InnerMenuDiv>
                <NavLink to="/caregiver-classes-certifications-evaluations">
                  Classes Certifications Evaluations
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <InnerMenuDiv>
                <NavLink to="/recommend-caregiver">Recommend Caregiver</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              <InnerMenuDiv>
                <NavLink to="/caregiver-block-reasons">
                  Caregiver Block Reasons
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              <InnerMenuDiv>
                <NavLink to="/caregiver-points">Caregiver Points</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default CaregiverNav;
