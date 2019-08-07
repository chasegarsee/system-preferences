import React from "react";
import "../SystemPreferences.css";
import "react-rangeslider/lib/index.css";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledH3,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledDivWithUnderline,
  StyledFormInput
} from "../../styles/Divs";

import { Form } from "react-bootstrap";

export default class CallsAndAlerts extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clockInEarly: 0
    };
  }

  handleOnChangeClockInEarly = value => {
    this.setState({
      clockInEarly: value
    });
  };

  render() {
    // let { clockInEarly } = this.state;
    return (
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Calls and Alerts (Mobile App and Telephony) </StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Minutes</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledH3>
            Alert Windows <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In early <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In late <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-Out early <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Clock-Out late <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledH3>
            Clock-In/Out Windows <br />
          </StyledH3>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In before <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-In after <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Clock-Out before <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Clock-Out after <br />
          </StyledSpan>
          <Form>
            <Form.Group>
              <StyledFormInput />
            </Form.Group>
          </Form>
        </StyledDivWithUnderline>
      </MainCard>
    );
  }
}
