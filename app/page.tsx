import Image from "next/image";
import { BackgroundLinesDemo } from "@/components/HeroSection"; // update the path if needed
import { TimelineDemo } from "@/components/TimelineDemo";
import BentoGridSecondDemo from "@/components/ui/bento-grid-demo-2";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import ContactSection from "@/components/contact-section";

// import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="">
      <BackgroundLinesDemo />
      {/* Timeline section */}
      <TimelineDemo />
  
      <LayoutGridDemo />

      
      <BentoGridSecondDemo />

      {/* Contact section */}
      <ContactSection />

      {/* TabsDemo below BentoGridSecondDemo */}
    </div>
  );
}