import React from "react";
import styled from "styled-components";
import ButtonFour from "./ButtonFour";
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
        <div className="left-btn">
          <ButtonFour name="Get Started"></ButtonFour>
        </div>
      </div>
      <div className="right-section">
        <img src="./images/hero-img.png" alt="heroimg" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 84px;
  padding-left: 54px;
  /* margin-right: 54px; */
  overflow-x: hidden;
  /* border: 1px solid red; */
  .head-section {
    font-size: 96px;
    width: 814px;
    padding-top: 20px;
    line-height: 110px;
    /* padding-left: 35px; */
    margin-bottom: 49px;
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
  .sub-info {
    p {
      font-size: 24px;
      line-height: 43px;
    }
    margin-bottom: 47px;
  }
  .right-section {
    /* margin-top: 10px; */
    display: flex;
  }
`;
export default HeroSection;
