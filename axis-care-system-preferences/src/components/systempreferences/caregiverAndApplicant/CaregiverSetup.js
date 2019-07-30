import React from "react";
import "../SystemPreferences.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledSpan2,
  StyledDiv,
  StyledSpanMultiLineText,
  StyledSpanMultiLineTextTwo,
  StyledDivWithUnderline,
  StyledPara,
  StyledInput
} from "../../styles/Divs";
import {
  UncheckedIcon,
  CheckedIcon,
  StyledSelect,
  StyledSelectSmall
} from "../../styles/Button";

import { Form } from "react-bootstrap";

export default class CaregiverSetup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wot: 0, // Weekly overtime threshold
      dot: 0, // Daily overtime threshold
      att: 0, // Autocalculate inter-visit travel time max gap
      dct: 0, // Daily Certification Threshold
      fct: 0, // Fixed Certification Threshold
      hct: 0, // Hourly Certification Threshold
      checkedOT: false, // Overtime
      checkedTS: false, // Track Seniority
      checkedCCPS: false, // Caregiver Care Plan Signatures
      checkedA: false, // Track Seniority
      checkedB: false, // Caregiver Care Plan Signatures
      checkedC: false, // Track Seniority
      checkedD: false, // Caregiver Care Plan Signatures
      checkedE: false, // Track Seniority
      checkedF: false, // Caregiver Care Plan Signatures
      checkedG: false, // Track Seniority
      checkedH: false, // Caregiver Care Plan Signatures
      checkedI: false, // Track Seniority
      checkedJ: false, // Caregiver Care Plan Signatures
      checkedK: false, // Track Seniority
      checkedL: false // Caregiver Care Plan Signatures
    };
  }

  handleToggleChangeOT = value => {
    this.setState({
      checkedOT: value
    });
  };

  handleToggleChangeTS = value => {
    this.setState({
      checkedTS: value
    });
  };

  handleToggleChangeCCPS = value => {
    this.setState({
      checkedCCPS: value
    });
  };
  handleToggleChangeA = value => {
    this.setState({
      checkedA: value
    });
  };

  handleToggleChangeB = value => {
    this.setState({
      checkedB: value
    });
  };
  handleToggleChangeC = value => {
    this.setState({
      checkedC: value
    });
  };

  handleToggleChangeD = value => {
    this.setState({
      checkedD: value
    });
  };
  handleToggleChangeE = value => {
    this.setState({
      checkedE: value
    });
  };

  handleToggleChangeF = value => {
    this.setState({
      checkedF: value
    });
  };
  handleToggleChangeG = value => {
    this.setState({
      checkedG: value
    });
  };

  handleToggleChangeH = value => {
    this.setState({
      checkedH: value
    });
  };
  handleToggleChangeI = value => {
    this.setState({
      checkedI: value
    });
  };

  handleToggleChangeJ = value => {
    this.setState({
      checkedJ: value
    });
  };
  handleToggleChangeK = value => {
    this.setState({
      checkedK: value
    });
  };
  handleToggleChangeL = value => {
    this.setState({
      checkedL: value
    });
  };
  handleToggleChangeCCPS = value => {
    this.setState({
      checkedCCPS: value
    });
  };

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
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Caregiver Setup</StyledH1>
        </StyledDivHeader>
        <StyledDivHeader style={{ borderBottom: "4px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>
        <StyledDiv>
          <StyledSpan>
            Overtime: use weighted rate <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>

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
        <StyledDiv>
          <StyledSpan>
            Weekly overtime threshold <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </StyledPara>
          </StyledSpan>
          <StyledInput type="text" value={wot} />
          <Slider
            min={0}
            max={168}
            value={wot}
            orientation="horizontal"
            onChange={this.handleOnChangeWot}
          />
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Daily overtime threshold <br />
            <StyledPara>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
              rerum. Nostrum molestias vitae natus architecto voluptates
              assumenda, rem dolorum.
            </StyledPara>
          </StyledSpan>
          <StyledInput type="text" value={dot} />
          <Slider
            min={0}
            max={168}
            value={dot}
            orientation="horizontal"
            onChange={this.handleOnChangeDot}
          />
        </StyledDivWithUnderline>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>
            Payable hours <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Pay for hours worked</option>
            <option>Pay visit hours</option>
            <option>Pay visit hours only when exempt from overtime</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay meal times</StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeA}
              checked={this.state.checkedA}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay sleep times</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeB}
            checked={this.state.checkedB}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Pay break times</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeC}
            checked={this.state.checkedC}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>Pay inter-visit travel time</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeD}
            checked={this.state.checkedD}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledSpan>Request meal times</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeE}
            checked={this.state.checkedE}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request sleep times</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeF}
            checked={this.state.checkedF}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>Request break times</StyledSpan>
          <Switch
            onChange={this.handleToggleChangeG}
            checked={this.state.checkedG}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request meal times <br /> (telephony)
          </StyledSpan>
          <Switch
            onChange={this.handleToggleChangeH}
            checked={this.state.checkedH}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Request sleep times <br /> (telephony)
          </StyledSpan>
          <Switch
            onChange={this.handleToggleChangeI}
            checked={this.state.checkedI}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Request break times <br /> (telephony)
          </StyledSpan>
          <Switch
            onChange={this.handleToggleChangeJ}
            checked={this.state.checkedJ}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDivWithUnderline>

        <StyledDiv>
          <StyledSpan>
            Request inter-visit travel time <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <Switch
            onChange={this.handleToggleChangeK}
            checked={this.state.checkedK}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>

        <StyledDiv>
          <StyledSpan>
            Request inter-visit travel time <br /> (telephony)
          </StyledSpan>
          <Switch
            onChange={this.handleToggleChangeL}
            checked={this.state.checkedL}
            height={30}
            width={100}
            onColor="#007bff"
            uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
            checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
          />
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>Inter-visit travel time before/after</StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Befor Visit</option>
            <option>After Visit</option>
          </StyledSelect>
        </StyledDivWithUnderline>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Autocalculate inter-visit travel time</StyledSpan>
          <StyledSelect>
            <option>Select...</option>
            <option>Disabled</option>
            <option>Apply Before Visit</option>
            <option>Apply After Visit</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan>
            Autocalculate inter-visit travel time max gap (minutes)
          </StyledSpan>
          <StyledInput type="text" value={att} />
          <Slider
            min={0}
            max={1440}
            value={att}
            orientation="horizontal"
            onChange={this.handleOnChangeAtt}
          />
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledSpan>Daily Certification Threshold (hours)</StyledSpan>
          <StyledInput type="text" value={fct} />
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
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan />
          <StyledSelectSmall
            style={{ width: "20px !important", marginRight: "10px" }}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </StyledSelectSmall>

          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDivWithUnderline>

        <StyledDiv>
          <StyledSpan>Fixed Certification Threshold (hours)</StyledSpan>
          <StyledInput type="text" value={dct} />
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
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan />
          <StyledSelectSmall
            style={{ width: "20px !important", marginRight: "10px" }}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </StyledSelectSmall>

          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDivWithUnderline>

        <StyledDiv>
          <StyledSpan>Hourly Certification Threshold (hours)</StyledSpan>
          <StyledInput type="text" value={hct} />
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
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>of required sleep,</StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted sleep,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan />
          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineText>
            of uninterrupted meal time,
          </StyledSpanMultiLineText>
        </StyledDiv>
        <StyledDivWithUnderline>
          <StyledSpan />
          <StyledSelectSmall
            style={{ width: "20px !important", marginRight: "10px" }}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </StyledSelectSmall>

          <StyledSelect style={{ width: "20px !important" }}>
            <option>0 (disabled)</option>
            <option>0.25 hour</option>
            <option>0.50 hour</option>
            <option>0.75 hour</option>
            <option>1 hour</option>
            <option>1.25 hours</option>
            <option>1.50 hours</option>
            <option>1.75 hours</option>
            <option>2 hours</option>
            <option>2.25 hours</option>
            <option>2.50 hours</option>
            <option>2.75 hours</option>
            <option>3 hours</option>
            <option>3.25 hours</option>
            <option>3.50 hours</option>
            <option>3.75 hours</option>
            <option>4 hours</option>
            <option>4.25 hours</option>
            <option>4.50 hours</option>
            <option>4.75 hours</option>
            <option>5 hours</option>
            <option>5.25 hours</option>
            <option>5.50 hours</option>
            <option>5.75 hours</option>
            <option>6 hours</option>
            <option>6.25 hours</option>
            <option>6.50 hours</option>
            <option>6.75 hours</option>
            <option>7 hours</option>
            <option>7.25 hours</option>
            <option>7.50 hours</option>
            <option>7.75 hours</option>
            <option>8 hours</option>
            <option>8.25 hours</option>
            <option>8.50 hours</option>
            <option>8.75 hours</option>
            <option>9 hours</option>
            <option>9.25 hours</option>
            <option>9.50 hours</option>
            <option>9.75 hours</option>
            <option>10 hours</option>
            <option>10.25 hours</option>
            <option>10.50 hours</option>
            <option>10.75 hours</option>
            <option>11 hours</option>
            <option>11.25 hours</option>
            <option>11.50 hours</option>
            <option>11.75 hours</option>
            <option>12 hours</option>
          </StyledSelect>
          <StyledSpanMultiLineTextTwo>long break(s)</StyledSpanMultiLineTextTwo>
        </StyledDivWithUnderline>
        <StyledDiv>
          <StyledSpan>Caregiver care plan signatures</StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeCCPS}
              checked={this.state.checkedCCPS}
              height={30}
              width={100}
              onColor="#007bff"
              uncheckedIcon={<UncheckedIcon>Disabled</UncheckedIcon>}
              checkedIcon={<CheckedIcon>Enabled</CheckedIcon>}
            />
          </label>
        </StyledDiv>
        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Track seniority (hours)</StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeTS}
              checked={this.state.checkedTS}
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
