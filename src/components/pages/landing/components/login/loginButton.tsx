import clsx from "clsx";
import { useState } from "react";

interface LoginButtonProps {
  label?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ label = "Log In" }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={clsx(
        "mt-5 h-[47px] w-full max-w-[460px] cursor-pointer rounded-[10px] border-none bg-white px-4 py-3 font-sans text-[14px] font-bold leading-normal text-black transition duration-200 ease-in-out",
        "hover:bg-gray-300 hover:text-gray-900 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] focus:outline-none active:scale-95 active:bg-gray-400 active:text-black",
        clicked && "scale-100",
      )}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      {label}
    </button>
  );
};

export default LoginButton;
