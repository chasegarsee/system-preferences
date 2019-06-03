import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Switch from "react-switch";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "45rem",
          borderRadius: "6px",
          margin: "2% auto auto 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "300" }}>Profile Options</h1>
        </div>

        <StyledDiv style={{ alignItems: "center" }}>
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
      </div>
    );
  }
}

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
