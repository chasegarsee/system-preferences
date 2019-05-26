import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  ListGroup,
  Button,
  Collapse,
  Form,
  FormControl
} from "react-bootstrap";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CaregiverSetup from "../components/systempreferences/caregiverAndApplicant/CaregiverSetup";
import Marketing from "./Marketing";
import Client from "./Client";
import UserContact from "./UserContact";
import Messaging from "./Messaging";
import Telephony from "./Telephony";
import MobileApp from "./MobileApp";
import PayrollBillingQuickbooks from "./PayrollBillingQuickbooks";
import ThirdPartyBilling from "./ThirdPartyBilling";
import StatusTypes from "./StatusTypes";
import ReportDisplayOptions from "./ReportDisplayOptions";
import Security from "./Security";
import Forms from "./Forms";
import Communities from "./Communities";

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      opentwo: false,
      openthree: false,
      openfour: false,
      openfive: false,
      opensix: false,
      openseven: false,
      openeight: false,
      opennine: false,
      openten: false,
      openeleven: false,
      opentwelve: false,
      openthirteen: false,
      openfourteen: false
    };
  }
  render() {
    const {
      open,
      opentwo,
      openthree,
      openfour,
      openfive,
      opensix,
      openseven,
      openeight,
      opennine,
      openten,
      openeleven,
      opentwelve,
      openthirteen,
      openfourteen
    } = this.state;

    return (
      <div>
        <div className="main" style={{ height: "100%", display: "flex" }}>
          <Card
            style={{
              width: "18rem",
              margin: "4% 3% 0 7%",
              borderRadius: "5px",
              boxShadow: "1px 1px 5px 1px #80808022",
              height: "100%"
            }}
          >
            <ListGroup
              variant="flush"
              style={{ height: "auto", alignItems: "center" }}
            >
              <StyledNav
                onClick={() => this.setState({ open: !open })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <StyledSpan>Caregiver</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/caregiver-setup">Caregiver Setup</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opentwo: !opentwo })}
                aria-controls="example-collapse-text"
                aria-expanded={opentwo}
              >
                <StyledSpan>Client</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opentwo}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/client">Client</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openthree: !openthree })}
                aria-controls="example-collapse-text"
                aria-expanded={openthree}
              >
                <StyledSpan>Marketing</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openthree}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/marketing">Marketing</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfour: !openfour })}
                aria-controls="example-collapse-text"
                aria-expanded={openfour}
              >
                <StyledSpan>Communities</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfour}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/communities">Communities</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfive: !openfive })}
                aria-controls="example-collapse-text"
                aria-expanded={openfive}
              >
                <StyledSpan>User Contact</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfive}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/usercontact">User Contact</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opensix: !opensix })}
                aria-controls="example-collapse-text"
                aria-expanded={opensix}
              >
                <StyledSpan>Messaging</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opensix}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/messaging">Messaging</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openseven: !openseven })}
                aria-controls="example-collapse-text"
                aria-expanded={openseven}
              >
                <StyledSpan>Telephony</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openseven}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/telephony">Telephony</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openeight: !openeight })}
                aria-controls="example-collapse-text"
                aria-expanded={openeight}
              >
                <StyledSpan>Mobile App</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openeight}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/mobileapp">Mobile App</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opennine: !opennine })}
                aria-controls="example-collapse-text"
                aria-expanded={opennine}
              >
                <StyledSpan>Payroll / Billing / Quickbooks</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opennine}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/payrollbillingquickbooks">
                        Payroll / Billing / Quickbooks
                      </Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openten: !openten })}
                aria-controls="example-collapse-text"
                aria-expanded={openten}
              >
                <StyledSpan>Third Party Billing</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openten}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/thirdpartybilling">Third Party Billing</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openeleven: !openeleven })}
                aria-controls="example-collapse-text"
                aria-expanded={openeleven}
              >
                <StyledSpan>Status Types</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openeleven}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/statustypes">Status Types</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opentwelve: !opentwelve })}
                aria-controls="example-collapse-text"
                aria-expanded={opentwelve}
              >
                <StyledSpan>Report and Display Options</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opentwelve}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/reportanddisplayoptions">
                        Report and Display Options
                      </Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openthirteen: !openthirteen })}
                aria-controls="example-collapse-text"
                aria-expanded={openthirteen}
              >
                <StyledSpan>Security</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openthirteen}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/security">Security</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfourteen: !openfourteen })}
                aria-controls="example-collapse-text"
                aria-expanded={openfourteen}
              >
                <StyledSpan>Forms</StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfourteen}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <div>
                      <Link to="/forms">Forms</Link>
                    </div>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <Form style={{ paddingTop: "20px" }}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </ListGroup>
          </Card>
          <Route exact path="/caregiver-setup" component={CaregiverSetup} />
          <Route exact path="/marketing" component={Marketing} />

          <Route exact path="/client" component={Client} />
          <Route exact path="/communities" component={Communities} />
          <Route exact path="/usercontact" component={UserContact} />
          <Route exact path="/messaging" component={Messaging} />
          <Route exact path="/telephony" component={Telephony} />
          <Route exact path="/mobileapp" component={MobileApp} />
          <Route
            exact
            path="/payrollbillingquickbooks"
            component={PayrollBillingQuickbooks}
          />
          <Route
            exact
            path="/thirdpartybilling"
            component={ThirdPartyBilling}
          />
          <Route exact path="/statustypes" component={StatusTypes} />
          <Route
            exact
            path="/reportanddisplayoptions"
            component={ReportDisplayOptions}
          />
          <Route exact path="/security" component={Security} />
          <Route exact path="/forms" component={Forms} />
        </div>
      </div>
    );
  }
}

export default Navigation;

const StyledNav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #80808033;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    color: red;
  }
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;
