import React from "react";
import { CollectionData } from "../../Components/Collection Card/CollectionData";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CollectionCard from "../../Components/Collection Card/CollectionCard";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className="md:mt-[10%] mt-[20px]  text-center md:text-left">
      {/* title */}
      <div className="bBox absolute z-[-999] hidden md:block"></div>
      <div className=" ">
      <div className="pb-[20px] md:pl-[50px]">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="Poppins uppercase text-[35px] text-black md:text-white font-[700]"
        >
          our best deals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="Mont capitalize text-[20px] text-black md:text-white font-[500]"
        >
          2 chains + 2 pendants for only $149
        </motion.p>
      </div>

      {/* products */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {CollectionData.map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>

      {/* see all */}
      <div className=" flex md:justify-end justify-center  pt-[20px]">
        <div className="md:flex hidden sBox justify-center items-center  ">
          <div className="flex items-center gap-[5px] cursor-pointer text-[#fff] hover:text-[#dad9d9]">
          <span className="Poppins uppercase text-[18px] font-[500]">
            See All Our Best Deals
          </span>

          <KeyboardDoubleArrowRightIcon />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-[5px] cursor-pointer text-black p-[20px]">
          <span className="Poppins uppercase text-[18px] font-[500]">
            See All Our Best Deals
          </span>

          <KeyboardDoubleArrowRightIcon />
          </div>
      </div>
      </div>
    </div>
  );
};

export default Section3;
