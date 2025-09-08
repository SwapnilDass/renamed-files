import SectionText from "./sectiontext";

export default function Feature2() {
  return (
    <div className="break-inside-avoid space-y-[50px] rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 md:p-8">
      {/* Dashboard */}
      <div className="flex items-center justify-center">
        <div className="relative w-[320px] md:w-[360px] lg:w-[400px]">
          <img
            src="/brand/png/Dashboard Preview.png"
            alt="Events and Teams Preview"
            className="h-auto w-full object-contain"
          />

          {/* Highlighted box*/}
          <div className="absolute left-[32.75%] top-[34%] h-[32%] w-[15%] rounded-[1px] border-[1px] border-[#ED066B]" />

          {/*Cursor icon */}
          <img
            src="/brand/svg/Hand (Pointing).svg"
            alt="Cursor"
            className="absolute left-[46%] top-[55%] h-[5px] w-[5px] rotate-[-10deg]"
          />
        </div>
      </div>

      <SectionText
        heading="Find events & teams that fit you."
        paragraph="Whether you're into online events or in-person ones, we've got you covered, simply apply your filter, and watch the magic happen!"
      />
    </div>
  );
}
