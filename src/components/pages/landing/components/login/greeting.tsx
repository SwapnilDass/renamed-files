import React from "react";

interface GreetingProps {
  title?: string;
}

const Greeting: React.FC<GreetingProps> = ({
  title = "Hey! Glad to see you again.",
}) => {
  return (
    <div className="flex max-w-[90%] flex-col items-center text-center">
      {/* Main greeting */}
      <h1 className="mb-3 font-sans text-[22px] font-extrabold leading-[28px] text-white">
        {title}
      </h1>

      {/* Sub greeting split into two lines */}
      <div className="flex min-h-[65px] w-full flex-col items-center justify-center gap-1">
        <p className="m-0 font-sans text-[16px] font-normal leading-[22px] text-white/80">
          👋 Welcome back! Log In or Sign Up to
        </p>
        <p className="m-0 font-sans text-[16px] font-normal leading-[22px] text-white/80">
          your account below.
        </p>
      </div>
    </div>
  );
};

export default Greeting;
