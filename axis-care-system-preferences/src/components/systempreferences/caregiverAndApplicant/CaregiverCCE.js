import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CaregiverAndApplicant.css";
import {
  MainCard,
  StyledH1,
  StyledButtonDiv,
  StyledButtonDivWithUnderline,
  StyledDivHeader,
  StyledSpan2
} from "../../styles/Divs";
import { StyledButton, StyledSelectTwo } from "../../styles/Button";

export default class CaregiverCCF extends Component {
  state = {
    classes: [],
    certifications: [],
    evaluations: []
  };

  addClass() {
    this.setState({ classes: [...this.state.classes, ""] });
  }

  addCertification() {
    this.setState({ certifications: [...this.state.certifications, ""] });
  }

  addEvaluations() {
    this.setState({ evaluations: [...this.state.evaluations, ""] });
  }

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Classes</StyledH1>
        </StyledDivHeader>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5">
              Code
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="code" />
            </Col>
            <Form.Label column sm="1.5">
              Lable
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="lable" />
            </Col>
          </Form.Group>
        </Form>

        {this.state.classes.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5">
                    Code
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                  <Form.Label column sm="1.5">
                    Lable
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" placeholder="lable" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDivWithUnderline>
          <StyledButton onClick={e => this.addClass(e)}>Add Class</StyledButton>
        </StyledButtonDivWithUnderline>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1 style={{ fontWeight: "300" }}>Certifications</StyledH1>
        </div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5">
              Name
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="code" />
            </Col>
            <Form.Label column sm="1.5">
              Default Experation
            </Form.Label>
            <StyledSelectTwo>
              <option>No Expiration</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>9 Months</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
            </StyledSelectTwo>
          </Form.Group>
        </Form>
        {this.state.certifications.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5">
                    Name
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                  <Form.Label column sm="1.5">
                    Default Experation
                  </Form.Label>
                  <StyledSelectTwo>
                    <option>No Expiration</option>
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>9 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    <option>4 Years</option>
                    <option>5 Years</option>
                  </StyledSelectTwo>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDivWithUnderline>
          <StyledButton onClick={e => this.addCertification(e)}>
            Add Certification
          </StyledButton>
        </StyledButtonDivWithUnderline>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledH1 style={{ fontWeight: "300" }}>Evaluations</StyledH1>
        </div>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5">
              Name
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="code" />
            </Col>
            <Form.Label column sm="1.5">
              Default Experation
            </Form.Label>
            <StyledSelectTwo>
              <option>No Expiration</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>9 Months</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
            </StyledSelectTwo>
          </Form.Group>
        </Form>
        {this.state.evaluations.map(index => {
          return (
            <div key={index}>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="1.5">
                    Name
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control type="plaintext" />
                  </Col>
                  <Form.Label column sm="1.5">
                    Default Experation
                  </Form.Label>
                  <StyledSelectTwo>
                    <option>No Expiration</option>
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>9 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    <option>4 Years</option>
                    <option>5 Years</option>
                  </StyledSelectTwo>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDiv>
          <StyledButton onClick={e => this.addEvaluations(e)}>
            Add Evaluation
          </StyledButton>
        </StyledButtonDiv>
      </MainCard>
    );
  }
}
