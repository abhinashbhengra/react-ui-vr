import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Home;
