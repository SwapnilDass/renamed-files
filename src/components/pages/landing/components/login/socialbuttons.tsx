import React from "react";

const SocialButtons: React.FC = () => {
  const buttonStyle =
    "mt-[1rem] flex h-[47px] w-full max-w-[460px] cursor-pointer items-center justify-center gap-[0.75rem] rounded-[10px] border-[2px] border-[rgba(187,187,187,0.44)] bg-transparent px-[1rem] py-[0.75rem] font-sans text-[14px] font-bold leading-normal text-white shadow-none transition duration-200 ease-in-out hover:border-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.08)] focus:outline-none active:scale-95 active:bg-[rgba(255,255,255,0.12)]";

  return (
    <>
      {/* Google Button */}
      <button className={buttonStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 102 102"
          fill="none"
        >
          <path
            d="M95.1199 51.7133C95.1199 48.0637 94.8177 45.4005 94.1637 42.6387H51.6387V59.111H76.6C76.0969 63.2048 73.3791 69.3695 67.3399 73.5121L67.2553 74.0637L80.7011 84.2715L81.6326 84.3625C90.1878 76.6195 95.1199 65.2266 95.1199 51.7133Z"
            fill="#4285F4"
          />
          <path
            d="M51.6354 95.1154C63.8644 95.1154 74.1304 91.1697 81.6293 84.3639L67.3367 73.5132C63.5121 76.1272 58.3788 77.9519 51.6354 77.9519C39.6582 77.9519 29.4925 70.2092 25.8687 59.5068L25.3376 59.5509L11.3567 70.1546L11.1738 70.6527C18.6219 85.1527 33.9209 95.1154 51.6354 95.1154Z"
            fill="#34A853"
          />
          <path
            d="M25.8718 59.5067C24.9156 56.7449 24.3622 53.7856 24.3622 50.7279C24.3622 47.67 24.9156 44.711 25.8215 41.9491L25.7961 41.3607L11.64 30.5869L11.1768 30.8028C8.10714 36.8199 6.3457 43.5765 6.3457 50.7279C6.3457 57.879 8.10714 64.6357 11.1768 70.6526L25.8718 59.5067Z"
            fill="#FBBC05"
          />
          <path
            d="M51.6357 23.5037C60.1406 23.5037 65.8776 27.104 69.1489 30.1126L81.9314 17.8814C74.081 10.7302 63.8647 6.34082 51.6357 6.34082C33.9209 6.34082 18.6219 16.3032 11.1738 30.8028L25.8185 41.949C29.4926 31.2468 39.6582 23.5037 51.6357 23.5037Z"
            fill="#EB4335"
          />
        </svg>
        Continue with Google
      </button>

      {/* Discord Button */}
      <button className={buttonStyle}>
        <img
          src="/logos/discord.png"
          alt="Discord"
          width={25}
          height={25}
          className="flex-shrink-0"
        />
        Continue with Discord
      </button>
    </>
  );
};

export default SocialButtons;
