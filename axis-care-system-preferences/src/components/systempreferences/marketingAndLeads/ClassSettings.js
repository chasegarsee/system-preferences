import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledButtonDiv
} from "../../styles/Divs";
import { StyledButton } from "../../styles/Button";

export default class ClassSettings extends Component {
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
          <StyledH1>Organization Classes</StyledH1>
        </StyledDivHeader>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
              Name
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
                  <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
                    Name
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
          <StyledButton onClick={e => this.addDRReasons(e)}>
            Add New
          </StyledButton>
        </StyledButtonDiv>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1>Contact Classes</StyledH1>
        </div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
              Name
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
                    Name
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDiv style={{ background: "none", margin: "0 2%" }}>
          <StyledButton onClick={e => this.addBFCReasons(e)}>
            Add New
          </StyledButton>
        </StyledButtonDiv>
      </MainCard>
    );
  }
}
