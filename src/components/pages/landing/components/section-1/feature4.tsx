import SectionText from "./sectiontext";

export default function Feature4() {
  return (
    <div className="max-w-xl break-inside-avoid space-y-4 rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 !pb-0 md:p-8">
      <SectionText
        className="text-center"
        heading="Learn what describes you."
        paragraph="Whether you’re into coding, math, or physics, you’ll find what you love right here!"
      />

      {/* Radar */}
      <div className="flex items-center justify-center">
        <div className="relative w-[240px] md:w-[260px] lg:w-[280px]">
          <img
            src="/brand/png/Radar Statistics.png"
            alt="Radar statistics graphic"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
