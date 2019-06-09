import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./CaregiverAndApplicant.css";
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
        <StyledDiv>
          <StyledSpan>Allow Caregiver Points</StyledSpan>

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
          <StyledSpan>Point Categories</StyledSpan>
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
        <StyledButtonDiv style={{ margin: "0 2%" }}>
          <StyledButton onClick={e => this.addPointCategories(e)}>
            Add New
          </StyledButton>
        </StyledButtonDiv>
      </MainCard>
    );
  }
}
