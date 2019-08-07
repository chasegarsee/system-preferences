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
            <ListGroup.Item action href="#link110">
              <InnerMenuDiv>
                <NavLink to="/third-party-billing-general-settings">
                  User Status
                </NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link111">
              <InnerMenuDiv>
                <NavLink to="/caregiver-status">Caregiver Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link112">
              <InnerMenuDiv>
                <NavLink to="/client-status">Client Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link113">
              <InnerMenuDiv>
                <NavLink to="/applicant-status">Applicant Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link114">
              <InnerMenuDiv>
                <NavLink to="/lead-status">Lead Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link115">
              <InnerMenuDiv>
                <NavLink to="/contact-status">Contact Status</NavLink>
              </InnerMenuDiv>
            </ListGroup.Item>
            <ListGroup.Item action href="#link116">
              <InnerMenuDiv>
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
