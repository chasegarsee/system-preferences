import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CaregiverAndApplicant.css";
import {
  StyledH1,
  StyledButtonDiv,
  StyledButtonDivWithUnderline,
  MainCard,
  StyledDiv,
  StyledDivHeader
} from "../../styles/Divs";
import { StyledButton } from "../../styles/Button";

export default class CaregiverBlockReasons extends Component {
  state = {
    DRReasons: [],
    BFCReasons: []
  };

  addDRReasons() {
    this.setState({ DRReasons: [...this.state.DRReasons, ""] });
  }

  addBFCReasons() {
    this.setState({ BFCReasons: [...this.state.BFCReasons, ""] });
  }

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Caregiver Block Reasons</StyledH1>
        </StyledDivHeader>
        <Form style={{ margin: "0 2%" }}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5">
              Reason
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" />
            </Col>
          </Form.Group>
        </Form>
        {this.state.DRReasons.map(index => {
          return (
            <div key={index}>
              <Form style={{ margin: "0 2%" }}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5">
                    Reason
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDivWithUnderline style={{ margin: "0 2%" }}>
          <StyledButton onClick={e => this.addDRReasons(e)}>
            Add Reason
          </StyledButton>
        </StyledButtonDivWithUnderline>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1>Block From Client</StyledH1>
        </div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
              Reason
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" />
            </Col>
          </Form.Group>
        </Form>
        {this.state.BFCReasons.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
                    Reason
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
          <StyledButton onClick={e => this.addBFCReasons(e)}>
            Add Reason
          </StyledButton>
        </StyledButtonDiv>
      </MainCard>
    );
  }
}
