/* eslint-disable @next/next/no-img-element */
import React from "react";

const AvatarInfo = ({name, path, amount}) => {
  return (
    <div className="p-[20px] rounded-[20px] bg-color-secondary flex lg:flex-col justify-start items-center gap-2">
      <img
        src={path}
        alt="trending section image"
        className="rounded-full w-[60px] lg:w-[120px]"
      />
      <div className="flex flex-col text-start lg:text-center ">
        <p className="font-semibold text-[22px]">{name}</p>
        <div className="flex justify-between gap-2">
            <p className="text-caption">Total Sales:</p>
            <p className="space-mono-regular">{amount} ETH</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarInfo;
