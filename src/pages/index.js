import HeroSection from "@/components/Home/HeroSection/HeroSection";
import TopCreator from "@/components/Home/TopCreeator/TopCreator";
import TrendingCollection from "@/components/Home/TrendingCollection/TrendingCollection";
import React from "react";

const Home = () => {
  return (
    <div className="w-full mx-auto ">
      <HeroSection />
      <TrendingCollection />
      <TopCreator />
    </div>
  );
};

export default Home;
