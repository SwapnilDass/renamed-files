import { HTMLAttributes } from "react";
import clsx from "clsx";

interface SectionBadge extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

export default function SectionBadge({
  icon,
  className,
  ...props
}: SectionBadge) {
  return (
    <div
      className={clsx(
        "h-14 w-14 flex-shrink-0 rounded-[10px] bg-[#ED066B] p-3.5 sm:h-16 sm:w-16 sm:p-[18px]",
        className,
      )}
      {...props}
    >
      {icon}
    </div>
  );
}
