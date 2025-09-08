import SingupPopup from "../shared/signuppopup";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowPopup = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="z-50 flex h-[50px] w-screen items-center justify-center">
      {/* Desktop / Tablet Navbar */}
      <div className="hidden h-full w-[90%] items-center justify-between rounded-xl border border-[#9373d95e] px-4 sm:w-[95%] md:flex md:w-[80%] lg:w-[65%]">
        {/* Logo */}
        <img
          src="/brand/png/Branding.png"
          alt="Codeva"
          className="h-[50%] sm:h-[45%] md:h-[40%] lg:h-[50%]"
        />

        {/* Navigation Icons */}
        <div className="flex h-full items-center justify-center gap-4 opacity-100 transition-opacity duration-300 hover:opacity-50">
          {[1, 2, 3, 4, 5].map((num) => (
            <a
              key={num}
              href="/"
              className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30 hover:opacity-100"
            >
              <img src={`/nav/nav_${num}.png`} alt="" className="h-[40%]" />
            </a>
          ))}
        </div>

        {/* Get Started Button → Login */}
        <button
          onClick={handleShowPopup}
          className="h-[70%] w-40 rounded-lg bg-white text-black transition-all duration-500 hover:bg-white/70 max-md:w-28"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex h-full w-[80%] items-center justify-between rounded-xl border border-[#9373d95e] px-4 md:hidden">
        {/* Logo */}
        <img src="/brand/png/Branding.png" alt="Codeva" className="h-[35%]" />

        {/* Hamburger Menu */}
        <div className="flex h-[40%] w-10 cursor-pointer items-center justify-center">
          <FontAwesomeIcon
            icon={faBars}
            className="h-full w-auto text-white/80"
            style={{ fontWeight: 300 }}
          />
        </div>
      </div>

      <SingupPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
