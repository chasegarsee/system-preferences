import React from "react";

import Slider from "react-rangeslider";
import Switch from "react-switch";
import {
  MainCard,
  StyledDivHeader,
  StyledH1,
  StyledSpan,
  StyledDiv,
  StyledSpan2,
  StyledPara
} from "../../styles/Divs";
import { UncheckedIcon, CheckedIcon, StyledSelect } from "../../styles/Button";

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
        <StyledDivHeader style={{ borderBottom: "2px solid #eeeff2" }}>
          <StyledSpan2>Features</StyledSpan2>
          <StyledSpan2>Status</StyledSpan2>
        </StyledDivHeader>

        <StyledDiv style={{ alignItems: "center" }}>
          <StyledSpan>
            Final Sorting Order <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos!
            </StyledPara>
          </StyledSpan>
          <StyledSelect>
            <option>Distance Only</option>
            <option>Seniority, then Distance</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Show sorting rank, regardless of placement due to conflicts. <br />
            <StyledPara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              dolor?
            </StyledPara>
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
            <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              culpa?
            </StyledPara>
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
            Caregivers will be most likely to be dropped. <br />
            <StyledPara>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              repellendus!
            </StyledPara>
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
