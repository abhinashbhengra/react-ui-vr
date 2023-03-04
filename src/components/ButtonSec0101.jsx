import React from "react";
import styled from "styled-components";

const ButtonSec0101 = () => {
  return (
    <Wrapper>
      <div className="inner"></div>
      <div className="main">
        <img src="./images/vrwmn.png" alt="vr-logo" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 158px;
  height: 63px;
  position: relative;
  img {
    /* display: none; */
    /* / */
    width: 140px;
    height: 88px;
  }
  .inner {
    width: 100%;
    height: 100%;
    width: 155.69px;
    height: 59.29px;
    position: absolute;
    border: 0.8px solid black;
    top: 4.56px;
    left: -6.87px;
    border-radius: 61px;
  }
  .main {
    background-color: #fab246;
    position: relative;
    border-radius: 61px;
    width: 155.69px;
    height: 59.29px;
    border: 0.8px solid black;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 8881;
  }
`;
export default ButtonSec0101;
