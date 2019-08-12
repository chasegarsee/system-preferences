import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";

class StatusTypesNav extends React.Component {
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
            <StyledI className="fas fa-chevron-right" /> Status Types
          </StyledSpan>
        </StyledNav>
        <Collapse in={this.state.open}>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link110">
                <NavLink to="/third-party-billing-general-settings">
                  User Status
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link111">
                <NavLink to="/caregiver-status">Caregiver Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link112">
                <NavLink to="/client-status">Client Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link113">
                <NavLink to="/applicant-status">Applicant Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link114">
                <NavLink to="/lead-status">Lead Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link115">
                <NavLink to="/contact-status">Contact Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item>
              <InnerMenuDiv action="true" href="#link116">
                <NavLink to="/organization-status">Organization Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default StatusTypesNav;
