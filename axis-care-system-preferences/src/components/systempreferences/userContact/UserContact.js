import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledButtonDiv,
  StyledSpan,
  StyledDiv
} from "../../styles/Divs";
import { StyledButton, UncheckedIcon, CheckedIcon } from "../../styles/Button";

export default class UserContact extends Component {
  state = {
    PointCategories: [],
    checkedOT: false,
    classes: []
  };

  addPointCategories() {
    this.setState({ PointCategories: [...this.state.PointCategories, ""] });
  }

  handleToggleChangeOT = value => {
    this.setState({
      checkedOT: value
    });
  };

  addClass() {
    this.setState({ classes: [...this.state.classes, ""] });
  }

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Caregiver Points</StyledH1>
        </StyledDivHeader>
        <StyledDiv style={{ margin: "0 2%" }}>
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
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="1.5" style={{ margin: "0 2%" }}>
              Name
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="name" />
            </Col>
            <Form.Label column sm="1.5">
              Email
            </Form.Label>
            <Col sm="4">
              <Form.Control type="plaintext" placeholder="email" />
            </Col>
          </Form.Group>
        </Form>

        {this.state.classes.map(index => {
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
                  <Form.Label column sm="1.5">
                    Email
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
