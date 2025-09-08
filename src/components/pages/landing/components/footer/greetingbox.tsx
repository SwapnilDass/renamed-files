import React from "react";

const GreetingBox: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-[90%] px-5">
      <h1 className="m-0 leading-[1.1]">
        <span className="inline-block font-sans text-[30px] font-medium leading-[55px] text-center text-white pr-2">Ready to</span>
        <span className="inline-block font-sans text-[30px] font-medium leading-[55px] text-center bg-gradient-to-br from-[#ED066B] via-[#ED066B] to-white bg-clip-text text-transparent">Sharpen your Skills?</span>
      </h1>
    </div>
  );
};

export default GreetingBox;
