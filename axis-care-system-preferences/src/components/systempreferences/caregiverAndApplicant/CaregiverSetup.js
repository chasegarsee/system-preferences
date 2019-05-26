import React from "react";
import styled from "styled-components";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { Dropdown, DropdownButton, Form } from "react-bootstrap";

class CaregiverSetup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wot: 0, // Weekly overtime threshold
      dot: 0, // Daily overtime threshold
      att: 0, // Autocalculate inter-visit travel time max gap
      dct: 0, // Daily Certification Threshold
      fct: 0, // Fixed Certification Threshold
      hct: 0 // Hourly Certification Threshold
    };
  }

  handleOnChangeWot = value => {
    this.setState({
      wot: value
    });
  };

  handleOnChangeDot = value => {
    this.setState({
      dot: value
    });
  };

  handleOnChangeAtt = value => {
    this.setState({
      att: value
    });
  };

  handleOnChangeDct = value => {
    this.setState({
      dct: value
    });
  };

  handleOnChangeFct = value => {
    this.setState({
      fct: value
    });
  };

  handleOnChangeHct = value => {
    this.setState({
      hct: value
    });
  };

  render() {
    let { wot, dot, att, dct, fct, hct } = this.state;

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
          <h1 style={{ fontWeight: "300" }}>Caregiver Setup</h1>
        </div>

        <StyledDiv>
          <StyledSpan>Overtime: use weighted rate</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Choose option...">
            <Dropdown.Item href="#/action-2">Enable</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Payable hours</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#/action-2">
              Pay for hours worked
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pay visit hours</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Pay visit hours only when exempt from overtime
            </Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay break times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay meal times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay sleep times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay inter-visit travel time</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Weekly overtime threshold</StyledSpan>
          <Slider
            min={0}
            max={168}
            value={wot}
            orientation="horizontal"
            onChange={this.handleOnChangeWot}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Daily overtime threshold</StyledSpan>
          <Slider
            min={0}
            max={168}
            value={dot}
            orientation="horizontal"
            onChange={this.handleOnChangeDot}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request break times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request meal times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request sleep times</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request inter-visit travel time</StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request break times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request meal times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request sleep times <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request inter-visit travel time <br /> (telephony)
          </StyledSpan>
          <input type="checkbox" />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Inter-visit travel time before/after</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#/action-2">Befor Visit</Dropdown.Item>
            <Dropdown.Item href="#/action-3">After Visit</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Autocalculate inter-visit travel time</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#">Disabled</Dropdown.Item>
            <Dropdown.Item href="#">Apply Before Visit</Dropdown.Item>
            <Dropdown.Item href="#">Apply After Visit</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Autocalculate inter-visit travel time max gap (minutes)
          </StyledSpan>
          <Slider
            min={0}
            max={1440}
            value={att}
            orientation="horizontal"
            onChange={this.handleOnChangeAtt}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Daily Certification Threshold (hours)</StyledSpan>
          <Slider
            min={0}
            max={30}
            value={fct}
            orientation="horizontal"
            onChange={this.handleOnChangeFct}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Daily Certification Text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Daily Certification (telephony)</StyledSpan>
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important", marginRight: "10px" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">1</Dropdown.Item>
            <Dropdown.Item href="#">2</Dropdown.Item>
            <Dropdown.Item href="#">3</Dropdown.Item>
            <Dropdown.Item href="#">4</Dropdown.Item>
            <Dropdown.Item href="#">5</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDiv>

        <StyledDiv>
          <StyledSpan>Fixed Certification Threshold (hours)</StyledSpan>
          <Slider
            min={0}
            max={30}
            value={dct}
            orientation="horizontal"
            onChange={this.handleOnChangeDct}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Fixed Certification Text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Fixed Certification (telephony)</StyledSpan>
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important", marginRight: "10px" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">1</Dropdown.Item>
            <Dropdown.Item href="#">2</Dropdown.Item>
            <Dropdown.Item href="#">3</Dropdown.Item>
            <Dropdown.Item href="#">4</Dropdown.Item>
            <Dropdown.Item href="#">5</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDiv>

        <StyledDiv>
          <StyledSpan>Hourly Certification Threshold (hours)</StyledSpan>
          <Slider
            min={0}
            max={30}
            value={hct}
            orientation="horizontal"
            onChange={this.handleOnChangeHct}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Hourly Certification Text</StyledSpan>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Hourly Certification (telephony)</StyledSpan>
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <DropdownButton
            style={{ width: "20px !important", marginRight: "10px" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">1</Dropdown.Item>
            <Dropdown.Item href="#">2</Dropdown.Item>
            <Dropdown.Item href="#">3</Dropdown.Item>
            <Dropdown.Item href="#">4</Dropdown.Item>
            <Dropdown.Item href="#">5</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            style={{ width: "20px !important" }}
            id="dropdown-basic-button"
            title="Select..."
          >
            <Dropdown.Item href="#">0 (disabled)</Dropdown.Item>
            <Dropdown.Item href="#">0.25 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.50 hour</Dropdown.Item>
            <Dropdown.Item href="#">0.75 hour</Dropdown.Item>
            <Dropdown.Item href="#">1 hour</Dropdown.Item>
            <Dropdown.Item href="#">1.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">1.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">2 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">2.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">3 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">3.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">4 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">4.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">5 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">5.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">6 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">6.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">7 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">7.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">8 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">8.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">9 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">9.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">10 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">10.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">11 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.25 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.50 hours</Dropdown.Item>
            <Dropdown.Item href="#">11.75 hours</Dropdown.Item>
            <Dropdown.Item href="#">12 hours</Dropdown.Item>
          </DropdownButton>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Caregiver care plan signatures</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Choose option...">
            <Dropdown.Item href="#/action-2">Enable</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Track seniority (hours)</StyledSpan>
          <DropdownButton id="dropdown-basic-button" title="Select...">
            <Dropdown.Item href="#/action-3">Enabled</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Disabled</Dropdown.Item>
          </DropdownButton>
        </StyledDiv>
      </div>
    );
  }
}

export default CaregiverSetup;

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
