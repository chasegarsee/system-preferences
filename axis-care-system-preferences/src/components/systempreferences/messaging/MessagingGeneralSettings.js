import React from "react";
import styled from "styled-components";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledButtonDiv,
  StyledButtonDivWithUnderline,
  StyledSpan,
  StyledDiv,
  StyledSpanMultiLineText,
  StyledSpanMultiLineTextTwo
} from "../../styles/Divs";
import {
  ButtonSmall,
  StyledButton,
  UncheckedIcon,
  CheckedIcon,
  StyledSelect,
  StyledSelectSmall
} from "../../styles/Button";

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
      <MainCard>
        <StyledDivHeader>
          <StyledH1>General Messaging Settings</StyledH1>
        </StyledDivHeader>

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
      </MainCard>
    );
  }
}
