import React from "react";
import styled from "styled-components";
import ButtonSec0101 from "./ButtonSec0101";
import ButtonSec0102 from "./ButtonSec0102";
import ButtonTwo from "./ButtonTwo";

const Section2 = () => {
  return (
    <Wrapper>
      <div className="left-section">
        <img src="./images/sec01.png" alt="sec01" />
      </div>
      <div className="right-section">
        <div className="right-first-info">
          <p>Wear Headset</p>
          <ButtonSec0101></ButtonSec0101>
        </div>
        <div className="right-second-info">
          <p>and take a deep dive</p>
        </div>
        <div className="right-third-info">
          <p>into the ocean of</p>
        </div>
        <div className="right-last-info">
          <ButtonSec0102></ButtonSec0102>
          <p>Science.</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding: 136px 58px;
  display: flex;
  justify-content: space-between;
  /* justify-items: center; */
  /* border: 1px solid red; */
  .right-section {
    font-size: 64px;
    line-height: 76.8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .right-first-info {
      display: flex;
      gap: 22px;
      align-items: flex-end;
    }
    .right-last-info {
      display: flex;
      gap: 22px;
      align-items: flex-end;
    }
  }
`;
export default Section2;
