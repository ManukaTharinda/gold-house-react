import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <div className="Section6 h-[60vh] mt-[50px] flex flex-col justify-center md:justify-between text-center md:text-left">
      {/* text */}
      <div className="pt-[20px]">
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="Outfit text-white text-[40px] uppercase font-[700]  md:px-[50px]"
        >
          time 4 luxury
        </motion.span>
      </div>

      {/* luxury link */}
      <div className="md:justify-end flex justify-center ">
        
        <div className="sBox md:flex hidden justify-center items-center">
        <div className="Poppins flex items-center justify-center md:text-[18px] uppercase text-[#fff] hover:text-[#d1cfcf] cursor-pointer bg-black/10 md:bg-transparent gap-[5px] font-[500] w-fit ">
          <span>time for luxury collection</span>
          <KeyboardDoubleArrowRightIcon />
        </div>
        </div>


        <div className="Poppins flex md:hidden items-center justify-center md:text-[18px] uppercase text-black cursor-pointer bg-black/10 md:bg-transparent gap-[5px] font-[500] w-fit ">
          <span>time for luxury collection</span>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Section6;
