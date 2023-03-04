import styled from "styled-components";

import React from "react";

const ButtonFour = ({ name }) => {
  return (
    <Wrapper>
      <div className="main">{name}</div>
      <div className="inner"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 216px;
  height: 73.21px;
  background-color: #ffffff;
  position: relative;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;

  .main {
    font-size: 20.41px;
  }
  .inner {
    background-color: #00d1ff;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid black;
    top: 7.56px;
    left: -6.87px;
    z-index: -1;
  }
`;

export default ButtonFour;
