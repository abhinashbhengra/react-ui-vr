import React from "react";
import styled from "styled-components";

const Section10 = () => {
  return (
    <Wrapper>
      <div className="left-section">
        <img src="./images/logo.png" alt="logo" />
        <p> Saas Lorem ipsum dolor sit</p>
        <p>amet, consectetur adipiscing</p>
        <p>elit. Consequat</p>
      </div>
      <div className="right-section">
        <div className="right-one">
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-two">
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>UX Research Guide</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div className="right-three">
          <p>Product</p>
          <ul>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Integrate</li>
            <li>What's New</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff;
  padding: 0px 50px;
  padding-bottom: 90px;
  display: flex;
  gap: 234px;
  .left-section {
    img {
      margin-bottom: 32px;
    }
    p {
      font-size: 24px;
      line-height: 34px;
    }
  }
  .right-section {
    display: flex;
    gap: 182px;
    .right-one {
      p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 14px;
      }
      ul {
        list-style: none;
        li {
          font-size: 16px;
          font-weight: 250;
          line-height: 34px;
          margin-bottom: 12px;
          opacity: 0.5;
        }
      }
    }
    .right-two {
      p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 14px;
      }
      ul {
        list-style: none;
        li {
          font-size: 16px;
          font-weight: 250;
          line-height: 34px;
          margin-bottom: 12px;
          opacity: 0.5;
        }
      }
    }
    .right-three {
      p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 14px;
      }
      ul {
        list-style: none;
        li {
          font-size: 16px;
          font-weight: 250;
          line-height: 34px;
          margin-bottom: 12px;
          opacity: 0.5;
        }
      }
    }
  }
`;
export default Section10;
