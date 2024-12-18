import React from "react";
import logo from "@assets/images/logo.svg";
import Image from "next/image";
import x from "@assets/images/x.svg";
import telegram from "@assets/images/telegram.svg";
import etherscan from "@assets/images/etherscan.svg";
import dextool from "@assets/images/dextool.svg";
import { motion } from "framer-motion";
import uri from "@/src/constants/external-links";

const Footer = () => {
  return (
    <div className="sm:px-10 pt-20 pb-5">
      <div className="w-full min-h-[135px] bg-[#1D0A3980] border border-[#595A5A99] footer-div-radius flex items-center max-lg:py-10">
        <div className="container flex items-center justify-between max-lg:flex-col max-lg:gap-10">
          <motion.h5
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", damping: 13 }}
            viewport={{ once: true }}
            className="text-white text-base font-normal uppercase max-sm:text-center max-sm:text-xs"
          >
            © Blockverse {new Date().getFullYear()}. All rights reserved.
          </motion.h5>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", damping: 13 }}
            viewport={{ once: true }}
          >
            <Image src={logo} alt="logo" />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", damping: 13 }}
            viewport={{ once: true }}
            className="flex items-center gap-[38px]"
          >
            <Image
              onClick={() => window.open(uri.TWITTER)}
              src={x}
              alt="x"
              className="cursor-pointer"
            />
            <Image
              onClick={() => window.open(uri.TG)}
              src={telegram}
              alt="telegram"
              className="cursor-pointer"
            />
            <Image
              onClick={() => window.open(uri.ETHERSCAN)}
              src={etherscan}
              alt="etherscan"
              className="cursor-pointer"
            />
            <Image
              onClick={() => window.open(uri.DEXTOOL)}
              src={dextool}
              alt="dextools"
              className="cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
