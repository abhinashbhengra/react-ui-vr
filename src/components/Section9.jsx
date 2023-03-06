import React from "react";
import styled from "styled-components";

const Section9 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first-section">
          <p>Subscribe for</p>
          <p>Offer Updates</p>
        </div>
        <div className="second-section">
          <div className="outer-box">
            <p>Enter Your Email</p>
            <div className="inner-box">
              <p>Enroll Now</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding-bottom: 270px;
  .container {
    background-color: #fedc98;
    height: 414px;
    margin: 0px 50px;
    padding: 130px 100px;
    display: flex;
    align-items: center;
    gap: 210px;
    .first-section {
      font-size: 64px;
      font-weight: 700;
      line-height: 76.8px;
    }
    .second-section {
      .outer-box {
        border: 1.7px solid black;
        background-color: #fff;
        display: flex;
        align-items: center;
        gap: 86px;
        padding: 32px 23px;
        p {
          font-size: 20.4px;
          opacity: 0.5;
        }
        .inner-box {
          background-color: #00d1ff;
          border: 1.7px solid black;
          padding: 17px 60px;
          p {
            font-size: 20px;
            font-weight: 500;
            color: #fff;
            opacity: 1;
          }
        }
      }
    }
  }
`;
export default Section9;
