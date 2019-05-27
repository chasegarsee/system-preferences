import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./CaregiverAndApplicant.css";

class CaregiverCCF extends Component {
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
      <div
        style={{
          boxShadow: "1px 1px 5px 1px #80808022",
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
          <StyledH1>Classes</StyledH1>
        </div>
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
        <StyledButtonDiv>
          <StyledButton onClick={e => this.addClass(e)}>Add Class</StyledButton>
        </StyledButtonDiv>
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
            <StyledSelect>
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
            </StyledSelect>
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
                  <StyledSelect>
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
                  </StyledSelect>
                </Form.Group>
              </Form>
            </div>
          );
        })}
        <StyledButtonDiv style={{ width: "100%" }}>
          <StyledButton onClick={e => this.addCertification(e)}>
            Add Certification
          </StyledButton>
        </StyledButtonDiv>
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
            <StyledSelect>
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
            </StyledSelect>
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
                    Defalt Experation
                  </Form.Label>
                  <StyledSelect>
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
                  </StyledSelect>
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
      </div>
    );
  }
}

export default CaregiverCCF;

const StyledSpan = styled.span`
  padding: 0 12px 6px 6px;
  width: 50%;
  font-size: 1.2rem;
`;

const StyledSpanMultiLineText = styled.span`
  padding: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
  font-size: 1.2rem;
`;

const StyledSpanMultiLineTextTwo = styled.span`
  padding: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  font-size: 1.2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
`;

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

const StyledSelect = styled.select`
  background-color: #007bff;
  height: 35px;
  outline: none;
  width: auto;
  border: solid 1px transparent;
  margin: 0 3%;
  padding: 0.375rem 0.75rem;
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

const StyledButtonDiv = styled.div`
  width: 100%;
  background: linear-gradient(to left, transparent, grey, transparent);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom;
`;
