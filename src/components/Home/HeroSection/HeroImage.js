import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="w-full ">
      <Image
        src="/hero-image.png"
        alt="Hero section image"
        layout="responsive"
        width={500} // Original width of the image or desired width ratio
        height={300} // Original height of the image or desired height ratio
        priority={true} // Optional: Prioritize loading the image
        className="rounded-t-2xl"
      />
      <div className="p-5 flex flex-col gap-3 bg-color-secondary rounded-b-2xl">
        <p className="font-semibold text-[22px]">Space Walking</p>
        <div className="flex gap-3">
          <Image
            src="/hero-avatar.png"
            alt="Hero section image"
            width={24} // Original width of the image or desired width ratio
            height={24} // Original height of the image or desired height ratio
            className="rounded-full"
          />
          <p className="text-base">Animekid</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
