import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <p>Copyright © 2023| All right reserved</p>
        </div>
        <div>
          <p>Terms & Privarcy Policy</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 50px;
  .container {
    border-top: 1px solid black;
    padding-top: 93px;
    padding-bottom: 107px;
    display: flex;
    gap: 553px;
    justify-content: space-between;
    p {
      font-size: 24px;
      font-weight: 250;
      opacity: 0.5;
    }
  }
`;
export default Footer;
