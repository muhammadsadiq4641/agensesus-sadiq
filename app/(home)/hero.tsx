import Navbar from "@/src/components/navbar";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BtnPurpleBg from "@assets/images/button-purple-rectangle.png";
import miniLogo from "@assets/images/mini-logo.png";
import Lines from "@assets/images/lines.png";
import HeroLearnBg from "@assets/images/hero-learn-bg.png";
import BtnRectangle from "@assets/images/button-rectangle.png";
import { IoMdArrowDropup } from "react-icons/io";
import CaBg from "@assets/images/ca-bg.png";
import SocialsBg from "@assets/images/socials-bg.png";
import xIcon from "@assets/images/x-icon.svg";
import TelegramIcon from "@assets/images/telegram-icon.svg";
import EtherscanIcon from "@assets/images/etherscan-icon.svg";
import DextoolIcon from "@assets/images/dextool-icon.svg";
import uri from "@/src/constants/external-links";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div id="hero" className="min-h-screen relative pb-7 pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className=" w-full h-full absolute inset-0 -z-30"
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            className=" w-full h-full object-cover "
          >
            <source src={"/assets/videos/hero-video.mp4"} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="container"
        >
          <Navbar />
          <div className="flex items-end justify-between mt-10">
            <motion.div
              variants={itemVariants}
              className="relative w-fit cursor-pointer "
            >
              <Image src={BtnPurpleBg} alt="BtnRectangle" />
              <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                <Image src={miniLogo} alt="miniLogo" className="-ms-3" />
                <h4 className="text-[13.7px] text-[#FFFFFF] whitespace-nowrap ">
                  BlockVerse
                </h4>
              </div>
            </motion.div>
            <Image src={Lines} alt="Lines" />
          </div>
          <motion.h2
            variants={itemVariants}
            className="2xl:text-[64px] md:text-5xl text-3xl max-[480px]:text-2xl max-[390px]:text-[22px] max-[374px]:text-xl text-white font-kusanagi 2xl:leading-[86px] md:leading-[64px] leading-[40px] mt-4"
          >
            Where Intelligence Meets
            <span className="block text-[#6B20CD]">Decentralization</span>
          </motion.h2>

          {/* main paren */}

          <div className="lg:flex items-end gap-x-10 mt-10">
            {/* learn more parent */}

            <div className="flex flex-col gap-y-10 w-fit">
              {/* learn more */}

              <motion.div variants={itemVariants} className="relative">
                <Image
                  src={HeroLearnBg}
                  alt="Hero learn bg"
                  className="max-[550px]:h-[220px]"
                />
                <div className="absolute left-10 bottom-5 max-[400px]:bottom-3">
                  <div className="relative">
                    <IoMdArrowDropup className="absolute -top-5 -left-6 -rotate-45 text-white text-xl" />
                    <h4 className="text-[#FFFFFF] text-lg max-[550px]:text-base md:w-[528px] uppercase md:mb-10 max-sm:pr-4 ">
                      Unlock the full potential of blockchain with AI-driven
                      solutions that ensure performance, security, and
                      interoperability.
                    </h4>
                  </div>
                  <div className="ms-auto relative w-fit cursor-pointer max-md:px-5">
                    <Image src={BtnRectangle} alt="BtnRectangle" />
                    <h4 className="text-[13.7px] text-[#FFFFFF] whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      LEARN MORE
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* CA  */}

              <motion.div variants={itemVariants} className=" relative w-full">
                <Image
                  src={CaBg}
                  alt="CA background image"
                  className="max-[525px]:hidden"
                />
                <div className="min-[525px]:absolute CA-div max-[525px]:border-[1px] border-[#595A5A] max-[525px]:px-4 min-[525px]:left-4 top-1/2 min-[525px]:-translate-y-1/2 flex items-center gap-2">
                  <h4 className="text-[#6B20CD] font-bold text-xl max-[630px]:text-base">
                    CA:
                  </h4>
                  <p className="text-white text-xl max-[630px]:text-base break-all">
                    0x0000000000000000000000000000000000000000
                  </p>
                </div>
              </motion.div>

              {/* Lines  */}
              <motion.div variants={itemVariants} className="md:w-[643px]">
                <Image src={Lines} alt="Lines" className=" ms-auto" />
              </motion.div>
            </div>

            {/* socials  */}

            <motion.div
              variants={itemVariants}
              className="relative w-[230px] max-lg:mt-10"
            >
              <Image src={SocialsBg} alt="Socials background image" />
              <div className="space-y-8 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2">
                <Image
                  onClick={() => window.open(uri.TWITTER)}
                  src={xIcon}
                  alt="X Icon"
                  className="cursor-pointer"
                />
                <Image
                  onClick={() => window.open(uri.TG)}
                  src={TelegramIcon}
                  alt="telegram Icon"
                  className="cursor-pointer"
                />
                <Image
                  onClick={() => window.open(uri.ETHERSCAN)}
                  src={EtherscanIcon}
                  alt="etherscan Icon"
                  className="cursor-pointer"
                />
                <Image
                  onClick={() => window.open(uri.DEXTOOL)}
                  src={DextoolIcon}
                  alt="dextool Icon"
                  className="cursor-pointer"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
