import styled from "styled-components";

import React from "react";

const ButtonOne = ({ name }) => {
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
  background-color: #010101;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    font-size: 20.41px;
  }
  .inner {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid black;
    top: 4.56px;
    left: -6.87px;
    /* z-index: 10; */
  }
`;

export default ButtonOne;
