import React from "react";
import styled from "styled-components";

const ButtonTwo = () => {
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
  width: 205px;
  height: 85px;
  position: relative;
  img {
    /* display: none; */
    /* / */
    width: 181px;
    height: 120px;
  }
  .inner {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid black;
    top: 4.56px;
    left: -6.87px;
    border-radius: 61px;
  }
  .main {
    background-color: #fab246;
    position: relative;
    border-radius: 61px;
    width: 205px;
    height: 85px;
    border: 2px solid black;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 8881;
  }
`;
export default ButtonTwo;
