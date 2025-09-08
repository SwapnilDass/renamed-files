import React from "react";

const EmailField: React.FC = () => {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-[460px] flex-col">
      <label htmlFor="email" className="mb-2 text-sm font-medium text-white/90">
        Email Address
      </label>
      <div className="relative flex h-12 w-full items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 transition-all focus-within:ring-2 focus-within:ring-purple-400/60 hover:border-white/40">
        {/* Email Icon */}

        <svg
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          className="h-5 w-5 shrink-0 text-white/60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.31103 0.710938C4.18566 0.710938 0.0273438 4.89476 0.0273438 10.0516C0.0273438 12.99 1.40056 15.7533 3.74082 17.5241L45.8268 49.2822C48.0317 50.9363 51.0489 50.9363 53.2538 49.2822L95.3398 17.5241C97.6801 15.7533 99.0533 12.99 99.0533 10.0516C99.0533 4.89476 94.895 0.710938 89.7696 0.710938H9.31103ZM0.0273438 22.5058V62.9818C0.0273438 69.8511 5.57821 75.436 12.4056 75.436H86.675C93.5024 75.436 99.0533 69.8511 99.0533 62.9818V22.5058L56.9673 54.2639C52.5575 57.5915 46.5231 57.5915 42.1134 54.2639L0.0273438 22.5058Z"
            fill="#D5D3D3"
            fillOpacity="0.6"
          />
        </svg>

        {/* Input */}
        <input
          type="email"
          id="email"
          placeholder="Enter your email ..."
          className="h-full flex-1 border-0 bg-transparent text-white placeholder-white/50 outline-none"
        />
      </div>
    </div>
  );
};

export default EmailField;
