import SectionContainer from "@/components/shared/sectionContainer";
import SectionHeader from "@/components/shared/sectionHeader";
import { Plane } from "@/components/shared/icons";
import { HTMLAttributes } from "react";
import TestimonialGrid from "./testimonialgrid";

interface TestimonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testimonials({
  className,
  ...props
}: TestimonialsProps) {
  return (
    <SectionContainer className={className} {...props}>
      <SectionHeader
        badgeIcon={<Plane />}
        title="Bringing students together,"
        highlight="One step at a time."
        description="Building the future of learning by making it accessible to students worldwide."
      />

      {/* User reviews/testimonials */}
      <TestimonialGrid />
    </SectionContainer>
  );
}
