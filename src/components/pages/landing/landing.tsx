import "../../../styles/index.css";
import Hero from "./components/hero/hero";
import Learning from "./components/section-1/learning";
import Events from "./components/section-2/events";
import Testimonials from "./components/section-3/testimonials";
import FooterPage from "./components/footer/footerpage";
import Partners from "./components/partners/partners";

export default function Landing() {
  return (
    <section
      id="landing"
      className="h-[100vh] w-[100vw] bg-[#050222] text-white"
    >
      <Hero />
      <Partners />
      <Learning />
      <Events className="py-12" />
      <Testimonials className="py-12" />
      <FooterPage />
    </section>
  );
}
