import React from "react";
import EmailField from "./emailfield";
import OrDivider from "./ordivider";
import PassField from "./passfield";
import SocialButtons from "./socialbuttons";
import Footer from "./footer";
import Greeting from "./greeting";
import LoginButton from "./loginButton";
import Logo from "./logo";
import SignUp from "./signUp";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050222]">
      {/*Gray Layout*/}
      <div className="flex h-[780px] w-full min-w-[600px] max-w-[600px] flex-col items-center rounded-[25px] border border-white/20 bg-gray-800/50 p-6 shadow-md backdrop-blur-[15px]">
        {/* Logo at the top */}
        <Logo />

        {/* Greeting text */}
        <Greeting />

        {/* Login content goes here */}
        <EmailField />
        <PassField />
        <LoginButton />

        {/*Sign up */}
        <SignUp />

        {/*Divider */}
        <OrDivider />

        {/*Social Buttons */}
        <SocialButtons />

        {/*Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
