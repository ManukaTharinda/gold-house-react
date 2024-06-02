import React from "react";
import { CollectionData } from "../../Components/Collection Card/CollectionData";
import CollectionCard from "../../Components/Collection Card/CollectionCard";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className="mt-[50px]">
      {/* title */}
      <div className="flex text-center justify-center mb-[20px]">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Outfit capitalize md:text-[40px] text-[25px] font-[600] text-center"
        >
          What's popular nature twist collection
        </motion.span>
      </div>

      {/* products */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {CollectionData.map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Section5;
