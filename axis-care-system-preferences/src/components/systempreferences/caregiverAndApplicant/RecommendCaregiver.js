import React from "react";
import styled from "styled-components";
import "./RecommendCaregiver.css";
import Slider from "react-rangeslider";
import Switch from "react-switch";

class RecommendCaregiver extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wot: 0 // Weekly overtime threshold
    };
  }

  handleOnChangeWot = value => {
    this.setState({
      wot: value,
      checkedSSR: false, // Show Sorting Rank
      checkedLR: false // Limit Recomendations
    });
  };

  handleToggleChangeSSR = value => {
    this.setState({
      checkedSSR: value
    });
  };

  handleToggleChangeLR = value => {
    this.setState({
      checkedLR: value
    });
  };

  rangeSlider = function() {
    var slider = document.querySelectorAll("range-slider"),
      range = document.querySelectorAll("range-slider__range"),
      value = document.querySelectorAll("range-slider__value");

    slider.each(function() {
      value.each(function() {
        var value = document
          .querySelector(this)
          .prev()
          .attr("value");
        document.querySelector(this).html(value);
      });

      range.on("input", function() {
        document
          .querySelector(this)
          .next(value)
          .html(this.value);
      });
    });
  };

  render() {
    let { wot } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "45rem",
          borderRadius: "6px",
          margin: "2% auto 20px 0",
          border: "solid 1px #D7D7D7",
          boxShadow: "1px 1px 5px 1px #80808022",
          height: "auto"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "300", padding: "20px 0" }}>
            Recommend Caregiver
          </h1>
        </div>

        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>Final Sorting Order</StyledSpan>
          <StyledSelect>
            <option>Distance Only</option>
            <option>Seniority, then Distance</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Show sorting rank, regardless of placement due to conflicts.
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeSSR}
              checked={this.state.checkedSSR}
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
            Limit recommendations to caregivers in the same region as the
            client.
          </StyledSpan>
          <label>
            <Switch
              onChange={this.handleToggleChangeLR}
              checked={this.state.checkedLR}
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
            Maximum Caregivers to display (affects download speed) Conflicted
            Caregivers will be most likely to be dropped.
          </StyledSpan>
          <div class="range-slider">
            <Slider
              class="range-slider__range"
              type="range"
              min={0}
              max={168}
              value={wot}
              orientation="horizontal"
              onChange={this.handleOnChangeWot}
            />
          </div>
        </StyledDiv>
      </div>
    );
  }
}

export default RecommendCaregiver;

const StyledSpan = styled.span`
  padding: 0 12px 6px 20px;
  width: 50%;
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
  width: 125px;
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
