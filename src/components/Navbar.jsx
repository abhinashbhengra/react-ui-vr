import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="menulist">
        <ul>
          <li>Technology</li>
          <li>Courses</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <ButtonOne name="Register" className="register-btn"></ButtonOne>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  margin-left: 54px;
  margin-right: 54px;

  .menulist {
    ul {
      display: flex;
      gap: 54px;
      list-style: none;
      font-size: 20px;
    }
  }
`;
export default Navbar;
