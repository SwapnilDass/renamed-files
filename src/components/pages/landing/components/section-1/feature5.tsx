import SectionText from "./sectiontext";

export default function Feature5() {
  return (
    <div className="max-w-xl break-inside-avoid space-y-8 rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 md:p-8">
      {/* Stats */}
      <img
        src="/landing/statistics.png"
        alt="Radar statistics graphic"
        className="block h-auto w-full object-contain"
      />

      <SectionText
        heading="Earn as you Learn."
        paragraph="
          Want to host your event through Codeva? No problem! We’ll provide you
          with custom shops, ticketing, management, and more, all through one
          Platform.
        "
      />
    </div>
  );
}
