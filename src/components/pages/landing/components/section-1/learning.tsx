import MasonryGrid from "@/components/shared/masonryGrid";
import SectionContainer from "@/components/shared/sectionContainer";
import SectionHeader from "@/components/shared/sectionHeader";
import { Map } from "@/components/shared/icons";
import Branding from "./branding";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Feature3 from "./feature3";
import Feature4 from "./feature4";
import Feature5 from "./feature5";

export default function Learning() {
  return (
    <SectionContainer>
      <SectionHeader
        badgeIcon={<Map />}
        title="Learn new skills"
        highlight="faster, together."
        description="A new way to gather, expand, and put to practice your skills"
      />

      <div className="space-y-[1.375rem]">
        <div className="columns-1 gap-x-[1.375rem] space-y-[1.625rem] lg:columns-2">
          <Feature1 />
          <Feature2 />
        </div>

        <MasonryGrid className="gap-x-[1.375rem] space-y-[1.625rem]">
          <Feature3 />
          <Branding />
          <Feature4 />
          <Feature5 />
        </MasonryGrid>
      </div>
    </SectionContainer>
  );
}
