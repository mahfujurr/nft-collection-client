import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-[28px] lg:text-[38px] font-semibold">{heading}</p>
      <p className="text-[16px] lg:text-[22px]">{subHeading}</p>
    </div>
  );
};

export default Heading;
