import React from "react";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledH3,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledDivWithUnderline,
  StyledPara,
  StyledInput
} from "../../styles/Divs";
import { UncheckedIcon, CheckedIcon, StyledSelect } from "../../styles/Button";

import { Form } from "react-bootstrap";

export default class MobileAppSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkedA: false, // allow Clock In/Out
      checkedE: false, // Expences
      checkedM: false, // Milage
      checkedT: false, // Travel Time
      checkedB: false, // Breaks
      checkedSP: false, // See Client Phone Numbers
      checkedRN: false, // Record Notes
      checkedMBS: false, // Must Be Submitted
      checkedNC: false, // Not Completed
      checkedCS: false, // Client Signature
      checkedACCV: false, // Auto Clock Chained Visits
      checkedCLN: false, // Client Signature
      checkedCSSN: false, // Client Signature Summary: Notes
      checkedCSSA: false, // Client Signature Summary: ADLs
      checkedCCSC: false, // Client Signature Summary: Certification
      checkedCGS: false, // Caregiver Signature
      checkedFM: false, // Forms
      checkedOM: false, // Offline Mode
      checkedSDC: false, // Self Directed Care
      dgr: 0, // Default Geofence Radius
      cav: 0 // Changes After Visit
    };
  }

  handleToggleChangeA = value => {
    this.setState({
      checkedA: value
    });
  };

  handleToggleChangeE = value => {
    this.setState({
      checkedE: value
    });
  };

  handleToggleChangeM = value => {
    this.setState({
      checkedM: value
    });
  };

  handleToggleChangeT = value => {
    this.setState({
      checkedT: value
    });
  };

  handleToggleChangeB = value => {
    this.setState({
      checkedB: value
    });
  };

  handleToggleChangeSP = value => {
    this.setState({
      checkedSP: value
    });
  };

  handleToggleChangeRN = value => {
    this.setState({
      checkedRN: value
    });
  };

  handleToggleChangeMBS = value => {
    this.setState({
      checkedMBS: value
    });
  };

  handleToggleChangeNC = value => {
    this.setState({
      checkedNC: value
    });
  };

  handleToggleChangeCS = value => {
    this.setState({
      checkedCS: value
    });
  };

  handleToggleChangeACCV = value => {
    this.setState({
      checkedACCV: value
    });
  };

  handleToggleChangeCLS = value => {
    this.setState({
      checkedCLS: value
    });
  };

  handleToggleChangeCSSN = value => {
    this.setState({
      checkedCSSN: value
    });
  };

  handleToggleChangeCSSA = value => {
    this.setState({
      checkedCSSA: value
    });
  };

  handleToggleChangeCSSC = value => {
    this.setState({
      checkedCSSC: value
    });
  };

  handleToggleChangeCGS = value => {
    this.setState({
      checkedCGS: value
    });
  };

  handleToggleChangeFM = value => {
    this.setState({
      checkedFM: value
    });
  };

  handleToggleChangeOM = value => {
    this.setState({
      checkedOM: value
    });
  };

  handleToggleChangeSDC = value => {
    this.setState({
      checkedSDC: value
    });
  };

  handleOnChangeDgr = value => {
    this.setState({
      dgr: value
    });
  };

  handleOnChangeCav = value => {
    this.setState({
      cav: value
    });
  };

  render() {
    let { dgr, cav } = this.state;
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Mobile App Settings</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledSpan>
            Allow Clock In/Out <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>

          <label>
            <Switch
              onChange={this.handleToggleChangeA}
              checked={this.state.checkedA}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Default Geofence Radius (meters) <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </StyledPara>
          </StyledSpan>
          <StyledInput type="text" value={dgr} />
          <Slider
            min={0}
            max={1000}
            value={dgr}
            orientation="horizontal"
            onChange={this.handleOnChangeDgr}
          />
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Caregivers Permissions <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Expenses <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeE}
              checked={this.state.checkedE}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Milage <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeM}
              checked={this.state.checkedM}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Travel Time <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeT}
              checked={this.state.checkedT}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Breaks <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeB}
              checked={this.state.checkedB}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            See Client Phone Numbers <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeSP}
              checked={this.state.checkedSP}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Time allowed to make changes after visit <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </StyledPara>
          </StyledSpan>
          <StyledInput type="text" value={cav} />
          <Slider
            min={0}
            max={60}
            value={cav}
            orientation="horizontal"
            onChange={this.handleOnChangeCav}
          />
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Activities of Daily Living <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv />
        <StyledDiv>
          <StyledSpan>
            Enable caregivers to record notes for each ADL <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              asperiores?
            </StyledPara>
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeRN}
              checked={this.state.checkedRN}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline style={{ alignItems: "center" }}>
          <StyledSpan>
            Require ADL notes before clocking out <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Disabled</option>
            <option>All ADLs</option>
            <option>Only Required ADLs</option>
          </StyledSelect>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Requirements Before Clock Out <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            ADLs must be submitted <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeMBS}
              checked={this.state.checkedMBS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Notes when any ADL was not completed <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeNC}
              checked={this.state.checkedNC}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Enable caregivers to record notes for each ADL <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              asperiores?
            </StyledPara>
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCS}
              checked={this.state.checkedCS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Show chained visits as a single visit <br />
          </StyledH3>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Auto-clock chained visits <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeACCV}
              checked={this.state.checkedACCV}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Client Signature Permissions <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Client Signature <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCLS}
              checked={this.state.checkedCLS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Client signature summary: Notes <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCSSN}
              checked={this.state.checkedCSSN}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Client signature summary: ADLs <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCSSA}
              checked={this.state.checkedCSSA}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Client signature summary: Certification <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCSSC}
              checked={this.state.checkedCSSC}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Client signature summary: Certification Text <br />
          </StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Caregiver Singature Permissions <br />
          </StyledH3>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Caregiver Signature <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCGS}
              checked={this.state.checkedCGS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Forms Display Permissions <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Forms <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeFM}
              checked={this.state.checkedFM}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Care plan signature certification text <br />
          </StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Care plan signature certification checkbox <br />
          </StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledSpan>
            Offline Mode
            <br />
          </StyledSpan>

          <label>
            <Switch
              onChange={this.handleToggleChangeOM}
              checked={this.state.checkedOM}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Allow Self Directed Care <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>

          <label>
            <Switch
              onChange={this.handleToggleChangeSDC}
              checked={this.state.checkedSDC}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDivWithUnderline>
      </MainCard>
    );
  }
}
