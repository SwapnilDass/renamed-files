import clsx from "clsx";
import { useState } from "react";

interface SignupButtonProps {
  label?: string;
}

const SignupButtonProps: React.FC<SignupButtonProps> = ({
  label = "Sign up",
}) => {
  const buttonStyles =
    "w-full max-w-[460px] h-[47px] rounded-[10px] bg-white text-black font-sans text-[14px] font-bold leading-normal px-4 py-3 mt-[1.25rem] mb-[3.4rem] border-none cursor-pointer transition-transform transition-colors transition-shadow duration-200 ease-in-out";
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={clsx(
        buttonStyles,
        "hover:bg-gray-300 hover:text-gray-900 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] focus:outline-none active:scale-95 active:bg-gray-400 active:text-black",
        clicked && "scale-100",
      )}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      {label}
    </button>
  );
};

export default SignupButtonProps;
