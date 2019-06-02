import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./CaregiverAndApplicant.css";
import Switch from "react-switch";

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
          <StyledH1>Caregiver Points</StyledH1>
        </div>
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
        <StyledDiv style={{ margin: "0px 20px", padding: "0px 15px" }}>
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
        <StyledButtonDiv>
          <StyledButton onClick={e => this.addPointCategories(e)}>
            Add New
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
  margin: 0 2%;
`;

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
  margin: 5px 20px;
  padding: 5px 15px;
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
