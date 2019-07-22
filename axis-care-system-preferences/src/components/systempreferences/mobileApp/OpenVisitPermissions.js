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
  StyledSpanMultiLineText,
  StyledSpanMultiLineTextTwo,
  StyledDivWithUnderline,
  StyledPara,
  StyledInput
} from "../../styles/Divs";
import {
  UncheckedIcon,
  CheckedIcon,
  StyledSelect,
  StyledSelectSmall
} from "../../styles/Button";

import { Form } from "react-bootstrap";

export default class OpenVisitPermissions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkedM: false, //
      checkedT: false, // Travel Time
      checkedRN: false, // Record Notes
      dgr: 0 // Default Geofence Radius
    };
  }

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

  handleToggleChangeRN = value => {
    this.setState({
      checkedRN: value
    });
  };

  handleOnChangeDgr = value => {
    this.setState({
      dgr: value
    });
  };

  render() {
    let { dgr } = this.state;
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Open Visit Permissions</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledH3>
            Mobile App and Bulletin Board <br />
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
            <option>All Available Open Visits</option>
            <option>Only Open Visits sent Via Messaging</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Allowed to directly accept visit <br />
            (if Disabled, they can only generate Alerts to request assignment):{" "}
            <br />
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
        <StyledDiv>
          <StyledSpan>
            How many days forward should they be able to see <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </StyledPara>
          </StyledSpan>
          <StyledInput type="text" value={dgr} />
          <Slider
            min={0}
            max={45}
            value={dgr}
            orientation="horizontal"
            onChange={this.handleOnChangeDgr}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Show the City the visit is in: <br />
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
            Show the Name of the client: <br />
            <span style={{ fontStyle: "italic" }}>
              This may affect HIPAA compliance
            </span>
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

            <StyledSelect style={{ marginLeft: "20px" }}>
              <option>Select...</option>
              <option>Default(Last, First)</option>
              <option>First, Last</option>
              <option>
                FILL (First initial, and 1st - 3rd letters of Last)
              </option>
              <option>Lll Fff (3 letters of Last, 3 letters of First)</option>
              <option>Goes By (good for custom encoding)</option>
              <option>First (only)</option>
              <option>Last (only)</option>
              <option>Gender (only)</option>
            </StyledSelect>
          </label>
        </StyledDiv>
      </MainCard>
    );
  }
}
