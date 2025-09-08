import { useEffect, useState, HTMLAttributes } from "react";
import TestimonialCard from "./testimonialcard";
import clsx from "clsx";
import BlurFade from "@/components/ui/blur-fade";
import MasonryGrid from "@/components/shared/masonryGrid";

interface TestimonialGrid extends HTMLAttributes<HTMLDivElement> {}

export default function TestimonialGrid({
  className,
  ...props
}: TestimonialGrid) {
  const userTestimonials = [
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it...",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "My little bro just showed me Codeva and what he's been learning, he's doing way better in school especially in math, and he's making his own website now thanks to what he learned there!",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Yall gotta admit Codeva's the og",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "No way they teach all the math i need for free",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Too good at their job fr",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Just reached top 3 in the weekly leaderboard",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "This platform rocks man",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Tbh yall gotta admit Codeva is the best learning platform out there at the moment. They teach math, coding, physics, and more for free through interactive courses, host events, alow you to host your own and earn through your own shop, discover events according to your needs, compete with other students on a leaderboard and get paid for courses. Damn man they really cracked the winning formula of Duolingo, can't wait to see where this goes!",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Looking for a way to learn coding, math, physics, and more, all through the comfort of your home? Codeva's what you need. Check it out right now and gain expertise in what YOU like. https://codeva.xyz/",
      imageUrl: "", // This can be replaced by a url
    },

    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "Gained a ton of xp on Codeva by joining the summer hackathon on their platform, even got a certificate and gifts",
    },
    {
      username: "Steven Tey",
      handle: "@steventey",
      body: "They rock so hard",
    },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowMore = () => {
    setVisibleCount(userTestimonials.length); // Show all entries when show more is pressed
    setShowAll(true); // Disable show more button and related effects
  };

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth < 768) {
        return 6; // For small screens
      } else if (window.innerWidth < 1024) {
        return 9; // For medium screens (md: 768px and up)
      } else {
        return 15; // For large screens (lg: 1024px and up)
      }
    };

    const handleResize = () => {
      if (!showAll) {
        setVisibleCount(getVisibleCount());
      }
    };

    handleResize(); // Initial call to display on load

    window.addEventListener("resize", handleResize); // Dynamically resize number of items displayed

    return () => {
      // Cleanup on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [showAll]);

  return (
    <div className={clsx("relative flex justify-center", className)} {...props}>
      <MasonryGrid className="gap-x-[1.25rem] space-y-[1.625rem]">
        {userTestimonials
          .slice(0, visibleCount)
          .map((userTestimonial, index) => (
            <BlurFade yOffset={0} key={index} inView>
              <TestimonialCard
                className="animate-fade-in"
                {...userTestimonial}
              />
            </BlurFade>
          ))}
      </MasonryGrid>

      {/* Gradient overlay */}
      <div
        className={clsx(
          "pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-full bg-gradient-to-t from-[#050222] from-[8%] via-transparent via-[70%] to-transparent transition-opacity duration-200",
          showAll ? "opacity-0" : "opacity-100", // Animation requires gradient div to remain in DOM
        )}
      />

      {/* Button overlay */}
      {!showAll && (
        <div className="absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center">
          <button
            className="flex-shrink-0 overflow-hidden rounded-lg border border-[#39374E] bg-gradient-to-b from-[#2C2944] to-[#1D1B36] px-[3.875rem] py-[0.75rem] font-medium text-white transition-opacity duration-200 hover:opacity-90 active:opacity-80"
            onClick={handleShowMore}
          >
            <span className="relative text-clip bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Show More
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
