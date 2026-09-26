import React from "react";
import { DispatchWidget } from "@/components/DispatchWidget";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FleetGallery } from "@/components/sections/FleetGallery";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CoverageSection } from "@/components/sections/CoverageSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroSection />

      <section id="chamar-guincho" className="py-12 bg-slate-900 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <DispatchWidget />
        </div>
      </section>

      <ServicesSection />
      <FleetGallery />
      <WhyUsSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <CoverageSection />
    </div>
  );
};

export default Home;
