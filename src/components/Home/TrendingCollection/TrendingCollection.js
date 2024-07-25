import Heading from "@/components/Shared/Heading";
import React from "react";

const TrendingCollection = () => {
  return (
    <div className="w-full px-[30px] md:px-[72px] lg:px-[115px] py-[40px] md:py-[80px] flex flex-col md:flex-row items-start justify-between gap-10">
      <Heading heading={'Trending Collection'} subHeading={'Checkout our weekly updated trending collection.'}/>
    </div>
  );
};

export default TrendingCollection;
