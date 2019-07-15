import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, ListGroup, Collapse } from "react-bootstrap";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CaregiverSetup from "../caregiverAndApplicant/CaregiverSetup";
import Client from "../../Client";
import Messaging from "../../Messaging";
import Telephony from "../../Telephony";
import MobileApp from "../../MobileApp";
import PayrollBillingQuickbooks from "../../PayrollBillingQuickbooks";
import ThirdPartyBilling from "../../ThirdPartyBilling";
import StatusTypes from "../../StatusTypes";
import ReportDisplayOptions from "../../ReportDisplayOptions";
import Security from "../../Security";
import Forms from "../../Forms";
import CareNotes from "../caregiverAndApplicant/CareNotes";
import CaregiverCCF from "../caregiverAndApplicant/CaregiverCCE";
import RecommendCaregiver from "../caregiverAndApplicant/RecommendCaregiver";
import CaregiverBlockReasons from "../caregiverAndApplicant/CaregiverBlockReasons";
import "../../Navigation.css";
import {
  StyledI,
  StyledNav,
  StyledSpan,
  InnerMenuDiv
} from "../../styles/SideBarStyles";
import CaregiverPoints from "../caregiverAndApplicant/CaregiverPoints";
import ProfileOptions from "../client/ProfileOptions";
import ClientClasses from "../client/ClientClasses";
import RegionCodesClientAndCaregiver from "../client/RegionCodesClientAndCaregiver";
import TriageCategories from "../client/TriageCategories";
import OtherReferralSources from "../client/OtherReferralSources";
import PhysicianInformation from "../client/PhysicianInformation";
import BusinessSettings from "../marketingAndLeads/BusinessSettings";
import ClassSettings from "../marketingAndLeads/ClassSettings";
import LeadDeactivationReasons from "../marketingAndLeads/LeadDeactivationReasons";
import GeneralSettings from "../Communities/GeneralSettings";
import UserContact from "../userContact/UserContact";
import MessagingGeneralSettings from "../messaging/MessagingGeneralSettings";
import MobileAppSettings from "../mobileApp/MoblieAppSettings";
import MobileAppNav from "../sideBarNavigation/MobileAppNav";
import CaregiverNav from "../sideBarNavigation/CaregiverNav";
import ClientNav from "../sideBarNavigation/ClientNav";

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
        <div className="main">
          <Card className="main-card">
            <ListGroup
              variant="flush"
              style={{ height: "auto", alignItems: "center" }}
            >
              <CaregiverNav />
              <MobileAppNav />
              <ClientNav />

              <StyledNav
                onClick={() => this.setState({ openthree: !openthree })}
                aria-controls="example-collapse-text"
                aria-expanded={openthree}
              >
                <StyledSpan>
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
                  Communities
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfour}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/general-settings">General Settings</Link>
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
                  <StyledI className="fas fa-chevron-right" />
                  User Contact
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.openfive}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/user-contact">User Contact</Link>
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
                  <StyledI className="fas fa-chevron-right" />
                  Messaging
                </StyledSpan>
              </StyledNav>
              <Collapse in={this.state.opensix}>
                <div id="example-collapse-text">
                  <ListGroup.Item>
                    <InnerMenuDiv>
                      <Link to="/general-messaging-settings">
                        General Messaging Settings
                      </Link>
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
                  <StyledI className="fas fa-chevron-right" />
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
                onClick={() => this.setState({ opennine: !opennine })}
                aria-controls="example-collapse-text"
                aria-expanded={opennine}
              >
                <StyledSpan>
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
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
                  <StyledI className="fas fa-chevron-right" />
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
          <Route exact path="/general-settings" component={GeneralSettings} />
          <Route exact path="/user-contact" component={UserContact} />
          <Route
            exact
            path="/general-messaging-settings"
            component={MessagingGeneralSettings}
          />
          <Route exact path="/telephony" component={Telephony} />
          <Route
            exact
            path="/mobile-app-settings"
            component={MobileAppSettings}
          />
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
