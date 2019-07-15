import React from "react";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledSpanMultiLineText,
  StyledSpanMultiLineTextTwo,
  StyledDivWithUnderline,
  StyledPara
} from "../../styles/Divs";
import {
  UncheckedIcon,
  CheckedIcon,
  StyledSelect,
  StyledSelectSmall
} from "../../styles/Button";

import { Form } from "react-bootstrap";

export default class MobileAppSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Mobile App Settings</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "2px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
      </MainCard>
    );
  }
}
