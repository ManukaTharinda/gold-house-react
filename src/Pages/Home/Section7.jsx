import React from "react";
import { CollectionData } from "../../Components/Collection Card/CollectionData";
import CollectionCard from "../../Components/Collection Card/CollectionCard";
import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <div className="mt-[50px]">
      {/* title */}
      <div className="flex justify-center mb-[20px]">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Outfit md:text-[40px] text-[25px] text-center capitalize font-[600]"
        >
          what's popular in time 4 luxury collection
        </motion.span>
      </div>

      {/* collections */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {CollectionData.map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Section7;
