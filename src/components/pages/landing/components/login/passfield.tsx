import React, { useState } from "react";

const PassField: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto mt-6 flex w-full max-w-[460px] flex-col">
      <label htmlFor="pass" className="mb-2 text-sm font-medium text-white/90">
        Password
      </label>
      <div className="relative flex h-12 w-full items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 transition-all focus-within:ring-2 focus-within:ring-purple-400/60 hover:border-white/40">
        {/* Lock Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 73 84"
          fill="none"
          className="h-5 w-5 shrink-0 text-white/60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5961 24.1908V31.9367H49.4157V24.1908C49.4157 17.0581 43.6386 11.281 36.5059 11.281C29.3732 11.281 23.5961 17.0581 23.5961 24.1908ZM13.2682 31.9367V24.1908C13.2682 11.3617 23.6768 0.953125 36.5059 0.953125C49.335 0.953125 59.7436 11.3617 59.7436 24.1908V31.9367H62.3256C68.022 31.9367 72.6534 36.5681 72.6534 42.2646V73.2481C72.6534 78.9446 68.022 83.576 62.3256 83.576H10.6863C4.9898 83.576 0.358398 78.9446 0.358398 73.2481V42.2646C0.358398 36.5681 4.9898 31.9367 10.6863 31.9367H13.2682Z"
            fill="#D5D3D3"
            fillOpacity="0.6"
          />
        </svg>

        {/* Input */}
        <input
          type={showPassword ? "text" : "password"}
          id="pass"
          placeholder="Enter your password ..."
          className="h-full flex-1 border-0 bg-transparent text-white placeholder-white/50 outline-none"
        />

        {/* Eye Icon (clickable) */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-[89%] flex items-center justify-center"
        >
          <svg
            width="75"
            height="58"
            viewBox="0 0 75 58"
            fill="none"
            className="h-5 w-5 text-white/60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.4635 0.756836C27.1526 0.756836 18.8962 5.44777 12.8857 11.031C6.91353 16.5632 2.91932 23.1917 1.03068 27.7424C0.609565 28.7495 0.609565 29.8712 1.03068 30.8782C2.91932 35.4289 6.91353 42.0574 12.8857 47.5897C18.8962 53.1729 27.1526 57.8638 37.4635 57.8638C47.7744 57.8638 56.0308 53.1729 62.0413 47.5897C68.0135 42.0447 72.0077 35.4289 73.9091 30.8782C74.3302 29.8712 74.3302 28.7495 73.9091 27.7424C72.0077 23.1917 68.0135 16.5632 62.0413 11.031C56.0308 5.44777 47.7744 0.756836 37.4635 0.756836ZM19.0876 29.3103C19.0876 24.4421 21.0236 19.7732 24.4698 16.3308C27.9159 12.8884 32.5899 10.9545 37.4635 10.9545C42.3371 10.9545 47.0111 12.8884 50.4572 16.3308C53.9034 19.7732 55.8394 24.4421 55.8394 29.3103C55.8394 34.1786 53.9034 38.8475 50.4572 42.2898C47.0111 45.7322 42.3371 47.6661 37.4635 47.6661C32.5899 47.6661 27.9159 45.7322 24.4698 42.2898C21.0236 38.8475 19.0876 34.1786 19.0876 29.3103ZM37.4635 21.1522C37.4635 25.6519 33.8011 29.3103 29.2964 29.3103C28.3904 29.3103 27.5226 29.1574 26.7059 28.8897C26.0041 28.6602 25.1874 29.0936 25.2129 29.833C25.2512 30.7125 25.3788 31.5921 25.6212 32.4716C27.3695 38.9981 34.0946 42.8732 40.6282 41.1269C47.1619 39.3805 51.0413 32.6628 49.293 26.1363C47.8765 20.8463 43.1932 17.2898 37.9867 17.0731C37.2466 17.0476 36.8127 17.8507 37.0424 18.5645C37.3104 19.3803 37.4635 20.2471 37.4635 21.1522Z"
              fill={showPassword ? "#9A58FF" : "#D5D3D3"} // purple when active, gray when not
              fillOpacity="0.9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PassField;
