import SectionText from "./sectiontext";

export default function Feature3() {
  return (
    <div className="max-w-xl break-inside-avoid space-y-8 rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 md:p-8">
      <SectionText
        heading="Compete & Reach the top!"
        paragraph="Any activity you do earns you XP, so gather as much as you can and compete in the leaderboard to win prizes!"
      />

      {/* Notifications Image */}
      <img
        src="/landing/notifications.png"
        alt="Notifications"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
