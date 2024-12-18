import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import HeroMarqueeImg from "@assets/images/hero-marquee-img.png";

const HeroMarquee = () => (
  <Marquee className="bg-[#6B20CD]">
    <div className="flex items-center gap-4 py-2">
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
      <Image src={HeroMarqueeImg} alt="HeroMarqueeImg" />
    </div>
  </Marquee>
);

export default HeroMarquee;
