/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Shared/Heading";
import ImageCaption from "@/components/Shared/ImageCaption";
import React from "react";

const TrendingCollection = () => {
  return (
    <div className="w-full px-[30px] md:px-[72px] lg:px-[115px] py-[40px] md:py-[80px] flex flex-col  items-start justify-between ">
      <Heading
        heading={"Trending Collection"}
        subHeading={"Checkout our weekly updated trending collection."}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[30px]">
        <div className="flex flex-col gap-[15px] w-full">
          <img
            src="/trending-section-dog.png"
            alt="trending section image"
            className="rounded-2xl w-full"
          />
          <div className="grid grid-cols-3 items-center gap-[15px] ">
            <img
              src="/trending-section-cat.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <img
              src="/trending-section-bear.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <div className="text-[16px] md:text-[22px] rounded-2xl bg-callToAction flex justify-center items-center aspect-square w-full space-mono-regular font-bold">
              1025+
            </div>
          </div>
          <ImageCaption
            path={"/hero-avatar.png"}
            heading={"DSGN Animals"}
            name={"MrFox"}
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <img
            src="/trending-section-mashrooms-1.png"
            alt="trending section image"
            className="rounded-2xl w-full"
          />
          <div className="grid grid-cols-3 items-center gap-[15px] ">
            <img
              src="/trending-section-mashrooms-2.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <img
              src="/trending-section-mashrooms-3.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <div className="text-[16px] md:text-[22px] rounded-2xl bg-callToAction flex justify-center items-center aspect-square w-full space-mono-regular font-bold">
              1025+
            </div>
          </div>
          <ImageCaption
            path={"/hero-avatar.png"}
            heading={"Magic Mushrooms"}
            name={"Shroomie"}
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <img
            src="/trending-section-disco-1.png"
            alt="trending section image"
            className="rounded-2xl w-full"
          />
          <div className="grid grid-cols-3 items-center gap-[15px] ">
            <img
              src="/trending-section-disco-2.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <img
              src="/trending-section-disco-3.png"
              alt="trending section image"
              className="rounded-2xl w-full"
            />
            <div className="text-[16px] md:text-[22px] rounded-2xl bg-callToAction flex justify-center items-center aspect-square w-full space-mono-regular font-bold">
              1025+
            </div>
          </div>
          <ImageCaption
            path={"/hero-avatar.png"}
            heading={"Disco Machines"}
            name={"BeKind2Robots"}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
