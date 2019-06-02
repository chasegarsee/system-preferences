import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./CaregiverAndApplicant.css";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          width: "45rem",
          borderRadius: "6px",
          margin: "2% auto auto 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1>Caregiver Block Reasons</StyledH1>
        </div>
        <Form>
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
              <Form>
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
        <StyledButtonDiv>
          <StyledButton onClick={e => this.addDRReasons(e)}>
            Add Reason
          </StyledButton>
        </StyledButtonDiv>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1>Block From Client</StyledH1>
        </div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5">
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
        <StyledButtonDiv style={{ background: "none" }}>
          <StyledButton onClick={e => this.addBFCReasons(e)}>
            Add Reason
          </StyledButton>
        </StyledButtonDiv>
      </div>
    );
  }
}

const StyledButton = styled.button`
  background-color: #007bff;
  height: 35px;
  align-content: left;
  outline: none;
  width: auto;
  border: solid 1px transparent;
  padding: 0.375rem 0.75rem;
  margin: 2% 3%;
  text-align: center;
  font-weight: 400;
  vertical-align: center;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
`;

const StyledH1 = styled.h2`
  font-weight: 300;
  padding: 10px;
`;

const StyledButtonDiv = styled.div`
  width: 100%;
  background: linear-gradient(to left, transparent, grey, transparent);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom;
`;
