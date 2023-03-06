import React from "react";
import styled from "styled-components";
import ButtonSec0101 from "./ButtonSec0101";

const Section6 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-section">
          <img src="./images/sec0501.png" alt="sec0501" />
        </div>
        <div className="right-section">
          <div className="right-one">
            <p> Making Students</p>
            <div className="second-line">
              <p>Creative </p>
              <ButtonSec0101></ButtonSec0101>
              <p>Future</p>
            </div>
          </div>
          <div className="right-two">
            <p>Give your child an easy way</p>
            <p>
              to understand science.fotonVR increases interest, adds fun, has
              international level
            </p>
            <p>content, helps to understand the hard concept and that's why</p>
            <p>each parent order fotonVR kit for their child.</p>
          </div>
          <div className="right-three">
            <div className="checkmark">
              <img src="./images/check.png" alt="check" />
              <p>Critical Solutions</p>
            </div>
            <div className="checkmark">
              <img src="./images/check.png" alt="check" />
              <p>Critical Solutions</p>
            </div>
          </div>
          <div className="right-four">
            <div className="checkmark">
              <img src="./images/check.png" alt="check" />
              <p>Critical Solutions</p>
            </div>
            <div className="checkmark">
              <img src="./images/check.png" alt="check" />
              <p>Critical Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  .container {
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    .left-section {
      width: 583px;
      height: 564px;
      background-color: #fdf6eb;
      img {
        padding: 38px 74px;
      }
    }
    .right-section {
      padding: 38px 0px;
      .right-one {
        font-size: 64px;
        font-weight: 700;
        line-height: 76.8px;
        margin-bottom: 30px;
        .second-line {
          display: flex;
          align-items: flex-end;
          gap: 24px;
        }
      }
      .right-two {
        font-size: 16px;
        line-height: 34px;
        margin-bottom: 30px;
      }
      .right-three {
        display: flex;
        gap: 90px;
        margin-bottom: 114px;
        .checkmark {
          display: flex;
          gap: 12px;
          p {
            font-size: 16px;
            font-size: 500;
          }
        }
      }
      .right-four {
        display: flex;
        gap: 90px;
        margin-bottom: 114px;
        .checkmark {
          display: flex;
          gap: 12px;
        }
      }
    }
  }
`;
export default Section6;
