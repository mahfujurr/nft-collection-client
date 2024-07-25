import HeroSection from "@/components/Home/HeroSection/HeroSection";
import TrendingCollection from "@/components/Home/TrendingCollection/TrendingCollection";
import React from "react";

const Home = () => {
  return (
    <div className="w-full mx-auto ">
      <HeroSection />
      <TrendingCollection/>
    </div>
  );
};

export default Home;
