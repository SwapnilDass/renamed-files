const OrDivider: React.FC = () => {
  return (
    <div className="mx-auto mt-2 flex w-full max-w-[460px] items-center justify-center">
      <LeftLine />

      <span className="font-inter mx-2 text-[12px] font-semibold leading-none text-white">
        Or
      </span>

      <RightLine />
    </div>
  );
};

export default OrDivider;

const LeftLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 934 5"
    className="flex-1"
    fill="none"
  >
    <path
      d="M2.08368 0.857423C1.25526 0.85651 0.582945 1.52734 0.582032 2.35577C0.58112 3.1842 1.25195 3.85651 2.08038 3.85742L2.08203 2.35742L2.08368 0.857423ZM2.08203 2.35742L2.08038 3.85742L933.793 4.88382L933.794 3.38382L933.796 1.88382L2.08368 0.857423L2.08203 2.35742Z"
      stroke="rgba(255,255,255,0.31)"
      strokeWidth="3"
    />
  </svg>
);

const RightLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 934 5"
    className="flex-1"
    fill="none"
  >
    <path
      d="M2.08368 0.857423C1.25526 0.85651 0.582945 1.52734 0.582032 2.35577C0.58112 3.1842 1.25195 3.85651 2.08038 3.85742L2.08203 2.35742L2.08368 0.857423ZM2.08203 2.35742L2.08038 3.85742L933.793 4.88382L933.794 3.38382L933.796 1.88382L2.08368 0.857423L2.08203 2.35742Z"
      stroke="rgba(255,255,255,0.31)"
      strokeWidth="3"
    />
  </svg>
);
