import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
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
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div id="features" className="pt-20">
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
            FEATURES
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
          className="grid xl:grid-cols-4 md:grid-cols-2 xl:grid-rows-4 gap-4 max-[400px]:gap-0 mt-10"
        >
          {/* one  */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-1 xl:row-start-2 relative w-fit group max-xl:mx-auto "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M353.47 5V403.88C353.47 406.365 351.455 408.38 348.97 408.38H5.00001C2.51473 408.38 0.5 406.365 0.5 403.88V38.4035C0.5 37.3 0.90542 36.235 1.6392 35.4109L31.382 2.00751C32.2359 1.04853 33.4587 0.5 34.7428 0.5H348.97C351.455 0.5 353.47 2.51472 353.47 5Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7 transition-all duration-300">
              <h4 className="text-white text-[18.89px] font-medium ">
                Smart Contracts
              </h4>
              <p className="text-white text-base font-medium ">
                //Lorem ipsum dolor sit
              </p>
              <p className="text-white text-sm ">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="103"
                viewBox="0 0 67 103"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M65.9906 30.6984L46.7514 19.6182L1.31921 42.9689M65.9906 30.6984V74.9771L20.2754 101.227L1.31921 90.3179V42.9689M65.9906 30.6984L20.5583 54.0491L1.31921 42.9689M20.2145 53.8995L1.00001 43.2598L1 90.3835L20.2143 101.496L20.2145 53.8995ZM19.636 47.3634C17.2859 47.3634 15.3813 45.4328 15.3813 43.0519V30.0448C15.3813 18.9058 21.2946 8.52746 30.8132 2.95796C35.2764 0.347345 40.6054 0.347345 45.0687 2.95796C49.5313 5.5692 52.1962 10.2461 52.1962 15.4686V26.4907C52.1962 28.8722 50.291 30.8022 47.9415 30.8022C45.592 30.8022 43.6869 28.8722 43.6869 26.4907V15.4686C43.6869 13.3638 42.6131 11.4784 40.814 10.4257C39.0149 9.373 36.8668 9.37366 35.0678 10.4257C28.173 14.4592 23.89 21.9771 23.89 30.0448V43.0519C23.89 45.4328 21.9855 47.3634 19.636 47.3634Z"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* two  */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-2 xl:row-start-1 relative w-fit group max-xl:mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M322.588 2.00751C321.734 1.04853 320.511 0.5 319.227 0.5H4.99997C2.51471 0.5 0.499969 2.51472 0.499969 5V403.88C0.499969 406.365 2.51471 408.38 4.99997 408.38H348.97C351.455 408.38 353.47 406.365 353.47 403.88V38.4035C353.47 37.3 353.065 36.235 352.331 35.4109L322.588 2.00751Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7">
              <h4 className="text-white text-[18.89px] font-medium">
                Smart Contracts
              </h4>
              <p className="text-white text-sm font-medium">
                //Lorem ipsum dolor sit{" "}
              </p>
              <p className="text-white text-xs">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="90"
                viewBox="0 0 103 90"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M40.326 7.16185C40.326 7.92737 40.5983 8.70023 41.1522 9.43863C41.708 10.1796 42.5346 10.8679 43.5987 11.4555C44.6619 12.0426 45.9322 12.5125 47.3389 12.8342C48.7452 13.1558 50.2552 13.3219 51.7819 13.3218C54.8505 13.3217 57.7766 12.6517 59.9249 11.4767C62.0821 10.2968 63.2092 8.74969 63.2358 7.21759L63.703 7.22164L63.2369 6.98025L63.2144 6.78586C63.0425 5.30273 61.8392 3.83363 59.7009 2.726C57.5719 1.62319 54.7404 1.00017 51.7819 1C48.8224 0.999907 45.9898 1.62309 43.8603 2.72637C41.7215 3.83448 40.5183 5.30422 40.3473 6.78781L40.3249 6.98237L39.9801 7.1609L40.326 7.16185ZM40.326 7.16185C40.326 7.16156 40.326 7.16214 40.326 7.16185ZM39.59 7.36297V13.3724C39.5911 15.2203 40.9822 16.8986 43.2513 18.0906C45.5331 19.2893 48.6018 19.952 51.7819 19.9519C54.9617 19.9517 58.0299 19.2888 60.3111 18.0902C62.5798 16.8982 63.9706 15.2203 63.9717 13.3726V7.3608L77.2641 14.2448H77.3539C80.311 14.2452 83.1416 14.8681 85.27 15.9704C86.3541 16.5318 87.3292 17.1375 88.0527 17.7942C88.7784 18.4533 89.2148 19.1306 89.2965 19.8329L89.3186 20.0204L101.283 26.6625L51.7819 52.3011L2.30334 26.6738L14.7573 20.2251L14.7799 20.0306C14.9518 18.5475 16.1552 17.0784 18.2934 15.9708C20.4223 14.868 23.2538 14.245 26.2124 14.2448H26.302L39.59 7.36297ZM50.6163 89.0794L1 63.3818V28.631L50.6163 54.3285V89.0794ZM52.9475 89.0794V54.3285L102.564 28.631V63.3818L52.9475 89.0794ZM63.857 33.4139C63.857 34.9703 62.6351 36.4703 60.4543 37.603C58.2917 38.7263 55.2786 39.432 51.9303 39.432C48.582 39.432 45.5688 38.7263 43.4063 37.603C41.2255 36.4703 40.0037 34.9703 40.0037 33.4139C40.0037 31.8576 41.2255 30.3575 43.4063 29.2248C45.5688 28.1015 48.582 27.3958 51.9303 27.3958C55.2786 27.3958 58.2917 28.1015 60.4543 29.2248C62.6351 30.3575 63.857 31.8576 63.857 33.4139ZM89.2944 20.6421C89.2944 22.1985 88.0727 23.6985 85.8912 24.8313C83.729 25.9545 80.7159 26.6603 77.3672 26.6603C74.0192 26.6603 71.0061 25.9545 68.8435 24.8313C66.6628 23.6985 65.4409 22.1985 65.4409 20.6421C65.4409 19.0858 66.6628 17.5858 68.8435 16.4531C71.0061 15.3297 74.0192 14.624 77.3672 14.624C80.7159 14.624 83.729 15.3297 85.8912 16.4531C88.0727 17.5858 89.2944 19.0858 89.2944 20.6421ZM38.4199 20.6421C38.4199 22.1985 37.1981 23.6985 35.0173 24.8313C32.8547 25.9545 29.8416 26.6603 26.4933 26.6603C23.145 26.6603 20.1318 25.9545 17.9693 24.8313C15.7885 23.6985 14.5667 22.1985 14.5667 20.6421C14.5667 19.0858 15.7885 17.5858 17.9693 16.4531C20.1318 15.3297 23.145 14.624 26.4933 14.624C29.8416 14.624 32.8547 15.3297 35.0173 16.4531C37.1981 17.5858 38.4199 19.0858 38.4199 20.6421Z"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* three  */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-2 xl:row-start-3 relative w-fit group max-xl:mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M34.7428 0.5H348.97C351.455 0.5 353.47 2.51472 353.47 5V365.788C353.47 367.056 352.935 368.265 351.997 369.118L310.094 407.21C309.266 407.963 308.186 408.38 307.067 408.38H5C2.51472 408.38 0.5 406.365 0.5 403.88V38.4035C0.5 37.3 0.90542 36.235 1.6392 35.4109L31.382 2.00751C32.2359 1.04853 33.4587 0.5 34.7428 0.5Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7">
              <h4 className="text-white text-[18.89px] font-medium">
                Smart Contracts
              </h4>
              <p className="text-white text-sm font-medium">
                //Lorem ipsum dolor sit{" "}
              </p>
              <p className="text-white text-xs">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
                height="101"
                viewBox="0 0 85 101"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M63.4868 95.2207L72.1 92.3641L75.2935 90.9744L75.2704 90.9752C79.1373 88.4059 81.4981 83.5144 81.8349 76.9829L83.8297 38.0699C83.9163 36.4219 82.9082 34.3012 81.4579 33.0765L52.0049 8.21484L23.1775 1.06769C22.6421 0.932514 22.1775 1.00397 21.8226 1.2447L21.8108 1.23916L11.5515 5.39572M72.5784 42.0205C72.615 41.3201 72.4178 40.4757 72.0244 39.6482C71.6328 38.8242 71.0664 38.0583 70.4135 37.5067L41.0821 12.7358L12.3596 5.61033C11.8313 5.47893 11.4983 5.62107 11.2915 5.86922C11.0565 6.15123 10.8877 6.68738 10.981 7.50019L15.837 50.1731C16.9396 59.842 21.7093 70.6018 28.7088 79.1337L44.6385 98.5564L59.6736 96.2327C66.0159 95.2545 70.1382 89.7067 70.5889 80.9326L72.5784 42.0205ZM25.5471 29.6151L48.8951 49.7841C50.0439 50.7745 50.8412 52.492 50.7779 53.8297L49.2284 85.3569C48.8735 92.595 45.5191 97.3614 40.1932 98.1963L28.0182 100.109L15.2152 84.1497C9.61459 77.1682 5.78929 68.3655 4.89524 60.4244L1.02297 25.8465C0.861272 24.3819 1.56757 23.5122 2.69152 23.7959L25.5352 29.6094L25.5471 29.6151Z"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* four */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-3 xl:row-start-2 relative w-fit group max-xl:mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M353.47 5V403.88C353.47 406.365 351.455 408.38 348.97 408.38H5.00001C2.51473 408.38 0.5 406.365 0.5 403.88V38.4035C0.5 37.3 0.90542 36.235 1.6392 35.4109L31.382 2.00751C32.2359 1.04853 33.4587 0.5 34.7428 0.5H348.97C351.455 0.5 353.47 2.51472 353.47 5Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7">
              <h4 className="text-white text-[18.89px] font-medium">
                Smart Contracts
              </h4>
              <p className="text-white text-sm font-medium">
                //Lorem ipsum dolor sit{" "}
              </p>
              <p className="text-white text-xs">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="98"
                viewBox="0 0 103 98"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M85.6011 48.0073L86.0471 67.1249L86.1954 66.3062M85.6011 48.0073H11.4041L11.9988 58.496L12.2961 64.447L12.4448 67.1249M85.6011 48.0073L87.9797 36.4851M56.0011 1L1 13.9097L2.07693 32.0841L17.1241 37.4193L46.6578 47.936L87.8611 36.0722L87.8671 36.0706L89.497 35.626L89.5022 35.6243L101.821 32.0717L101.605 13.974L56.0011 1ZM56.0011 1L2.1377 13.6426L45.9135 28.0034L100.405 13.6326L56.0011 1ZM88.2348 35.8025L85.8578 47.8378M11.7249 47.8378L17.296 37.0195M3.55811 61.1624L12.1547 55.1448M85.657 48.2676L102.537 61.3877M12.0378 67.5547L11.8818 64.7447L3.99121 61.6L4.97746 78.5872L48.7409 97.238L102.415 78.5739L102.204 61.5405L86.5723 66.6358L86.4056 67.5547H12.0378ZM47.9226 78.2721L21.2122 67.5544H80.8815L47.9226 78.2721Z"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* five  */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-4 xl:row-start-1 relative w-fit group max-xl:mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M322.588 2.00751C321.734 1.04853 320.511 0.5 319.227 0.5H4.99997C2.51471 0.5 0.499969 2.51472 0.499969 5V403.88C0.499969 406.365 2.51471 408.38 4.99997 408.38H348.97C351.455 408.38 353.47 406.365 353.47 403.88V38.4035C353.47 37.3 353.065 36.235 352.331 35.4109L322.588 2.00751Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7">
              <h4 className="text-white text-[18.89px] font-medium">
                Smart Contracts
              </h4>
              <p className="text-white text-sm font-medium">
                //Lorem ipsum dolor sit{" "}
              </p>
              <p className="text-white text-xs">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="104"
                viewBox="0 0 90 104"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M45.0611 103.301L1 77.7219V26.5657M45.0611 103.301V52.1438M45.0611 103.301L89.1344 77.7219V26.5657M1 26.5657L45.0611 52.1438M1 26.5657L45.0611 1L89.1344 26.5657M45.0611 52.1438L89.1344 26.5657"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* six */}

          <motion.div
            variants={itemVariants}
            className="xl:row-span-2 xl:col-start-4 xl:row-start-3 relative w-fit group max-xl:mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="409"
              viewBox="0 0 354 409"
              fill="none"
              className="transition-all duration-300 max-2xl:w-[300px] max-xl:w-[354px] max-[400px]:w-[300px]"
            >
              <path
                d="M34.7428 0.5H348.97C351.455 0.5 353.47 2.51472 353.47 5V365.788C353.47 367.056 352.935 368.265 351.997 369.118L310.094 407.21C309.266 407.963 308.186 408.38 307.067 408.38H5C2.51472 408.38 0.5 406.365 0.5 403.88V38.4035C0.5 37.3 0.90542 36.235 1.6392 35.4109L31.382 2.00751C32.2359 1.04853 33.4587 0.5 34.7428 0.5Z"
                fill="#0D0C0F"
                stroke="#595A5A"
                className="group-hover:fill-[#6B20CD] group-hover:stroke-[#ffffffaf] transition-all duration-300"
              />
            </svg>
            <div className="absolute flex flex-col 2xl:gap-y-6 xl:gap-y-3 gap-y-6 2xl:top-7 top-12 left-7">
              <h4 className="text-white text-[18.89px] font-medium">
                Smart Contracts
              </h4>
              <p className="text-white text-sm font-medium">
                //Lorem ipsum dolor sit{" "}
              </p>
              <p className="text-white text-xs">
                Leverage self-executing smart contracts for secure and automated
                transactions, removing intermediaries and enhancing efficiency
              </p>
            </div>
            <div className="absolute 2xl:bottom-6 bottom-10 right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="103"
                viewBox="0 0 89 103"
                fill="none"
                className="transition-all duration-300"
              >
                <path
                  d="M44.3323 52.0278V102.119M44.685 52.206L1 26.8123V77.0145L44.685 102.352L88.3699 77.0145V26.8123L44.685 52.206ZM77.6924 20.2976L44.6844 39.5953L11.6763 20.2976L44.6844 1L77.6924 20.2976Z"
                  stroke="#868587"
                  stroke-width="0.758252"
                  className=" group-hover:stroke-[#fff] transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
