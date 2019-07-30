import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Route } from "react-router-dom";

/*-------------------- CAREGIVER AND APPLICANT ------------------------ */
import CaregiverNav from "../sideBarNavigation/CaregiverNav";
import CaregiverSetup from "../caregiverAndApplicant/CaregiverSetup";
import CareNotes from "../caregiverAndApplicant/CareNotes";
import CaregiverCCF from "../caregiverAndApplicant/CaregiverCCE";
import RecommendCaregiver from "../caregiverAndApplicant/RecommendCaregiver";
import CaregiverBlockReasons from "../caregiverAndApplicant/CaregiverBlockReasons";
import CaregiverPoints from "../caregiverAndApplicant/CaregiverPoints";
/*-------------------- CAREGIVER AND APPLICANT ------------------------ */
/*-------------------- MOBILE APP ------------------------------------- */
import MobileAppNav from "../sideBarNavigation/MobileAppNav";
// import MobileApp from "../../MobileApp";
import CallsAndAlerts from "../mobileApp/CallsAndAlerts";
import MobileAppSettings from "../mobileApp/MoblieAppSettings";
import OpenVisitPermissions from "../mobileApp/OpenVisitPermissions";
/*-------------------- MOBILE APP ------------------------------------- */
/*-------------------- CLIENT ----------------------------------------- */
import ClientNav from "../sideBarNavigation/ClientNav";
import Client from "../../Client";
import ProfileOptions from "../client/ProfileOptions";
import ClientClasses from "../client/ClientClasses";
import RegionCodesClientAndCaregiver from "../client/RegionCodesClientAndCaregiver";
import TriageCategories from "../client/TriageCategories";
import OtherReferralSources from "../client/OtherReferralSources";
import PhysicianInformation from "../client/PhysicianInformation";
/*-------------------- CLIENT ----------------------------------------- */
/*-------------------- MARKETING -------------------------------------- */
import MarketingNav from "../sideBarNavigation/MarketingNav";
import BusinessSettings from "../marketingAndLeads/BusinessSettings";
import ClassSettings from "../marketingAndLeads/ClassSettings";
import LeadDeactivationReasons from "../marketingAndLeads/LeadDeactivationReasons";
/*-------------------- MARKETING -------------------------------------- */
/*-------------------- COMMUNITIES ------------------------------------ */
import CommunitiesNav from "../sideBarNavigation/CommunitiesNav";
import GeneralSettings from "../Communities/GeneralSettings";
/*-------------------- COMMUNITIES ------------------------------------ */
/*-------------------- USER CONTACT ----------------------------------- */
import UserContactNav from "../sideBarNavigation/UserContactNav";
import UserContact from "../userContact/UserContact";
/*-------------------- USER CONTACT ----------------------------------- */
/*-------------------- TELEPHONY -------------------------------------- */
import TelephonyNav from "./TelephonyNav";
import Telephony from "../../Telephony";
import CallsAndAlertsTelephony from "../telephony/callsAndAlertsTelephony";
/*-------------------- TELEPHONY -------------------------------------- */
/*-------------------- USER CONTACT ----------------------------------- */
/*-------------------- MESSAGING -------------------------------------- */
// import Messaging from "../../Messaging";
import MessagingNav from "../sideBarNavigation/MessagingNav";
import MessagingGeneralSettings from "../messaging/MessagingGeneralSettings";
/*-------------------- MESSAGING -------------------------------------- */

import StatusTypesNav from "./StatusTypesNav";
/*-------------------- PAYROLL BILLING & QB---------------------------- */
import PBQNav from "./PBQNav";
import PayrollBillingQuickbooks from "../../PayrollBillingQuickbooks";
/*-------------------- PAYROLL BILLING & QB---------------------------- */
/*-------------------- THIRD PARTY BILLING ---------------------------- */
import ThirdPartyBilling from "../../ThirdPartyBilling";
import TPBNav from "./TPBNav";
/*-------------------- THIRD PARTY BILLING ---------------------------- */
/*-------------------- REPORT AND DISPLAY OPTIONS --------------------- */
import RDONav from "./RDONav";
import ReportDisplayOptions from "../../ReportDisplayOptions";
/*-------------------- REPORT AND DISPLAY OPTIONS --------------------- */
/*-------------------- SECURITY --------------------------------------- */
import Security from "../../Security";
import SecurityNav from "./SecurityNav";
/*-------------------- SECURITY --------------------------------------- */
/*-------------------- FORMS ------------------------------------------ */
import FormsNav from "./FormsNav";
import Forms from "../../Forms";
/*-------------------- FORMS ------------------------------------------ */

// STYLES
import "../../Navigation.css";
import { Card, ListGroup } from "react-bootstrap";
// STYLES

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      openten: false,
      openeleven: false,
      opentwelve: false,
      openthirteen: false,
      openfourteen: false
    };
  }

  render() {
    const {
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
              <MarketingNav />
              <CommunitiesNav />
              <UserContactNav />
              <MessagingNav />
              <TelephonyNav />
              <PBQNav />
              <TPBNav />
              <StatusTypesNav />
              <RDONav />
              <SecurityNav />
              <FormsNav />
            </ListGroup>
          </Card>

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
            path="/calls-and-alerts-telephony"
            component={CallsAndAlertsTelephony}
          />
          <Route
            exact
            path="/mobile-app-settings"
            component={MobileAppSettings}
          />
          <Route exact path="/calls-and-alerts" component={CallsAndAlerts} />
          <Route
            exact
            path="/open-visit-permissions"
            component={OpenVisitPermissions}
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
          <Route exact path="/statustypes" component={StatusTypesNav} />
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
