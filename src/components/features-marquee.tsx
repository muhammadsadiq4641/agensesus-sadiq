import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import FeaturesMarqueeImg from "@assets/images/features-marquee-img.png";

const FeaturesMarquee = () => (
  <Marquee className="bg-[#FFFFFF]">
    <div className="flex items-center gap-4 py-2">
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
      <Image src={FeaturesMarqueeImg} alt="FeaturesMarqueeImg" />
    </div>
  </Marquee>
);

export default FeaturesMarquee;
