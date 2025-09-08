import SectionText from "./sectiontext";

export default function Feature1() {
  return (
    <div className="break-inside-avoid space-y-10 rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 md:p-8">
      {/* Phone Preview*/}
      <div className="flex items-center justify-center">
        {/*Top Half Phone */}
        <div className="relative w-[200px] overflow-hidden md:w-[220px] lg:w-[250px]">
          <img
            src="/brand/png/Group 21 1.png"
            alt="Phone top"
            className="h-auto w-full object-cover [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
        </div>

        {/*Bottom Half Phone */}
        <div className="relative -ml-2 w-[200px] overflow-hidden pt-[18px] md:w-[220px] lg:w-[250px]">
          <img
            src="/brand/png/Group 21 2.png"
            alt="Phone bottom"
            className="h-auto w-full object-cover [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_100%)] [mask-image:linear-gradient(to_top,black_80%,transparent_100%)]"
          />
        </div>
      </div>

      <SectionText
        heading="Learn interactively."
        paragraph="Codeva offers a new fun, entertaining, and effective way of presenting information, simply start your course, and enjoy the ride!"
      />
    </div>
  );
}
