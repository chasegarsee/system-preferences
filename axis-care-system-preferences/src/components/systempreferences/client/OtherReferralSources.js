import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
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

export default class OtherReferralSources extends Component {
  state = {
    classes: []
  };

  addClass() {
    this.setState({ classes: [...this.state.classes, ""] });
  }

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Other Referral Sources</StyledH1>
        </StyledDivHeader>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
              Referral Source
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" />
            </Col>
          </Form.Group>
        </Form>

        {this.state.classes.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
                    Referral Source
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDiv style={{ margin: "0 2%" }}>
          <StyledButton onClick={e => this.addClass(e)}>Add New</StyledButton>
        </StyledButtonDiv>
      </MainCard>
    );
  }
}
