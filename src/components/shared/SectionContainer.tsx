import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

/**
 * SectionContainer
 *
 * A layout wrapper component designed specifically for sections of the landing page.
 *
 * Usage:
 * - Use this component only for structuring and styling sections on the landing page.
 * - Do not use SectionContainer for dashboard, auth, or any other pages.
 *
 * Props:
 * - children: ReactNode – The content to render inside the section.
 * - className: string (optional) – Additional Tailwind or custom classes.
 * - ...props: Other valid HTML <section> attributes.
 */
export default function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-inherit", className)}
      {...props}
    >
      <div className="w-[87%] max-w-fit sm:w-[80%]">{children}</div>
    </section>
  );
}
