import React from "react";
import styled from "styled-components";

const Section8 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo-container">
          <div>
            <img src="./images/vr.png" alt="vr" />
          </div>
          <div>
            <img src="./images/udemy.png" alt="udemy" />
          </div>
          <div>
            <img src="./images/oculus.png" alt="oculus" />
          </div>
          <div>
            <img src="./images/microsoft.png" alt="microsoft" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding: 0px 50px;
  padding-bottom: 84px;
  .container {
    padding: 137px 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    .logo-container {
      display: flex;
      gap: 160px;
    }
  }
`;
export default Section8;
