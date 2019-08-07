import React from "react";
import "../SystemPreferences.css";
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
  StyledFormInput
} from "../../styles/Divs";
import { StyledSelect } from "../../styles/Button";
import { UncheckedIcon, CheckedIcon } from "../../styles/Button";
import { Form } from "react-bootstrap";

export default class CallsAndAlertsTelephony extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkedA: false, // Show Clock In/Out on dashboard "Alerts" tab
      checkedB: false, // Show Clock In/Out on "My Alerts"
      checkedC: false, // Show Clock In/Out on "Caregiver Alerts"
      checkedD: false, // Show Clock In/Out on "Client Alerts"
      checkedE: false, // Show Messages on dashboard "Alerts" tab
      checkedF: false, // Show Messages on "My Alerts"
      checkedG: false, // Show Messages on "Caregiver Alerts"
      checkedH: false, // Show Messages on "Client Alerts"
      checkedI: false, // Show Messages on "Calendar Alerts"
      checkedJ: false, // Show Caregiver phone number on Alert (to User)
      checkedK: false, // Show Client phone number on Alert (to User)
      clockInEarly: 0
    };
  }
  handleToggleChangeA = value => {
    this.setState({
      checkedA: value
    });
  };

  handleToggleChangeB = value => {
    this.setState({
      checkedB: value
    });
  };

  handleToggleChangeC = value => {
    this.setState({
      checkedC: value
    });
  };

  handleToggleChangeD = value => {
    this.setState({
      checkedD: value
    });
  };

  handleToggleChangeE = value => {
    this.setState({
      checkedE: value
    });
  };

  handleToggleChangeF = value => {
    this.setState({
      checkedF: value
    });
  };

  handleToggleChangeG = value => {
    this.setState({
      checkedG: value
    });
  };

  handleToggleChangeH = value => {
    this.setState({
      checkedH: value
    });
  };

  handleToggleChangeI = value => {
    this.setState({
      checkedI: value
    });
  };

  handleToggleChangeJ = value => {
    this.setState({
      checkedJ: value
    });
  };

  handleToggleChangeK = value => {
    this.setState({
      checkedK: value
    });
  };

  handleOnChangeClockInEarly = value => {
    this.setState({
      clockInEarly: value
    });
  };

  render() {
    //  let { clockInEarly } = this.state;
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Calls and Alerts (Mobile App and Telephony) </StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Minutes</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledH3>
            Alert Windows <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In early <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In late <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-Out early <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Clock-Out late <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Clock-In/Out Windows <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In before <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In after <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-Out before <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-Out after <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledH3>
            List Alerts in places other than dashboard "Telephony" tab
            <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Show Clock In/Out on dashboard "Alerts" tab <br />
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
        <StyledDiv>
          <StyledSpan>
            Show Clock In/Out on "My Alerts" <br />
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
            Show Clock In/Out on "Caregiver Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeC}
              checked={this.state.checkedC}
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
            Show Clock In/Out on "Client Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeD}
              checked={this.state.checkedD}
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
            Show Messages on dashboard "Alerts" tab <br />
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
            Show Messages on "My Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeF}
              checked={this.state.checkedF}
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
            Show Messages on "Caregiver Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeG}
              checked={this.state.checkedG}
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
            Show Messages on "Client Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeH}
              checked={this.state.checkedH}
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
            Show Messages on "Calendar Alerts" <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeI}
              checked={this.state.checkedI}
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
            Alert Options
            <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>
            Require ADL notes before clocking out <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Single Email/Messgage</option>
            <option>Email/Message for Each Visit</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Show Caregiver phone number on Alert (to User)
            <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeJ}
              checked={this.state.checkedJ}
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
            Show Client phone number on Alert (to User) <br />
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeK}
              checked={this.state.checkedK}
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
