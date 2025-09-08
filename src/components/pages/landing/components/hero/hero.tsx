import BlurFade from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import Navbar from "@/components/ui/navbar";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

function MainContent() {
  return (
    <div className="-mt-2 flex flex-col items-center justify-center gap-y-6 text-center">
      <BlurFade delay={0.5} inView>
        <h1
          className="text-center text-3xl font-medium max-[400px]:text-[7.5vw] max-[400px]:leading-[9vw] min-[500px]:text-4xl min-[650px]:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            background:
              "linear-gradient(0deg, #FFF -4.78%, rgba(255, 255, 255, 0.00) 223.03%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Millions of STEM Students. <br /> One Platform.
        </h1>
      </BlurFade>

      <BlurFade delay={0.75} inView>
        <p
          className="mx-auto w-[90vw] max-w-[950px] text-sm font-medium max-[400px]:w-[95vw] max-[400px]:text-[.775rem] md:w-[80vw] md:text-base lg:text-[1.25em] lg:text-lg"
          style={{
            background:
              "linear-gradient(180deg, #EAEAEA 0%, rgba(234, 234, 234, 0.00) 321.67%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Connect with millions of STEM students worldwide on Codeva! Learn,
          share, and collaborate on coding, math, physics, and more — join
          competitions, host events, create projects, and make friends globally.
        </p>
      </BlurFade>

      <div
        className="flex flex-row items-center justify-center"
        onClick={() => {
          window.location.href = "";
        }}
      >
        <BlurFade delay={1} inView>
          <span
            className="rounded-full"
            onClick={() => {
              window.location.href = "https://www.instagram.com/codeva.cs/";
            }}
          >
            <ShinyButton className="group rounded-full border border-solid border-[rgba(255,255,255,.3)] bg-black px-6 py-2 text-sm max-[400px]:text-xs lg:text-base min-[1350px]:px-8 min-[1350px]:py-4">
              <span
                className="transition-all duration-300 ease-in-out"
                style={{
                  marginRight: ".5rem",
                }}
              >
                ✨
              </span>

              <span
                className="bg-[radial-gradient(67.93%_101.18%_at_44.51%_75%,#ED066B_0%,rgba(249,236,225,0.9)_100%)] bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:ml-3"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Keep Track of the Progress.
              </span>
            </ShinyButton>
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="#5F2BAF"
              colorTo="#ED066B"
            />
          </span>
        </BlurFade>
      </div>
    </div>
  );
}
function Background() {
  return (
    <DotPattern
      className={cn(
        // First mask: radial (center bright → edges transparent)
        "[mask-image:radial-gradient(65rem_circle_at_center,white,rgba(0,0,0,0)_10%)]",

        // Second mask: horizontal fade (sides transparent)
        "[mask-image:linear-gradient(to_right,transparent,white_50%,white_50%,transparent)]",

        // Combine the two masks together
        "[mask-composite:intersect] [mask-position:center] [mask-repeat:no-repeat]",

        "z-0",
      )}
    />
  );
}
export default function Hero() {
  return (
    <div className="overflow-hidden bg-inherit px-4 pt-4">
      <section className="relative flex h-fit min-h-screen flex-col items-center justify-center gap-y-16 overflow-hidden rounded-xl pb-28 pt-8 [background:radial-gradient(circle_at_50%_10%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.73)_50%,rgba(81,21,140,1)_100%)] max-[450px]:min-h-[100vh] max-[400px]:gap-y-16 sm:pb-32 md:gap-y-24 md:shadow-xl lg:pb-36">
        <div className="flex w-full justify-center max-md:-translate-y-14">
          <Navbar />
        </div>

        <MainContent />

        <Background />
      </section>
    </div>
  );
}
