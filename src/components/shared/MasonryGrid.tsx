import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface MasonryGridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function MasonryGrid({
  children,
  className,
  ...props
}: MasonryGridProps) {
  return (
    <div
      className={clsx(
        "h-fit w-fit columns-1 md:columns-2 lg:columns-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
