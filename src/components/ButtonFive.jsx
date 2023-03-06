import styled from "styled-components";

import React from "react";

const ButtonFive = ({ name }) => {
  return (
    <Wrapper>
      <div className="inner"></div>
      <div className="main">{name}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 216px;
  height: 73.21px;
  position: relative;

  .inner {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1.4px solid black;
    top: 7.56px;
    left: -6.87px;
    /* z-index: -1; */
  }

  .main {
    width: 216px;
    height: 73.21px;
    font-size: 20.41px;
    position: relative;
    z-index: 676676;
    color: #fff;
    display: flex;
    background-color: #00d1ff;
    align-items: center;
    justify-content: center;
    border: 1.4px solid black;
  }
`;

export default ButtonFive;
