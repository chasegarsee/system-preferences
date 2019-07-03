import React from "react";
import { Router, Route } from "react-router";
import CaregiverSetup from "../src/components/systempreferences/caregiverAndApplicant/CaregiverSetup";
import Client from "../src/components/Client";
import Messaging from "../src/components/Messaging";
import Telephony from "../src/components/Telephony";
import MobileApp from "../src/components/MobileApp";
import PayrollBillingQuickbooks from "../src/components/PayrollBillingQuickbooks";
import ThirdPartyBilling from "../src/components/ThirdPartyBilling";
import StatusTypes from "../src/components/StatusTypes";
import ReportDisplayOptions from "../src/components/ReportDisplayOptions";
import Security from "../src/components/Security";
import Forms from "../src/components/Forms";
import CareNotes from "../src/components/systempreferences/caregiverAndApplicant/CareNotes";
import CaregiverCCF from "../src/components/systempreferences/caregiverAndApplicant/CaregiverCCE";
import RecommendCaregiver from "../src/components/systempreferences/caregiverAndApplicant/RecommendCaregiver";
import CaregiverBlockReasons from "../src/components/systempreferences/caregiverAndApplicant/CaregiverBlockReasons";
import CaregiverPoints from "../src/components/systempreferences/caregiverAndApplicant/CaregiverPoints";
import ProfileOptions from "../src/components/systempreferences/client/ProfileOptions";
import ClientClasses from "../src/components/systempreferences/client/ClientClasses";
import RegionCodesClientAndCaregiver from "../src/components/systempreferences/client/RegionCodesClientAndCaregiver";
import TriageCategories from "../src/components/systempreferences/client/TriageCategories";
import OtherReferralSources from "../src/components/systempreferences/client/OtherReferralSources";
import PhysicianInformation from "../src/components/systempreferences/client/PhysicianInformation";
import BusinessSettings from "../src/components/systempreferences/marketingAndLeads/BusinessSettings";
import ClassSettings from "../src/components/systempreferences/marketingAndLeads/ClassSettings";
import LeadDeactivationReasons from "../src/components/systempreferences/marketingAndLeads/LeadDeactivationReasons";
import GeneralSettings from "../src/components/systempreferences/Communities/GeneralSettings";
import UserContact from "../src/components/systempreferences/userContact/UserContact";
import MessagingGeneralSettings from "../src/components/systempreferences/messaging/MessagingGeneralSettings";

const createRoutes = () => (
  <Router>
    <Route exact path="/caregiver-setup" component={CaregiverSetup} />
    <Route exact path="/care-notes" component={CareNotes} />
    <Route
      exact
      path="/caregiver-classes-certifications-evaluations"
      component={CaregiverCCF}
    />
    <Route exact path="/recommend-caregiver" component={RecommendCaregiver} />
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
    <Route exact path="/referral-sources" component={OtherReferralSources} />
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
    <Route exact path="/mobileapp" component={MobileApp} />
    <Route
      exact
      path="/payrollbillingquickbooks"
      component={PayrollBillingQuickbooks}
    />
    <Route exact path="/thirdpartybilling" component={ThirdPartyBilling} />
    <Route exact path="/statustypes" component={StatusTypes} />
    <Route
      exact
      path="/reportanddisplayoptions"
      component={ReportDisplayOptions}
    />

    <Route exact path="/security" component={Security} />
    <Route exact path="/forms" component={Forms} />
  </Router>
);

export default createRoutes;
