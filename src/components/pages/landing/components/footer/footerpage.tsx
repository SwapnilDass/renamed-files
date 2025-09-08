import React from "react";
import FooterLogo from "./footerlogo";
import GreetingBox from "./greetingbox";
import GetStartedButton from "./getstartedbutton";
import SubGreeting from "./subgreeting";

import FooterBox from "./footerbox";

const FooterPage: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-4 text-center bg-[#050222] w-full min-h-screen">
      <div className="mb-28 flex justify-center">
        <FooterLogo />
      </div>

      {/* Greeting Box (main + sub greetings) */}

      <div className="flex flex-col items-center gap-4">
        <GreetingBox />

        <SubGreeting />

        {/* Get Started Button below the greetings */}
        <GetStartedButton label="Get Started" />
      </div>

      <FooterBox />
    </footer>
  );
};

export default FooterPage;
