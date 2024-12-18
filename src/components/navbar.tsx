import React, { useState } from "react";
import Image from "next/image";
import Logo from "@assets/images/logo.svg";
import BtnRectangle from "@assets/images/button-rectangle.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";
import Drawer from "./drawer";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", damping: 14 }}
      className="container50"
    >
      <div className="border-[1px]  border-[#595A5A] flex items-center justify-between p-5 px-7">
        <Image
          src={Logo}
          alt="Logo"
          className="max-xl:w-[160px] max-lg:w-[209px]"
        />
        <div className="flex items-center xl:gap-28 gap-20 max-lg:hidden">
          <h4
            onClick={() => scrollToSection("home")}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (01)<span className="text-[#FFFFFF] ms-2">Home</span>
          </h4>
          <div>
            <h4
              onClick={() => scrollToSection("features")}
              className="text-xl text-[#595A5A] cursor-pointer"
            >
              (02)<span className="text-[#FFFFFF] ms-2">FEATURES</span>
            </h4>
            <h4
              onClick={() => scrollToSection("tokenomics")}
              className="text-xl text-[#595A5A] cursor-pointer"
            >
              (03)<span className="text-[#FFFFFF] ms-2">TOKENOMICS</span>
            </h4>
          </div>
          <div>
            <h4
              onClick={() => scrollToSection("roadmap")}
              className="text-xl text-[#595A5A] cursor-pointer"
            >
              (04)<span className="text-[#FFFFFF] ms-2">ROADMAP</span>
            </h4>
            <h4
              onClick={() => scrollToSection("faqs")}
              className="text-xl text-[#595A5A] cursor-pointer"
            >
              (05)<span className="text-[#FFFFFF] ms-2">FAQS</span>
            </h4>
          </div>
        </div>
        <div className="relative w-fit cursor-pointer max-lg:hidden">
          <Image src={BtnRectangle} alt="BtnRectangle" />
          <h4 className="text-[13.7px] text-[#FFFFFF] whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            BUY NOW
          </h4>
        </div>
        <RiMenu3Fill
          onClick={() => setShowDrawer(true)}
          className="lg:hidden text-4xl text-white"
        />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
