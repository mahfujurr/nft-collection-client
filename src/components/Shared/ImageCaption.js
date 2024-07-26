import Image from 'next/image';
import React from 'react';

const ImageCaption = ({path, heading, name}) => {
    return (
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[22px]">{heading}</p>
          <div className="flex gap-3">
            <Image
              src={path}
              alt="Hero section image"
              width={24} // Original width of the image or desired width ratio
              height={24} // Original height of the image or desired height ratio
              className="rounded-full"
            />
            <p className="text-base">{name}</p>
          </div>
        </div>
    );
};

export default ImageCaption;