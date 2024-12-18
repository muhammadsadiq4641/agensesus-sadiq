"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import BtnRectangle from "@assets/images/button-rectangle.png";

interface DrawerTypes {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ setShowDrawer }: DrawerTypes) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed flex justify-end items-center inset-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm z-[200]"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25 }}
        className="h-full bg-black border-l-2 border-[#ffffff52]  p-4 w-60 "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="text-white text-2xl cursor-pointer"
          onClick={() => setShowDrawer(false)}
        />

        <div className="flex  flex-col gap-4 mt-7">
          <h4
            onClick={() => {
              setShowDrawer(false);
              scrollToSection("home");
            }}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (01)<span className="text-[#FFFFFF] ms-2">Home</span>
          </h4>
          <h4
            onClick={() => {
              setShowDrawer(false);
              scrollToSection("features");
            }}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (02)<span className="text-[#FFFFFF] ms-2">FEATURES</span>
          </h4>
          <h4
            onClick={() => {
              setShowDrawer(false);
              scrollToSection("tokenomicsmob");
            }}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (03)<span className="text-[#FFFFFF] ms-2">TOKENOMICS</span>
          </h4>
          <h4
            onClick={() => {
              setShowDrawer(false);
              scrollToSection("roadmap");
            }}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (04)<span className="text-[#FFFFFF] ms-2">ROADMAP</span>
          </h4>
          <h4
            onClick={() => {
              setShowDrawer(false);
              scrollToSection("faqs");
            }}
            className="text-xl text-[#595A5A] cursor-pointer"
          >
            (05)<span className="text-[#FFFFFF] ms-2">FAQS</span>
          </h4>
          <div className="relative w-full cursor-pointer mt-4">
            <Image src={BtnRectangle} alt="BtnRectangle" className="w-full" />
            <h4 className="text-[13.7px] text-[#FFFFFF] whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              BUY NOW
            </h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
