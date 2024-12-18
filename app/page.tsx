"use client";
import React from "react";
import Footer from "./(home)/footer";
import Hero from "./(home)/hero";
import Faqs from "./(home)/faqs";
import Roadmap from "./(home)/roadmap";
import HeroMarquee from "@/src/components/hero-marquee";
import Features from "./(home)/features";
import FeaturesMarquee from "@/src/components/features-marquee";
import Tokenomics from "./(home)/tokenomics";
import TokenomicsMobile from "./(home)/tokenomics-mobile";

const Home: React.FC = () => {
  return (
    <main className="overflow-clip">
      <Hero />
      <div className="rotate-2 h-[100px] mt-9">
        <HeroMarquee />
      </div>
      <Features />
      <div className="-rotate-2 h-[100px] mt-9">
        <FeaturesMarquee />
      </div>
      <div className="max-lg:hidden">
        <Tokenomics />
      </div>
      <div className="lg:hidden">
        <TokenomicsMobile />
      </div>
      <Roadmap />
      <Faqs />
      <Footer />
    </main>
  );
};

export default Home;
