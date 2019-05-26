import React from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";

class CareNotes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          boxShadow: "1px 1px 5px 1px #80808022",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "45rem",
          borderRadius: "6px",
          margin: "4% auto auto 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "300" }}>Care Notes</h1>
        </div>
        <StyledDiv>
          <StyledSpan>Additional Daily certification text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Additional Fixed certification text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Additional Hourly certification text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Default selection is "No"</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Choose option...">
            <Dropdown.Item href="#/action-3">Enabled</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Disabled</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
      </div>
    );
  }
}

export default CareNotes;

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
