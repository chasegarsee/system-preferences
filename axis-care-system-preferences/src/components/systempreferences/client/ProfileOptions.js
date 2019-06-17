import React from "react";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledDiv
} from "../../styles/Divs";
import { UncheckedIcon, CheckedIcon } from "../../styles/Button";

export default class ProfileOptions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkedDS: false // Default Selection
    };
  }

  handleToggleChangeDS = value => {
    this.setState({
      checkedDS: value
    });
  };

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Profile Options</StyledH1>
        </StyledDivHeader>

        <StyledDiv>
          <StyledSpan>Start date override field</StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeDS}
              checked={this.state.checkedDS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
      </MainCard>
    );
  }
}
