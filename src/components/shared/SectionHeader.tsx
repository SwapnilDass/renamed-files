import clsx from "clsx";
import { HTMLAttributes } from "react";
import SectionBadge from "./sectionbadge";
import GradientText from "./gradienttext";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  badgeIcon: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badgeIcon,
  title,
  highlight,
  description,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <header
      className={clsx(
        "mb-10 flex h-fit gap-8 sm:mb-12 md:mb-14 md:gap-10 lg:mb-16 lg:gap-12",
        className,
      )}
      {...props}
    >
      <SectionBadge icon={badgeIcon} className="ml-1 hidden sm:block lg:ml-2" />

      {/* Title and description */}
      <div className="flex h-full flex-col justify-between gap-y-6 sm:gap-y-3">
        <div className="flex items-center gap-6">
          <SectionBadge icon={badgeIcon} className="sm:hidden" />
          <h2 className="text-lg font-medium sm:text-xl md:text-[1.45rem] lg:text-[1.7rem]">
            {title} <GradientText>{highlight}</GradientText>
          </h2>
        </div>

        <p className="text-[0.925rem] font-normal text-white/70 sm:text-base md:text-[1.1rem] lg:text-[1.2rem]">
          {description}
        </p>
      </div>
    </header>
  );
}
