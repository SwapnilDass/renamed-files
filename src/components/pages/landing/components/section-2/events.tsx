import { Calendar } from "@/components/shared/icons";
import SectionContainer from "@/components/shared/sectionContainer";
import SectionHeader from "@/components/shared/sectionHeader";
import { HTMLAttributes } from "react";
import EventGallery from "./eventgallery";
import EventHighlight from "./eventhighlight";

interface EventsProps extends HTMLAttributes<HTMLElement> {}

export default function Events({ className, ...props }: EventsProps) {
  return (
    <SectionContainer className={className} {...props}>
      <SectionHeader
        badgeIcon={<Calendar />}
        title="Educative events,"
        highlight="Redesigned"
        description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
      />

      <EventGallery />
      <EventHighlight />
    </SectionContainer>
  );
}
