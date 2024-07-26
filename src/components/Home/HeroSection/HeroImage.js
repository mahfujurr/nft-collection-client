import ImageCaption from "@/components/Shared/ImageCaption";
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
      <div className="p-5  bg-color-secondary rounded-b-2xl">
        <ImageCaption path={"/hero-avatar.png"} heading={'Space Walking'} name={'Animekid'}/>
      </div>
    </div>
  );
};

export default HeroImage;
