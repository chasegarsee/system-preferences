import React from "react";
import styled from "styled-components";
import Slider from "react-rangeslider";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledButtonDiv,
  StyledButtonDivWithUnderline,
  StyledSpan,
  StyledDiv,
  StyledSpanMultiLineText,
  StyledSpanMultiLineTextTwo
} from "../../styles/Divs";
import {
  ButtonSmall,
  StyledButton,
  UncheckedIcon,
  CheckedIcon,
  StyledSelect,
  StyledSelectSmall
} from "../../styles/Button";

export default class RecommendCaregiver extends React.Component {
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
      <MainCard>
        <StyledDivHeader>
          <StyledH1>Recommend Caregiver</StyledH1>
        </StyledDivHeader>

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
      </MainCard>
    );
  }
}
