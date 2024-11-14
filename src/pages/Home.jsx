import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import FeaturedCourses from "../components/FeaturedCourses";
import Testimonial from "../components/Testionomial";
import LatestArticles from "../components/LatestArticles";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />

      {/* <Features /> */}
      <FeaturedCourses />
      <LatestArticles />
      <Testimonial />

    </>
  );
}

export default Home;
