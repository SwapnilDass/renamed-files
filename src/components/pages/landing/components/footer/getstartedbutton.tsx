import React from "react";
import { useNavigate } from "react-router-dom";

interface GetStartedButtonProps {
  label?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  label = "Get Started",
}) => {
  const navigate = useNavigate();

  return (
    <button
      className="mt-14 h-[60px] w-full max-w-[300px] transform cursor-pointer rounded-[30px] bg-white p-4 text-lg font-bold leading-normal text-black transition duration-200 ease-in-out hover:bg-gray-300 hover:text-[#111111] hover:shadow-lg focus:outline-none active:scale-95 active:bg-gray-400 active:text-black active:duration-150"
      onClick={() => navigate("/login")} // redirect to login
    >
      {label}
    </button>
  );
};

export default GetStartedButton;
