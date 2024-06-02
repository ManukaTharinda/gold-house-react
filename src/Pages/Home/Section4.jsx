import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="Section4 Poppins h-[60vh] flex md:items-end  items-center  ">
      {/* text */}
      <div className="flex md:justify-between text-center md:text-left flex-col md:flex-row w-[100%] ">
        <div className="flex justify-center ">
          <motion.span
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[#202020] text-[35px] font-[700] md:pl-[50px]"
          >
            Nature's twist <br /> collection
          </motion.span>
        </div>

        {/* see all */}
        <div className=" md:flex hidden items-center  justify-center sBox  uppercase font-[500]">
          <div className="text-[#fff] flex items-center gap-[5px] text-[18px] hover:text-[#d1cfcf] cursor-pointer">
          <span>see all our best deals</span>
          <KeyboardDoubleArrowRightIcon />
          </div>
        </div>

        {/* mobile mod btn */}
        <div className="flex md:hidden justify-center">
        <div className="text-black flex md:hidden justify-center items-center gap-[5px] text-[18px]  cursor-pointer bg-black/10 w-fit">
          <span>see all our best deals</span>
          <KeyboardDoubleArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
