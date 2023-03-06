import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
