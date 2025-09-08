import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-white">
      <p className="mb-2">By continuing, you agree to our</p>
      <div className="flex justify-center gap-8">
        <a
          href="/terms"
          className="relative transition-transform duration-200 ease-out hover:scale-105 hover:text-gray-300 active:scale-95"
        >
          terms of service
        </a>
        <a
          href="/privacy"
          className="relative transition-transform duration-200 ease-out hover:scale-105 hover:text-gray-300 active:scale-95"
        >
          privacy policy
        </a>
        <a
          href="/content"
          className="relative transition-transform duration-200 ease-out hover:scale-105 hover:text-gray-300 active:scale-95"
        >
          content policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
