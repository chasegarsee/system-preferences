import React from "react";
import styled from "styled-components";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { Link } from "react-router-dom";
import {
  InputGroup,
  FormControl,
  label,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import { blue } from "ansi-colors";

class CaregiverSetup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wot: 0, //weekly overtime threshold
      dot: 0 // daily overtime threshold
    };
  }

  handleOnChangeWot = value => {
    this.setState({
      wot: value
    });
  };

  handleOnChangeDot = value => {
    this.setState({
      dot: value
    });
  };

  render() {
    let { wot } = this.state;
    let { dot } = this.state;
    return (
      <div
        style={{
          boxShadow: "1px 1px 5px 1px #80808022",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40rem",
          borderRadius: "6px",
          margin: "4% auto auto 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "300" }}>Caregiver Setup</h1>
        </div>

        <StyledDiv>
          <StyledSpan>Overtime: use weighted rate</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Choose option...">
            <Dropdown.Item href="#/action-2">Enable</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Payable hours</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#/action-2">
              Pay for hours worked
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pay visit hours</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Pay visit hours only when exempt from overtime
            </Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay break times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay meal times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay sleep times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay inter-visit travel time</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Weekly overtime threshold</StyledSpan>
          <Slider
            min={0}
            max={168}
            value={wot}
            orientation="horizontal"
            onChange={this.handleOnChangeWot}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Daily overtime threshold</StyledSpan>
          <Slider
            min={0}
            max={168}
            value={dot}
            orientation="horizontal"
            onChange={this.handleOnChangeDot}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request break times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request meal times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request sleep times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request inter-visit travel time</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request break times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request meal times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request sleep times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request inter-visit travel time <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Inter-visit travel time before/after</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#/action-2">Befor Visit</Dropdown.Item>
            <Dropdown.Item href="#/action-3">After Visit</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Autocalculate inter-visit travel time</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#">Disabled</Dropdown.Item>
            <Dropdown.Item href="#">Apply Before Visit</Dropdown.Item>
            <Dropdown.Item href="#">Apply After Visit</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
      </div>
    );
  }
}

export default CaregiverSetup;

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
`;
