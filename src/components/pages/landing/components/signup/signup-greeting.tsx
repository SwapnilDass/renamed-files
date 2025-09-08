interface GreetingProps {
  title?: string;
  subtitle?: string;
}

const Greeting: React.FC<GreetingProps> = ({
  title = "Millions of Students. One Platform.",
  subtitle = "Sign up today and join millions of students worldwide on their learning journey. Code, Hangout & Practice together, all through One Platform.",
}) => {
  return (
    <div className="flex max-w-[90%] flex-col items-center text-center">
      {/* Main greeting */}
      <h1 className="mb-3 font-sans text-[22px] font-extrabold leading-[28px] text-white">
        {title}
      </h1>

      {/* Sub greeting */}
      <div className="flex h-[65px] w-full flex-col items-center gap-0 overflow-hidden px-2.5">
        <p className="m-0 font-sans text-[16px] font-normal leading-[22px] text-white/80">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Greeting;
