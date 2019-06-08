import React from "react";
import styled from "styled-components";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Switch from "react-switch";

import { Form } from "react-bootstrap";

export default class MessagingGeneralSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wot: 0, // Weekly overtime threshold
      dot: 0, // Daily overtime threshold
      att: 0, // Autocalculate inter-visit travel time max gap
      dct: 0, // Daily Certification Threshold
      fct: 0, // Fixed Certification Threshold
      hct: 0, // Hourly Certification Threshold
      checkedOT: false, // Overtime
      checkedTS: false, // Track Seniority
      checkedCCPS: false // Caregiver Care Plan Signatures
    };
  }

  handleToggleChangeOT = value => {
    this.setState({
      checkedOT: value
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "45rem",
          borderRadius: "6px",
          margin: "2% auto 20px 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "300", padding: "20px 0" }}>
            General Messaging Settings
          </h1>
        </div>

        <StyledDiv>
          <StyledSpan>Module Status</StyledSpan>

          <label>
            <Switch
              onChange={this.handleToggleChangeOT}
              checked={this.state.checkedOT}
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
            Messages will be sent to phones via email whenever possible
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Assigned Number for sending SMS/MMS to Cell Phones
          </StyledSpan>
          <StyledSpan>+12548701600</StyledSpan>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>
            Display Client names in which format? (This may affect HIPAA
            compliance)
          </StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Default(Last, First)</option>
            <option>First, Last</option>
            <option>FILL (First initial, and 1st - 3rd letters of Last)</option>
            <option>Lll Fff (3 letters of Last, 3 letters of First)</option>
            <option>Goes By (good for custom encoding)</option>
            <option>First (only)</option>
            <option>Last (only)</option>
            <option>Gender (only)</option>
          </StyledSelect>
        </StyledDiv>
      </div>
    );
  }
}

const StyledButton = styled.button`
  background-color: #007bff;
  height: 35px;
  align-content: left;
  outline: none;
  width: auto;
  border: solid 1px transparent;
  padding: 0.375rem 0.75rem;
  margin: 2% 3%;
  text-align: center;
  font-weight: 400;
  vertical-align: center;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
`;
const StyledSelect = styled.select`
  background-color: #007bff;
  height: 35px;
  outline: none;
  width: 125px;
  border: solid 1px transparent;
  padding: 0.375rem 0.75rem;
  text-align: center;
  font-weight: 400;
  vertical-align: center;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
`;

const StyledSpan = styled.span`
  padding: 0 12px 6px 6px;
  width: 50%;
  font-size: 1.2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
  margin: 5px 20px;
  padding: 5px 15px;
`;

const UncheckedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-top: 3px;
  font-size: 1rem;
  position: float;
  color: white;
`;

const CheckedIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10px;
  font-size: 1rem;
  color: white;
`;
