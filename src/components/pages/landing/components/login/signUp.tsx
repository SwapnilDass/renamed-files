import React from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="mt-[0.25rem] flex flex-wrap items-center justify-center gap-[0.5rem]">
      {/* Left Text */}
      <span
        className="text-center font-sans text-[12px] font-medium text-[rgba(224,224,224,0.74)]"
        style={{ lineHeight: "normal" }}
      >
        Don't have an account?
      </span>

      {/* Right Text as Link */}
      <Link
        to="/signup"
        className="font-feature-settings-['ss02'_on] cursor-pointer border-none bg-gradient-to-r from-[#9a58ff] via-[#ed066b] to-[#9a58ff] bg-clip-text font-sans text-[12px] font-semibold text-transparent transition-transform duration-200"
        style={{
          lineHeight: "50px",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Sign Up Now!
      </Link>
    </div>
  );
};

export default Signup;
