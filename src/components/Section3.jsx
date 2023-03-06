import React from "react";
import styled from "styled-components";
import ButtonFour from "./ButtonFour";
import ButtonSec0102 from "./ButtonSec0102";

const Section3 = () => {
  return (
    <Wrapper>
      <div className="left-section">
        <div className="heading-section">
          <div className="head-first-section">
            <p>Virtual</p>
            <ButtonSec0102></ButtonSec0102>
          </div>
          <div className="head-second-section">
            <p>Classroom is</p>
          </div>
          <div className="head-last-section">
            <p>now Reality !!</p>
          </div>
        </div>
        <div className="sub-info-section">
          <p>With VR, they aren't limited to</p>
          <p>word descriptions or book</p>
          <p>illustrations; they can explore</p>
          <p>the topic and see how things are</p>
          <p> put together.</p>
        </div>
        <div className="button-section">
          <ButtonFour name="Get Started"></ButtonFour>
        </div>
      </div>
      <div className="right-section">
        <div className="section-one">
          <div className="info">
            <div className="img-div">
              <img src="./images/sec0201.png" alt="sec0201" />
            </div>
            <p className="sub-head">Engaging Classroom</p>
            <p className="desc">
              Students will no longer just hear and see, they will also
              participate and have practical experiences.
            </p>
          </div>
          <div className="info">
            <div className="img-div">
              <img src="./images/sec0202.png" alt="sec0202" />
            </div>
            <p className="sub-head">Virtual Laboratory</p>
            <p className="desc">
              Students will no longer just hear and see, they will also
              participate and have practical experiences.
            </p>
          </div>
        </div>
        <div className="section-two">
          <div className="info">
            <div className="img-div">
              <img src="./images/sec0203.png" alt="sec0203" />
            </div>
            <p className="sub-head">Fun with VR</p>
            <p className="desc">
              A Imagine taking a trip to Mars, or watching how 8 skeleton takes
              a human form, it would be so fun!
            </p>
          </div>
          <div className="info">
            <div className="img-div">
              <img src="./images/sec0204.png" alt="sec0204" />
            </div>
            <p className="sub-head">Interactive Learning</p>
            <p className="desc">
              Complex concepts will be now easier to understand with VR, you
              won't just read theories you will see them!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-left: 54px;
  margin-right: 54px;
  margin-top: 76px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* width: 289px; */
  /* height: 351px; */
  /* border: 1px solid red; */

  .heading-section {
    font-size: 64px;
    line-height: 76.8px;
    margin-bottom: 27px;
    .head-first-section {
      display: flex;
      gap: 22px;
      align-items: flex-end;
    }
  }

  .sub-info-section {
    font-size: 24px;
    line-height: 43px;
    margin-bottom: 45px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 289px;
    height: 351px;
    text-align: center;
    background-image: linear-gradient(#fdf6eb, #c4f1fb);
    /* border: 1px solid red; */

    .img-div {
      background-color: #d9d9d9;
      background-image: linear-gradient(#fdf6eb, #d9d9d9);
      width: 181.02px;
      height: 181.02px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      object-fit: contain;
      margin-bottom: 45px;
      img {
        /* border-radius: inherit; */
        /* padding-left: 10px; */
      }
    }
    .sub-head {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 24px;
    }
    .desc {
      font-size: 13px;
      padding: 0px 20px;
    }
  }
  .right-section {
    /* display: flex; */
    margin-left: 200px;
    margin-top: 60px;
    margin-bottom: 120px;
    .section-one {
      display: flex;
      gap: 97px;
      margin-bottom: 94px;
    }
    .section-two {
      /* border: 1px solid red; */
      display: flex;
      gap: 97px;
    }
  }
`;
export default Section3;
