import React from "react";
import { Form } from "react-bootstrap";

import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledPara
} from "../../styles/Divs";
import { UncheckedIcon, CheckedIcon } from "../../styles/Button";

export default class CareNotes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkedDS: false // Default Selection
    };
  }

  handleToggleChangeDS = value => {
    this.setState({
      checkedDS: value
    });
  };

  render() {
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1 style={{ fontWeight: "300" }}>Care Notes</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "2px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledSpan>
            Additional Daily certification text <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
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
          <StyledSpan>
            Default selection is "No" <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeDS}
              checked={this.state.checkedDS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
      </MainCard>
    );
  }
}
