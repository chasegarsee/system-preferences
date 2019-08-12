import React from "react";
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
    // const {} = this.state;

    return (
      <div>
        <div className="main">
          <Card className="main-card">
            <ListGroup
              variant="flush"
              style={{ height: "auto", alignItems: "center" }}
            >
              <CaregiverNav key="caregiver-nav" />
              <MobileAppNav key="mobile-app-nav" />
              <ClientNav key="client-nav" />
              <MarketingNav key="marketing-nav" />
              <CommunitiesNav key="communities-nav" />
              <UserContactNav key="user-contact-nav" />
              <MessagingNav key="messaging-nav" />
              <TelephonyNav key="telephony-nav" />
              <PBQNav key="payroll-billing-quickbooks-nav" />
              <TPBNav key="third-party-billing-nav" />
              <StatusTypesNav key="status-types-nav" />
              <RDONav key="report-display-nav" />
              <SecurityNav key="security-nav" />
              <FormsNav key="forms-nav" />
            </ListGroup>
          </Card>
          {routes.map(({ path, component: c, key }) => (
            <Route exact path={path} component={c} key={key} />
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
    component: CaregiverSetup,
    key: "caregiversetup"
  },
  {
    path: "/care-notes",
    component: CareNotes,
    key: "carenotes"
  },
  {
    path: "/caregiver-classes-certifications-evaluations",
    component: CaregiverCCF,
    key: "caregiverccf"
  },
  {
    path: "/recommend-caregiver",
    component: RecommendCaregiver,
    key: "recommendcaregiver"
  },
  {
    path: "/caregiver-block-reasons",
    component: CaregiverBlockReasons,
    key: "caregiverblockreasons"
  },
  {
    path: "/caregiver-points",
    component: CaregiverPoints,
    key: "caregiverpoints"
  },
  {
    path: "/client-classes",
    component: ClientClasses,
    key: "clientclasses"
  },
  {
    path: "/profile-options",
    component: ProfileOptions,
    key: "profileoptions"
  },
  {
    path: "/region-codes-client-and-caregiver",
    component: RegionCodesClientAndCaregiver,
    key: "regioncodesclientandcaregiver"
  },
  {
    path: "/triage-categories",
    component: TriageCategories,
    key: "triagecategories"
  },
  {
    path: "/referral-sources",
    component: OtherReferralSources,
    key: "otherreferralsources"
  },
  {
    path: "/physician-information",
    component: PhysicianInformation,
    key: "physicianinformation"
  },
  {
    path: "/business-settings",
    component: BusinessSettings,
    key: "businesssettings"
  },
  {
    path: "/lead-deactivation-reasons",
    component: LeadDeactivationReasons,
    key: "leaddeactivationreasons"
  },
  {
    path: "/class-settings",
    component: ClassSettings,
    key: "classsettings"
  },
  {
    path: "/client",
    component: Client,
    key: "client"
  },
  {
    path: "/general-settings",
    component: GeneralSettings,
    key: "generalsettings"
  },
  {
    path: "/user-contact",
    component: UserContact,
    key: "usercontact"
  },
  {
    path: "/general-messaging-settings",
    component: MessagingGeneralSettings,
    key: "messaginggeneralsettings"
  },
  {
    path: "/telephony",
    component: Telephony,
    key: "telephony"
  },
  {
    path: "calls-and-alerts-telephony",
    component: CallsAndAlertsTelephony,
    key: "callsandalertstelephony"
  },
  {
    path: "/mobile-app-settings",
    component: MobileAppSettings,
    key: "mobileappsettings"
  },
  {
    path: "/calls-and-alerts",
    component: CallsAndAlerts,
    key: "callsandalerts"
  },
  {
    path: "/open-visit-permissions",
    component: OpenVisitPermissions,
    key: "openvisitpermissions"
  },
  {
    path: "/payroll-billing-quickbooks",
    component: PayrollBillingQuickbooks,
    key: "payrollbillingquickbooks"
  },
  {
    path: "third-party-billing",
    component: ThirdPartyBilling,
    key: "thirdpartybilling"
  },
  {
    path: "/status-types",
    component: StatusTypesNav,
    key: "statustypesnav"
  },
  {
    path: "/report-and-display-options",
    component: ReportDisplayOptions,
    key: "reportdisplayoptions"
  },
  {
    path: "/security",
    component: Security,
    key: "security"
  },
  {
    path: "/forms",
    component: Forms,
    key: "forms"
  }
];
