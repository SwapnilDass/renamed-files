import SignupButtonProps from "../pages/landing/components/signup/signup-button";
import EmailField from "../pages/landing/components/login/emailfield";
import OrDivider from "../pages/landing/components/login/ordivider";
import PassField from "../pages/landing/components/login/passfield";
import SocialButtons from "../pages/landing/components/login/socialbuttons";
import Footer from "../pages/landing/components/login/footer";
import Logo from "../pages/landing/components/login/logo";
import Greeting from "../pages/landing/components/login/greeting";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SingupPopup: React.FC<SignupPopupProps> = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background blur overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-lg"
            onClick={onClose}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal wrapper with padding for top breathing room */}
          <motion.div
            className="relative z-10 mx-auto my-8 flex max-h-[90vh] w-full max-w-[602px] flex-col items-center overflow-y-hidden rounded-2xl border border-white/20 bg-gray-900/90 p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <SignupForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SingupPopup;

const SignupForm = () => {
  return (
    <div>
      <div className="mb-6 mt-8 flex justify-center">
        <Logo />
      </div>

      <div className="flex flex-col items-center">
        <Greeting />
        <EmailField />
        <PassField />
        <SignupButtonProps />
        <AlreadyMember />
        <OrDivider />
        <SocialButtons />
      </div>

      <Footer />
    </div>
  );
};

const AlreadyMember = () => {
  return (
    <div className="-mt-[2rem] mb-[1rem] flex flex-wrap items-center justify-center gap-[0.5rem]">
      {/* Left Text */}
      <span
        className="text-center font-sans text-[12px] font-medium text-[rgba(224,224,224,0.74)]"
        style={{ lineHeight: "normal" }}
      >
        Already have an account?
      </span>

      {/* Right Text as Link */}
      <Link
        to="/login"
        className="font-feature-settings-['ss02'_on] cursor-pointer border-none bg-gradient-to-r from-[#9a58ff] via-[#ed066b] to-[#9a58ff] bg-clip-text font-sans text-[12px] font-semibold text-transparent transition-transform duration-200"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Log In
      </Link>
    </div>
  );
};
