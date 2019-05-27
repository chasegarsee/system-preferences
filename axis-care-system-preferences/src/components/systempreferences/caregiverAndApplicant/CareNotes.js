import React from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";

class CareNotes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    function changeText(url) {
      document.getElementById("mydiv").innerHTML = url;
    }

    return (
      <div
        style={{
          boxShadow: "1px 1px 5px 1px #80808022",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "45rem",
          borderRadius: "6px",
          margin: "2% auto auto 0",
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
          <StyledSelect>
            <option>Select...</option>
            <option>Elable</option>
            <option>Disable</option>
          </StyledSelect>
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

const StyledSelect = styled.select`
  background-color: #007bff;
  height: 35px;
  outline: none;
  width: auto;
  border: solid 1px transparent;
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
