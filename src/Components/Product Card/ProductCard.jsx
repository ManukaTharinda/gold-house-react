import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      className="Poppins flex flex-col shadow-xl md:w-[250px] w-[150px] h-fit  hover:shadow-2xl transition-shadow"
    >
      {/* product Img */}
      <div className="md:w-[250px] md:h-[300px] w-[150px] h-[250px]">
        <img
          src={item.img}
          alt="proImg"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* productDetails */}
      <div className="flex flex-col bg-white capitalize pb-[10px] px-[10px]">
        {/* name */}
        <span className="font-[500] text-[18px] ">{item.title}</span>

        {/* size */}
        <span className="font-[500]">({item.size} mm)</span>

        {/* price */}
        <span className="font-[500] text-gray-600">From ${item.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
