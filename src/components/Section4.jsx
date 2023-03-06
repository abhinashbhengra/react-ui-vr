import React from "react";
import styled from "styled-components";
import ButtonFive from "./ButtonFive";
import ButtonFour from "./ButtonFour";
import ButtonSec0102 from "./ButtonSec0102";

const Section4 = () => {
  return (
    <Wrapper>
      <div className="first-section">
        <p>Which subjects can</p>
        <p className="para-btn">
          benefit from <ButtonSec0102></ButtonSec0102> VR?
        </p>
      </div>
      <div className="second-section">
        <div className="info-main">
          <div className="info-img">
            <img src="./images/sec0301.png" alt="sec0301" />
          </div>
          <div className="info-heading">
            <p>Science Education</p>
          </div>
          <div className="info-desc">
            <p>
              There are many ways that VR can be used to teach science, but
              biology and chemistry are perfect examples.
            </p>
          </div>
          <div className="btn-rating">
            <ButtonFour name="Enroll Now"></ButtonFour>
            <div className="rating">
              <span>
                <img src="./images/star.png" alt="star" />
              </span>
              4.5 (120 Reviews)
            </div>
          </div>
        </div>
        <div className="info-main">
          <div className="info-img">
            <img src="./images/sec0302.png" alt="sec0302" />
          </div>
          <div className="info-heading">
            <p>Learn Virtual Geography</p>
          </div>
          <div className="info-desc">
            <p>
              VR provides easy usability, remote access, and also a safe
              environment without compromising on learning.
            </p>
          </div>
          <div className="btn-rating">
            <ButtonFive name="Enorll Now"></ButtonFive>
            <div className="rating">
              <span>
                <img src="./images/star.png" alt="star" />
              </span>
              4.5 (120 Reviews)
            </div>
          </div>
        </div>
        <div className="info-main">
          <div className="info-img">
            <img src="./images/sec0303.png" alt="sec0303" />
          </div>
          <div className="info-heading">
            <p>Virtual Gaming</p>
          </div>
          <div className="info-desc">
            <p>
              Stay physically active while experiencing all the thrills and
              excitement instead of sitting on a couch with a controller.
            </p>
          </div>
          <div className="btn-rating">
            <ButtonFour name="Enroll Now"></ButtonFour>
            <div className="rating">
              <span>
                <img src="./images/star.png" alt="star" />
              </span>
              4.5 (120 Reviews)
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="one-btn">
          <div className="inner"></div>
          <div className="main"></div>
        </div>
        <div className="two-btn">
          <div className="inner-two"></div>
          <div className="main-two"></div>
        </div>
        <div className="two-btn">
          <div className="inner-two"></div>
          <div className="main-two"></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .first-section {
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    margin-top: 63px;
    margin-bottom: 90px;
    .para-btn {
      display: flex;
      align-items: center;
      gap: 26px;
    }
  }
  .second-section {
    display: flex;
    gap: 35px;
    margin-bottom: 79px;
    .info-main {
      width: 423px;
      .info-img {
        margin-bottom: 33px;
      }
      .info-heading {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 19px;
      }
      .info-desc {
        font-size: 20px;
        line-height: 43px;
        margin-bottom: 31px;
      }
      .btn-rating {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        gap: 10px;
        .rating {
          display: flex;
          gap: 9px;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
  .third-section {
    /* position: relative; */
    display: flex;
    gap: 12px;
    .one-btn {
      position: relative;
      .inner {
        background-color: white;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1.4px solid black;
        top: 4.56px;
        right: -4.87px;
        /* z-index: -1; */
      }

      .main {
        width: 28px;
        height: 28px;
        font-size: 20.41px;
        position: relative;
        z-index: 676676;
        display: flex;
        background-color: #010101;
        align-items: center;
        justify-content: center;
        border: 1.4px solid black;
      }
    }

    .two-btn {
      position: relative;
      .inner-two {
        background-color: #010101;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1.4px solid black;
        top: 4.56px;
        right: -4.87px;
        /* z-index: -1; */
      }

      .main-two {
        width: 28px;
        height: 28px;
        font-size: 20.41px;
        position: relative;
        z-index: 676676;
        color: black;
        display: flex;
        background-color: #ebebeb;
        align-items: center;
        justify-content: center;
        border: 1.4px solid black;
      }
    }
  }
`;
export default Section4;
