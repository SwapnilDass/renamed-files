import React from "react";

const FooterBox: React.FC = () => {
  return (
    <footer className="mx-auto mb-28 mt-32 min-h-[455px] w-[1200px] rounded-[60px] border border-white/10 g-gradient-to-b from-[rgba(9,9,33,0.95)] to-[#121224] px-12 pb-8 pt-16 text-white">
      <div className="flex items-start justify-between gap-16">
        {/* Left side: brand + description */}
        <div className="flex max-w-sm flex-col gap-4">
          <div className="-mt-6 flex items-center gap-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 288 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <path
                d="M0 0C13.2022 11.3407 24.5382 18.4334 43.672 19.0978H239.44C246.029 19.0978 251.846 23.3968 253.78 29.6949L287.231 138.637C269.561 121.96 259.506 116.409 238.78 116.082H47.084C40.4986 116.082 34.6833 111.787 32.747 105.493L18.7125 59.8709L0 0Z"
                fill="white"
              />
            </svg>
            <h2 className="text-lg md:text-3xl font-normal">Codeva.</h2>
          </div>

          <p className="mt-20 text-lg md:text-xl leading-relaxed text-gray-300 text-left">
            The first global AI platform where students learn, connect and
            compete in STEM events — powered by community.
          </p>
        </div>

        {/* Right side: links */}
        <div className="flex gap-16">
          <div className="mt-16 flex flex-col items-start gap-1 w-44">
            <h3 className="mb-2 text-xl font-normal leading-relaxed text-white text-left">Product</h3>
            <ul className="m-0 list-none p-0 text-sm leading-relaxed text-gray-300 text-left">
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Features</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Pricing</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Integration</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Changelog</li>
            </ul>
          </div>

          <div className="mt-16 flex flex-col items-start gap-1 w-44">
            <h3 className="mb-2 text-xl font-normal leading-relaxed text-white text-left">Resources</h3>
            <ul className="m-0 list-none p-0 text-sm leading-relaxed text-gray-300 text-left">
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Documentation</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Tutorials</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Blog</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Support</li>
            </ul>
          </div>

          <div className="mt-16 flex flex-col items-start gap-1 w-44">
            <h3 className="mb-2 text-xl font-normal leading-relaxed text-white text-left">Company</h3>
            <ul className="m-0 list-none p-0 text-sm leading-relaxed text-gray-300 text-left">
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">About</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Careers</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Contact</li>
              <li className="my-1 cursor-pointer pl-0 text-lg leading-relaxed text-gray-300 hover:text-white">Partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-20 flex flex-wrap justify-between border-t border-white/20 pt-4 text-sm text-gray-400">
        <p>© 2025 Codeva. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="hover:cursor-pointer hover:text-white">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBox;
