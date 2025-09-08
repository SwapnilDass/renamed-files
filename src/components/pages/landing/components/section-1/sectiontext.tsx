import clsx from "clsx";

interface SectionTextProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  paragraph: string;
}
export default function SectionText({
  heading,
  paragraph,
  className = "",
  ...props
}: SectionTextProps) {
  return (
    <div className={clsx("max-w-prose space-y-2", className)} {...props}>
      <h3 className="text-xl font-medium leading-tight tracking-tighter text-white md:text-2xl">
        {heading}
      </h3>
      <p className="text-base leading-relaxed text-white/70">{paragraph}</p>
    </div>
  );
}
