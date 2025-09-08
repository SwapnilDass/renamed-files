export default function Branding() {
  return (
    <div className="relative overflow-hidden rounded-xl border-[1.6px] border-white/[8%] bg-white/10 pb-[-80px]">
      <DottedBackground />

      <div className="absolute inset-0 flex items-center justify-center">
        <CodevaLogo />
      </div>
    </div>
  );
}

function DottedBackground() {
  return (
    <svg
      width="964"
      height="720"
      viewBox="0 0 964 720"
      fill="none"
      className="-my-10 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_17_321)">
        <path
          d="M200.368 213.81L535.494 200.87L763.88 337.083L636.347 519.17L200.368 213.81Z"
          fill="#3F1C8A"
          fillOpacity="0.46"
        />
      </g>
      <rect
        x="223.173"
        y="186.672"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="166.863"
        y="355.603"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="272.78"
        y="469.564"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="669.634"
        y="204.101"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="827.84"
        y="293.93"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="805.048"
        y="438.728"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="622.709"
        y="476.268"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="440.37"
        y="513.809"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="338.475"
        y="334.151"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="236.58"
        y="154.494"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="461.822"
        y="210.805"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="687.064"
        y="267.115"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="839.906"
        y="346.217"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <rect
        x="821.136"
        y="193.375"
        width="2.68145"
        height="2.68145"
        rx="1.34072"
        fill="white"
        fillOpacity="0.58"
      />
      <defs>
        <filter
          id="filter0_f_17_321"
          x="0.368164"
          y="0.869629"
          width="963.512"
          height="718.3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_17_321"
          />
        </filter>
      </defs>
    </svg>
  );
}

function CodevaLogo() {
  return (
    <svg
      width="637"
      height="305"
      viewBox="0 0 637 305"
      fill="none"
      className="h-full w-1/3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.18031 1.51753C-0.119209 0.558167 1.02886 -0.197441 1.79579 0.452108C30.0156 24.3529 54.9485 39.2308 96.1726 40.664H548.379C552.772 40.664 556.651 43.5314 557.939 47.7316L636.214 302.93C636.515 303.912 635.303 304.648 634.552 303.947C596.99 268.877 574.63 257.094 529.674 256.384H86.5256C82.1342 256.384 78.2566 253.519 76.9667 249.322L40.7163 131.355L19.9281 64.7699L0.18031 1.51753Z"
        fill="url(#paint0_radial_17_316)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_17_316"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(335.027 139.867) rotate(28.872) scale(345.207 706.247)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.43" />
        </radialGradient>
      </defs>
    </svg>
  );
}
