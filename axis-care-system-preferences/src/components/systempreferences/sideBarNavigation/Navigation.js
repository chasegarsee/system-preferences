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
import Client from "../../NIU/Client";
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
import Telephony from "../../NIU/Telephony";
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
import PayrollBillingQuickbooks from "../../NIU/PayrollBillingQuickbooks";
/*-------------------- PAYROLL BILLING & QB---------------------------- */
/*-------------------- THIRD PARTY BILLING ---------------------------- */
import ThirdPartyBilling from "../../NIU/ThirdPartyBilling";
import TPBNav from "./TPBNav";
/*-------------------- THIRD PARTY BILLING ---------------------------- */
/*-------------------- REPORT AND DISPLAY OPTIONS --------------------- */
import RDONav from "./RDONav";
import ReportDisplayOptions from "../../NIU/ReportDisplayOptions";
/*-------------------- REPORT AND DISPLAY OPTIONS --------------------- */
/*-------------------- SECURITY --------------------------------------- */
import Security from "../../NIU/Security";
import SecurityNav from "./SecurityNav";
/*-------------------- SECURITY --------------------------------------- */
/*-------------------- FORMS ------------------------------------------ */
import FormsNav from "./FormsNav";
import Forms from "../../NIU/Forms";
/*-------------------- FORMS ------------------------------------------ */

// STYLES
import "../../Navigation.css";
import { Card, ListGroup } from "react-bootstrap";
// STYLES

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;

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
          {routes.map(({ path, component: C }) => (
            <Route exact path={path} component={C} />
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;

const routes = [
  {
    path: "/caregiver-setup",
    component: CaregiverSetup
  },
  {
    path: "/care-notes",
    component: CareNotes
  },
  {
    path: "/caregiver-classes-certifications-evaluations",
    component: CaregiverCCF
  },
  {
    path: "/recommend-caregiver",
    component: RecommendCaregiver
  },
  {
    path: "/caregiver-block-reasons",
    component: CaregiverBlockReasons
  },
  {
    path: "/caregiver-points",
    component: CaregiverPoints
  },
  {
    path: "/client-classes",
    component: ClientClasses
  },
  {
    path: "/profile-options",
    component: ProfileOptions
  },
  {
    path: "/region-codes-client-and-caregiver",
    component: RegionCodesClientAndCaregiver
  },
  {
    path: "/triage-categories",
    component: TriageCategories
  },
  {
    path: "/referral-sources",
    component: OtherReferralSources
  },
  {
    path: "/physician-information",
    component: PhysicianInformation
  },
  {
    path: "/business-settings",
    component: BusinessSettings
  },
  {
    path: "/lead-deactivation-reasons",
    component: LeadDeactivationReasons
  },
  {
    path: "/class-settings",
    component: ClassSettings
  },
  {
    path: "/client",
    component: Client
  },
  {
    path: "/general-settings",
    component: GeneralSettings
  },
  {
    path: "/user-contact",
    component: UserContact
  },
  {
    path: "/general-messaging-settings",
    component: MessagingGeneralSettings
  },
  {
    path: "/telephony",
    component: Telephony
  },
  {
    path: "calls-and-alerts-telephony",
    component: CallsAndAlertsTelephony
  },
  {
    path: "/mobile-app-settings",
    component: MobileAppSettings
  },
  {
    path: "/calls-and-alerts",
    component: CallsAndAlerts
  },
  {
    path: "/open-visit-permissions",
    component: OpenVisitPermissions
  },
  {
    path: "/payroll-billing-quickbooks",
    component: PayrollBillingQuickbooks
  },
  {
    path: "third-party-billing",
    component: ThirdPartyBilling
  },
  {
    path: "/status-types",
    component: StatusTypesNav
  },
  {
    path: "/report-and-display-options",
    component: ReportDisplayOptions
  },
  {
    path: "/security",
    component: Security
  },
  {
    path: "/forms",
    component: Forms
  }
];
