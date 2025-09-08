import { HTMLAttributes } from "react";
import clsx from "clsx";
import BlurFade from "@/components/ui/blur-fade";
import MasonryGrid from "@/components/shared/masonryGrid";

interface EventGallery extends HTMLAttributes<HTMLDivElement> {}

export default function EventGallery({ className, ...props }: EventGallery) {
  const galleryImages = [
    // Column 1
    {
      src: "/landing/feature1.png",
      alt: "Feature 1",
    },
    {
      src: "/landing/feature4.png",
      alt: "Feature 4",
    },
    {
      src: "/landing/feature7.png",
      alt: "Feature 7",
    },

    // Column 2
    {
      src: "/landing/feature2.png",
      alt: "Feature 2",
    },
    {
      src: "/landing/feature5.png",
      alt: "Feature 5",
    },
    {
      src: "/landing/feature8.png",
      alt: "Feature 8",
    },

    // Column 3
    {
      src: "/landing/feature3.png",
      alt: "Feature 3",
    },
    {
      src: "/landing/feature6.png",
      alt: "Feature 6",
    },
    {
      src: "/landing/feature9.png",
      alt: "Feature 9",
    },
  ];

  return (
    <div className={clsx("flex justify-center", className)} {...props}>
      <MasonryGrid className="gap-x-[1.25rem] space-y-[1.25rem]">
        {galleryImages.map((galleryImage, index) => (
          <BlurFade yOffset={0} key={index} inView>
            <img className="w-full max-w-lg" {...galleryImage} />
          </BlurFade>
        ))}
      </MasonryGrid>
    </div>
  );
}
