import React from "react";
import styled from "styled-components";

const Section7 = () => {
  return (
    <Wrapper>
      <p>
        Over <span>17,000+ Users</span> all over the world
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 162px;
  text-align: center;
  p {
    font-size: 32px;
    span {
      text-decoration: underline;
      font-weight: 500;
    }
  }
`;
export default Section7;
