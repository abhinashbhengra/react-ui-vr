import React from "react";
import styled from "styled-components";
import ButtonThree from "./ButtonThree";
import ButtonTwo from "./ButtonTwo";
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="left-section">
        <div className="head-section">
          <div className="head-info-one">
            <div>Virtual</div>
            <ButtonTwo></ButtonTwo>
            <div>Reality</div>
          </div>
          <div className="head-info-two">
            <ButtonThree></ButtonThree>
            <div>Argumented </div>
          </div>
          <div className="head-info-three">Education.</div>
        </div>
        <div className="sub-info">
          <p>Virtual reality, or VR, is talking off in education with an</p>
          <p>increasing number of schools adopting the technology,</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .head-section {
    font-size: 96px;
    width: 814px;
    line-height: 110px;
    /* border: 1px solid red; */
    .head-info-one {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .head-info-two {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .head-info-three {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .sub-info p {
    font-size: 24px;
  }
`;
export default HeroSection;
