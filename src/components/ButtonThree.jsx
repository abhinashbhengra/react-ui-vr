import React from "react";
import styled from "styled-components";

const ButtonThree = () => {
  return (
    <Wrapper>
      <div className="main">
        <img src="./images/arrow.png" alt="vr-logo" />
      </div>
      <div className="inner"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: 205px;
  height: 85px;
  img {
    /* display: none; */
    /* width: 181px; */
    /* height: 120px; */
    margin-bottom: 12px;
  }
  .main {
    background-color: #f13327;
    border-radius: 61px;
    width: 205px;
    height: 85px;
    border: 2px solid black;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .inner {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid black;
    top: 4.56px;
    left: -6.87px;
    border-radius: 61px;
    z-index: -1;
  }
`;
export default ButtonThree;
