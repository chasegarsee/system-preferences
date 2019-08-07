import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CaregiverAndApplicant.css";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledButtonDivWithUnderline
} from "../../styles/Divs";
import { StyledButton, UncheckedIcon, CheckedIcon } from "../../styles/Button";

export default class CaregiverPoints extends Component {
  state = {
    PointCategories: [],
    checkedOT: false
  };

  addPointCategories() {
    this.setState({ PointCategories: [...this.state.PointCategories, ""] });
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
          <StyledH1>Caregiver Points</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "2px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv style={{ paddingTop: "15px" }}>
          <StyledSpan style={{ marginBottom: "0", paddingLeft: "0" }}>
            Allow Caregiver Points
          </StyledSpan>

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
        <StyledDiv style={{ marginBottom: "0", padding: "0" }}>
          <StyledSpan style={{ marginBottom: "0", padding: "0" }}>
            Point Categories
          </StyledSpan>
        </StyledDiv>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Col sm="4">
              <Form.Control type="plaintext" />
            </Col>
          </Form.Group>
        </Form>
        {this.state.PointCategories.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5" />
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDivWithUnderline>
          <StyledButton onClick={e => this.addPointCategories(e)}>
            Add New
          </StyledButton>
        </StyledButtonDivWithUnderline>
      </MainCard>
    );
  }
}
