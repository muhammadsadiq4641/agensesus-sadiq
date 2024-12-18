"use client";
import { faqData } from "@/src/utils/data";
import React, { useState } from "react";
import faqimg from "@assets/images/faqimg.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import faqimg2 from "@assets/images/faqimg2.png";
import faqnumimg from "@assets/images/faqnumimg.png";
import faqnumimg2 from "@assets/images/faqnumimg2.png";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div id="faqs" className="pt-20 pb-20">
      <div className="container">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", damping: 14 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="15"
            viewBox="0 0 48 15"
            fill="none"
          >
            <path
              d="M38.2644 0.736872L38.9939 0.736532L39.3589 0.104279L38.6294 0.104619L38.2644 0.736872ZM33.454 0.736307L33.8191 0.104023L33.0886 0.103797L32.7235 0.736081L33.454 0.736307ZM30.8301 13.6133L30.4651 14.2456L31.1946 14.2452L31.5597 13.613L30.8301 13.6133ZM26.0198 13.6127L25.2893 13.6125L24.9243 14.2448L25.6548 14.245L26.0198 13.6127ZM25.1441 0.738561L25.5092 0.106278L24.7786 0.106034L24.4136 0.738318L25.1441 0.738561ZM29.955 0.738115L30.6845 0.737758L31.0496 0.105504L30.3201 0.105862L29.955 0.738115ZM17.7105 13.6139L16.98 13.6137L16.6149 14.246L17.3455 14.2462L17.7105 13.6139ZM22.5208 13.6145L22.1558 14.2468L22.8853 14.2465L23.2503 13.6142L22.5208 13.6145ZM13.3401 0.738734L14.0696 0.738393L14.4347 0.106109L13.7052 0.106449L13.3401 0.738734ZM8.52977 0.738168L8.89482 0.105884L8.16433 0.105658L7.79928 0.737942L8.52977 0.738168ZM5.90591 13.6152L5.54088 14.2474L6.27037 14.2471L6.636 13.6138L5.90591 13.6152ZM1.09558 13.6146L0.365088 13.6143L3.8147e-05 14.2466L0.730527 14.2468L1.09558 13.6146ZM21.6483 0.739529L22.3778 0.739171L22.7428 0.106887L22.0133 0.107245L21.6483 0.739529ZM16.838 0.738933L17.203 0.106649L16.4725 0.106405L16.1074 0.738688L16.838 0.738933ZM14.2147 13.6149L13.8496 14.2472L14.5791 14.2468L14.9442 13.6146L14.2147 13.6149ZM9.40375 13.6154L8.67323 13.6151L8.3082 14.2474L9.0387 14.2476L9.40375 13.6154ZM41.7642 0.738221L42.1292 0.105968L41.3987 0.105741L41.0337 0.737995L41.7642 0.738221ZM46.5735 0.738232L47.304 0.738475L47.6691 0.106192L46.9386 0.105948L46.5735 0.738232ZM34.33 13.6146L33.5995 13.6144L33.2344 14.2467L33.9649 14.2469L34.33 13.6146ZM39.1399 13.6136L38.7749 14.2459L39.5054 14.2461L39.8704 13.6139L39.1399 13.6136ZM38.6294 0.104619L33.8191 0.104023L33.089 1.36859L37.8993 1.36916L38.6294 0.104619ZM31.5597 13.613L38.9939 0.736532L37.5339 0.736645L30.0997 13.6131L31.5597 13.613ZM25.6548 14.245L30.4651 14.2456L31.1952 12.981L26.3848 12.9804L25.6548 14.245ZM32.7235 0.736081L25.2893 13.6125L26.7503 13.6129L34.1845 0.736532L32.7235 0.736081ZM24.7791 1.37084L29.59 1.3704L30.3201 0.105862L25.5092 0.106278L24.7791 1.37084ZM18.441 13.6142L25.8746 0.738786L24.4136 0.738318L16.98 13.6137L18.441 13.6142ZM22.8859 12.9823L18.0755 12.9817L17.3455 14.2462L22.1558 14.2468L22.8859 12.9823ZM29.2245 0.737872L21.7903 13.6143L23.2503 13.6142L30.6845 0.737758L29.2245 0.737872ZM13.7052 0.106449L8.89482 0.105884L8.16472 1.37045L12.9751 1.37102L13.7052 0.106449ZM6.636 13.6138L14.0696 0.738393L12.6096 0.738508L5.17542 13.6149L6.636 13.6138ZM0.730527 14.2468L5.54088 14.2474L6.27154 12.9819L1.46063 12.9823L0.730527 14.2468ZM7.79928 0.737942L0.365088 13.6143L1.82607 13.6148L9.26026 0.738394L7.79928 0.737942ZM22.0133 0.107245L17.203 0.106649L16.4729 1.37122L21.2832 1.37181L22.0133 0.107245ZM14.9442 13.6146L22.3778 0.739171L20.9178 0.739284L13.4842 13.6147L14.9442 13.6146ZM9.0387 14.2476L13.8496 14.2472L14.5797 12.9827L9.7688 12.9831L9.0387 14.2476ZM16.1074 0.738688L8.67323 13.6151L10.1342 13.6156L17.5684 0.739158L16.1074 0.738688ZM41.3991 1.3705L46.2085 1.37052L46.9386 0.105948L42.1292 0.105968L41.3991 1.3705ZM35.0595 13.6143L42.4937 0.737911L41.0337 0.737995L33.5995 13.6144L35.0595 13.6143ZM39.5049 12.9814L34.695 12.9824L33.9649 14.2469L38.7749 14.2459L39.5049 12.9814ZM45.844 0.738589L38.4104 13.614L39.8704 13.6139L47.304 0.738475L45.844 0.738589Z"
              fill="white"
            />
          </svg>

          <h5 className="text-white text-center font-kusanagi text-[48px] uppercase max-sm:text-3xl">
            FAQs
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="15"
            viewBox="0 0 48 15"
            fill="none"
          >
            <path
              d="M38.2644 0.736872L38.9939 0.736532L39.3589 0.104279L38.6294 0.104619L38.2644 0.736872ZM33.454 0.736307L33.8191 0.104023L33.0886 0.103797L32.7235 0.736081L33.454 0.736307ZM30.8301 13.6133L30.4651 14.2456L31.1946 14.2452L31.5597 13.613L30.8301 13.6133ZM26.0198 13.6127L25.2893 13.6125L24.9243 14.2448L25.6548 14.245L26.0198 13.6127ZM25.1441 0.738561L25.5092 0.106278L24.7786 0.106034L24.4136 0.738318L25.1441 0.738561ZM29.955 0.738115L30.6845 0.737758L31.0496 0.105504L30.3201 0.105862L29.955 0.738115ZM17.7105 13.6139L16.98 13.6137L16.6149 14.246L17.3455 14.2462L17.7105 13.6139ZM22.5208 13.6145L22.1558 14.2468L22.8853 14.2465L23.2503 13.6142L22.5208 13.6145ZM13.3401 0.738734L14.0696 0.738393L14.4347 0.106109L13.7052 0.106449L13.3401 0.738734ZM8.52977 0.738168L8.89482 0.105884L8.16433 0.105658L7.79928 0.737942L8.52977 0.738168ZM5.90591 13.6152L5.54088 14.2474L6.27037 14.2471L6.636 13.6138L5.90591 13.6152ZM1.09558 13.6146L0.365088 13.6143L3.8147e-05 14.2466L0.730527 14.2468L1.09558 13.6146ZM21.6483 0.739529L22.3778 0.739171L22.7428 0.106887L22.0133 0.107245L21.6483 0.739529ZM16.838 0.738933L17.203 0.106649L16.4725 0.106405L16.1074 0.738688L16.838 0.738933ZM14.2147 13.6149L13.8496 14.2472L14.5791 14.2468L14.9442 13.6146L14.2147 13.6149ZM9.40375 13.6154L8.67323 13.6151L8.3082 14.2474L9.0387 14.2476L9.40375 13.6154ZM41.7642 0.738221L42.1292 0.105968L41.3987 0.105741L41.0337 0.737995L41.7642 0.738221ZM46.5735 0.738232L47.304 0.738475L47.6691 0.106192L46.9386 0.105948L46.5735 0.738232ZM34.33 13.6146L33.5995 13.6144L33.2344 14.2467L33.9649 14.2469L34.33 13.6146ZM39.1399 13.6136L38.7749 14.2459L39.5054 14.2461L39.8704 13.6139L39.1399 13.6136ZM38.6294 0.104619L33.8191 0.104023L33.089 1.36859L37.8993 1.36916L38.6294 0.104619ZM31.5597 13.613L38.9939 0.736532L37.5339 0.736645L30.0997 13.6131L31.5597 13.613ZM25.6548 14.245L30.4651 14.2456L31.1952 12.981L26.3848 12.9804L25.6548 14.245ZM32.7235 0.736081L25.2893 13.6125L26.7503 13.6129L34.1845 0.736532L32.7235 0.736081ZM24.7791 1.37084L29.59 1.3704L30.3201 0.105862L25.5092 0.106278L24.7791 1.37084ZM18.441 13.6142L25.8746 0.738786L24.4136 0.738318L16.98 13.6137L18.441 13.6142ZM22.8859 12.9823L18.0755 12.9817L17.3455 14.2462L22.1558 14.2468L22.8859 12.9823ZM29.2245 0.737872L21.7903 13.6143L23.2503 13.6142L30.6845 0.737758L29.2245 0.737872ZM13.7052 0.106449L8.89482 0.105884L8.16472 1.37045L12.9751 1.37102L13.7052 0.106449ZM6.636 13.6138L14.0696 0.738393L12.6096 0.738508L5.17542 13.6149L6.636 13.6138ZM0.730527 14.2468L5.54088 14.2474L6.27154 12.9819L1.46063 12.9823L0.730527 14.2468ZM7.79928 0.737942L0.365088 13.6143L1.82607 13.6148L9.26026 0.738394L7.79928 0.737942ZM22.0133 0.107245L17.203 0.106649L16.4729 1.37122L21.2832 1.37181L22.0133 0.107245ZM14.9442 13.6146L22.3778 0.739171L20.9178 0.739284L13.4842 13.6147L14.9442 13.6146ZM9.0387 14.2476L13.8496 14.2472L14.5797 12.9827L9.7688 12.9831L9.0387 14.2476ZM16.1074 0.738688L8.67323 13.6151L10.1342 13.6156L17.5684 0.739158L16.1074 0.738688ZM41.3991 1.3705L46.2085 1.37052L46.9386 0.105948L42.1292 0.105968L41.3991 1.3705ZM35.0595 13.6143L42.4937 0.737911L41.0337 0.737995L33.5995 13.6144L35.0595 13.6143ZM39.5049 12.9814L34.695 12.9824L33.9649 14.2469L38.7749 14.2459L39.5049 12.9814ZM45.844 0.738589L38.4104 13.614L39.8704 13.6139L47.304 0.738475L45.844 0.738589Z"
              fill="#6B20CD"
            />
          </svg>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mt-10 max-sm:mt-5"
        >
          {faqData.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className={`flex ${
                index === 1 || index === 3 ? "justify-end lg:mr-20" : "lg:ml-20"
              }`}
            >
              <div
                onClick={() => handleToggle(index)}
                className="relative w-[743px] min-h-[100px] cursor-pointer mt-8 max-sm:mt-5"
              >
                <Image
                  src={activeIndex === index ? faqimg2 : faqimg}
                  alt="faqimg"
                  className="absolute w-full h-full inset-0"
                />
                <div className="relative">
                  <motion.div
                    transition={{ duration: 1 }}
                    className="flex items-center gap-7 pt-[.9rem]"
                  >
                    <div className="relative w-[121px] h-[71px] flex justify-center items-center">
                      <Image
                        src={activeIndex === index ? faqnumimg2 : faqnumimg}
                        alt="faqnumimg"
                        className="absolute w-full h-full inset-0"
                      />
                      <div className="relative">
                        <h5
                          className={`text-white text-center text-[27px] font-normal
                             uppercase font-kusanagi  ${
                               activeIndex === index
                                 ? "opacity-100"
                                 : "opacity-50"
                             } `}
                        >
                          Q{index + 1}
                        </h5>
                      </div>
                    </div>
                    <h5 className="text-white text-2xl font-bold uppercase max-sm:text-base ">
                      {item.question}
                    </h5>
                  </motion.div>
                  <AnimatePresence mode="wait" initial={false}>
                    {activeIndex === index && (
                      <motion.h5
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-xl font-normal uppercase px-10 mt-5 pb-7 max-sm:text-base max-sm:px-5"
                      >
                        {item.answer}
                      </motion.h5>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faqs;