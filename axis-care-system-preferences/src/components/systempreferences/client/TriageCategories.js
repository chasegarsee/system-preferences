import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledButtonDiv
} from "../../styles/Divs";
import { StyledButton } from "../../styles/Button";

export default class TriageCategories extends Component {
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
          <StyledH1>Triage Categories</StyledH1>
        </StyledDivHeader>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
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
                  <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
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
