import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, Collapse } from "react-bootstrap";
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
import CareNotes from "./systempreferences/caregiverAndApplicant/CareNotes";
import CaregiverCCF from "./systempreferences/caregiverAndApplicant/CaregiverCCE";
import RecommendCaregiver from "./systempreferences/caregiverAndApplicant/RecommendCaregiver";
import CaregiverBlockReasons from "./systempreferences/caregiverAndApplicant/CaregiverBlockReasons";
import "./Navigation.css";
import CaregiverPoints from "./systempreferences/caregiverAndApplicant/CaregiverPoints";
import ProfileOptions from "./systempreferences/client/ProfileOptions";
import ClientClasses from "./systempreferences/client/ClientClasses";
import RegionCodesClientAndCaregiver from "./systempreferences/client/RegionCodesClientAndCaregiver";
import TriageCategories from "./systempreferences/client/TriageCategories";
import OtherReferralSources from "./systempreferences/client/OtherReferralSources";
import PhysicianInformation from "./systempreferences/client/PhysicianInformation";
import BusinessSettings from "./systempreferences/marketingAndLeads/BusinessSettings";
import ClassSettings from "./systempreferences/marketingAndLeads/ClassSettings";
import LeadDeactivationReasons from "./systempreferences/marketingAndLeads/LeadDeactivationReasons";

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    console.log(e.target.value); //  search bar text
    let object = document.getElementById("myDiv");
    console.log(object.textContent); //  div text

    let searchBarText = e.target.value;
    let divText = object.textContent;
    if (divText.includes(searchBarText)) {
      console.log("the div text contains your search text");
    } else {
      console.log("the div text doesn't contain search text");
    }
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
        <div
          className="main"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            width: "85%"
          }}
        >
          <Card
            style={{
              width: "18rem",
              margin: "2% 3% 5px auto",
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
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />{" "}
                  Caregiver
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  <ListGroup.Item
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    <InnerMenuDiv>
                      <Link to="/caregiver-setup">Caregiver Setup</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/care-notes">Care Notes</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/caregiver-classes-certifications-evaluations">
                        Classes Certifications Evaluations
                      </Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/recommend-caregiver">Recommend Caregiver</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/caregiver-block-reasons">
                        Caregiver Block Reasons
                      </Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/caregiver-points">Caregiver Points</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opentwo: !opentwo })}
                aria-controls="example-collapse-text"
                aria-expanded={opentwo}
              >
                <StyledSpan>
                  {" "}
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Client
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opentwo}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/profile-options">Profile Options</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/client-classes">Client Classes</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/region-codes-client-and-caregiver">
                        Region Codes Client and Caregiver
                      </Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/triage-categories">Triage Categories</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/referral-sources">Other Referral Sources</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/physician-information">
                        Physician Information
                      </Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openthree: !openthree })}
                aria-controls="example-collapse-text"
                aria-expanded={openthree}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Marketing
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openthree}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/business-settings">Business Settings</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/class-settings">Class Settings</Link>
                    </InnerMenuDiv>
                    <InnerMenuDiv>
                      <Link to="/lead-deactivation-reasons">
                        Lead Deactivation Reasons
                      </Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfour: !openfour })}
                aria-controls="example-collapse-text"
                aria-expanded={openfour}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Communities
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfour}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/communities">Communities</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfive: !openfive })}
                aria-controls="example-collapse-text"
                aria-expanded={openfive}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  User Contact
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfive}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/usercontact">User Contact</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opensix: !opensix })}
                aria-controls="example-collapse-text"
                aria-expanded={opensix}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Messaging
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opensix}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/messaging">Messaging</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openseven: !openseven })}
                aria-controls="example-collapse-text"
                aria-expanded={openseven}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Telephony
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openseven}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/telephony">Telephony</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openeight: !openeight })}
                aria-controls="example-collapse-text"
                aria-expanded={openeight}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Mobile App
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openeight}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/mobileapp">Mobile App</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opennine: !opennine })}
                aria-controls="example-collapse-text"
                aria-expanded={opennine}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Payroll / Billing / Quickbooks
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opennine}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/payrollbillingquickbooks">
                        Payroll / Billing / Quickbooks
                      </Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openten: !openten })}
                aria-controls="example-collapse-text"
                aria-expanded={openten}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Third Party Billing
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openten}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/thirdpartybilling">Third Party Billing</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openeleven: !openeleven })}
                aria-controls="example-collapse-text"
                aria-expanded={openeleven}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Status Types
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openeleven}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/statustypes">Status Types</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ opentwelve: !opentwelve })}
                aria-controls="example-collapse-text"
                aria-expanded={opentwelve}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Report and Display Options
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opentwelve}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/reportanddisplayoptions">
                        Report and Display Options
                      </Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openthirteen: !openthirteen })}
                aria-controls="example-collapse-text"
                aria-expanded={openthirteen}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Security
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openthirteen}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/security">Security</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
              <StyledNav
                onClick={() => this.setState({ openfourteen: !openfourteen })}
                aria-controls="example-collapse-text"
                aria-expanded={openfourteen}
              >
                <StyledSpan>
                  <i
                    style={{ padding: "15px" }}
                    className="fas fa-chevron-right"
                  />
                  Forms
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfourteen}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/forms">Forms</Link>
                    </InnerMenuDiv>
                  </ListGroup.Item>
                </div>
              </Collapse>
            </ListGroup>
          </Card>

          <Route exact path="/caregiver-setup" component={CaregiverSetup} />
          <Route exact path="/care-notes" component={CareNotes} />
          <Route
            exact
            path="/caregiver-classes-certifications-evaluations"
            component={CaregiverCCF}
          />
          <Route
            exact
            path="/recommend-caregiver"
            component={RecommendCaregiver}
          />
          <Route
            exact
            path="/caregiver-block-reasons"
            component={CaregiverBlockReasons}
          />
          <Route exact path="/caregiver-points" component={CaregiverPoints} />
          <Route exact path="/profile-options" component={ProfileOptions} />
          <Route exact path="/client-classes" component={ClientClasses} />
          <Route
            exact
            path="/region-codes-client-and-caregiver"
            component={RegionCodesClientAndCaregiver}
          />
          <Route exact path="/triage-categories" component={TriageCategories} />
          <Route
            exact
            path="/referral-sources"
            component={OtherReferralSources}
          />
          <Route
            exact
            path="/physician-information"
            component={PhysicianInformation}
          />
          <Route exact path="/business-settings" component={BusinessSettings} />
          <Route exact path="/class-settings" component={ClassSettings} />
          <Route
            exact
            path="/lead-deactivation-reasons"
            component={LeadDeactivationReasons}
          />

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
`;

const StyledSpan = styled.span`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const InnerMenuDiv = styled.div`
  display: flex;
  width: 175px;
  justify-content: flex-start;
  margin: 5px;
`;
