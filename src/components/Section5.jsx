import React from "react";
import styled from "styled-components";
import ButtonOne from "./ButtonOne";
import ButtonSix from "./ButtonSix";

const Section5 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left-section">
          <div className="left-one">
            <p>Get Experience Virtual</p>
            <p>Tours for Science</p>
          </div>
          <div className="left-two">
            <p>With VR, they aren't limited to word descriptions or </p>
            <p>book illustrations; they can explore </p>
            <p>the topic and see how things are put together.</p>
          </div>
          <div className="left-three">
            <ButtonSix name="Contact Us"></ButtonSix>
            {/* <ButtonOne ></ButtonOne> */}
          </div>
        </div>
        <div className="right-section">
          <img src="./images/sec0401.png" alt="sec0401" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* height: 561px; */
  background-color: #fff;
  padding-bottom: 169px;

  .container {
    /* background-image: linear-gradient(to right, #00d1ff, #001aff); */
    /* display: flex; */
    background: linear-gradient(99.58deg, #00d1ff 0%, #001aff 99.46%);
    margin: 0px 50px;
    padding: 57px 53px 0 53px;
    height: 561px;
    position: relative;
    .left-section {
      .left-one {
        font-size: 60px;
        font-weight: 700;
        line-height: 72px;
        color: #fff;
        margin-bottom: 19px;
      }
      .left-two {
        font-size: 16px;
        line-height: 34px;
        color: #fff;
        margin-bottom: 55px;
      }
    }
    .right-section {
      position: absolute;
      top: 0px;
      right: 56px;
    }
  }
`;
export default Section5;
