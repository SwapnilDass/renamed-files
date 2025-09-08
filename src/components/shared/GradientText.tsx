import { ReactNode, HTMLAttributes } from "react";

type GradientDirection = "to bottom" | "to top" | "to right" | "to left";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  startColor?: string;
  endColor?: string;
  direction?: GradientDirection;
  startPoint?: number;
  endPoint?: number;
}

export default function GradientText({
  children,
  className,
  startColor = "#ED066B",
  endColor = "#FFFFFF",
  direction = "to bottom",
  startPoint = 20,
  endPoint = 92,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        // Use inline styles since tailwind doesn't support dynamic class names
        background: `linear-gradient(${direction}, ${startColor} ${startPoint}%, ${endColor} ${endPoint}%)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      {...props}
    >
      {children}
    </span>
  );
}
