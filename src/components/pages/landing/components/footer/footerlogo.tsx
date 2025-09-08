import React from "react";

const FooterLogo: React.FC = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 795 391"
        fill="none"
        className="block w-[120px] h-auto"
      >
        <path
          d="M1.0452 2.77865C0.462364 0.846895 2.79976 -0.64222 4.32399 0.679929C38.7973 30.5827 69.7617 49.1449 120.332 50.9641H676.359C687.43 50.9641 697.182 58.2451 700.328 68.8593L794.813 387.621C795.399 389.599 792.947 391.061 791.459 389.634C745.73 345.804 717.773 330.992 662.392 330.088H117.685C106.619 330.088 96.8697 322.813 93.7194 312.204L50.988 168.31L1.0452 2.77865Z"
          fill="url(#paint0_linear_4_44)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4_44"
            x1="398"
            y1="-4"
            x2="398"
            y2="395"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FooterLogo;
