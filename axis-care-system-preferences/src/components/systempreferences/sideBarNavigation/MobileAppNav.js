import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, Collapse } from "react-bootstrap";
import Switch from "react-switch";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";
import "../../../components/Navigation.css";
import { UncheckedIcon, CheckedIcon, StyledSelect } from "../../styles/Button";
import { StyledPara } from "../../styles/Divs";

class MobileAppNav extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      open: false,
      active: "",
      isHidden: true,
      checked: false
    };
  }

  handleToggleChange = value => {
    this.setState({
      checked: value,
      isHidden: !this.state.isHidden
    });
  };

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

  toggleHidden() {
    this.setState({});
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
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <label
                style={{
                  width: "175px",

                  margin: "0 0 10px 20px"
                }}
              >
                <Switch
                  onChange={this.handleToggleChange}
                  checked={this.state.checked}
                  height={30}
                  width={100}
                  onColor="#165FC7"
                  uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
                  checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
                />
                {this.state.isHidden && (
                  <div>
                    <StyledPara>
                      I agree to the mobile app usage fees of $25 per month and
                      $0.15 per visit. I understand that these amounts will be
                      added to my monthly bill. I understand that taking any
                      action (including but not limited to clocking in, clocking
                      out, recording ADL’s, Notes, Breaks, Mileage, Expenses,
                      and Travel Time) on a visit through the mobile app will
                      cause me to be billed the per visit fee for that visit. I
                      understand that standard carrier data rates may be billed
                      to users of the app.
                    </StyledPara>
                  </div>
                )}
                {!this.state.isHidden && (
                  <>
                    <ListGroup.Item>
                      <InnerMenuDiv action="true" href="#link10">
                        <NavLink to="/mobile-app-settings">
                          Mobile App Settings
                        </NavLink>
                      </InnerMenuDiv>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <InnerMenuDiv action="true" href="#link11">
                        <NavLink to="/calls-and-alerts">
                          Calls and Alerts
                        </NavLink>
                      </InnerMenuDiv>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <InnerMenuDiv action="true" href="#link12">
                        <NavLink to="/open-visit-permissions">
                          Open Visit Permissions
                        </NavLink>
                      </InnerMenuDiv>
                    </ListGroup.Item>
                  </>
                )}
              </label>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default MobileAppNav;
