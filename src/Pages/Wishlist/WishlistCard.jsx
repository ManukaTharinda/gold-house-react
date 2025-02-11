import React, { useState } from "react";
import Product from "../../assets/product1.png";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({ item }) => {
  // quentity
  const [quentity, setQuentity] = useState(1);

  return (
    <div className="flex md:justify-between gap-[20px] shadow-lg md:shadow-none p-[25px] md:p-0 md:gap-0 md:flex-row flex-col  Outfit md:items-center">
      <div className="flex gap-[25px] md:flex-row flex-col md:items-center">
        <div className="w-[100px] h-[130px]">
          <img
            src={item.productImg}
            alt="productImg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="font-[600] flex flex-col">
          <div>
            <span>{item.productName}</span>
          </div>

          <div>
            <span>({item.size}mm)</span>
          </div>
        </div>
      </div>

      <div>
        <span>${item.price}</span>
      </div>

      <div>
        <div className="p-[10px] px-[50px] bg-black cursor-pointer text-white hover:bg-black/90 flex items-center justify-center">
          <span>Buy Now</span>
        </div>
      </div>

      <div>
        <div className="p-[10px] px-[50px] bg-white cursor-pointer text-black hover:bg-gray-100 border-black border-solid border-[1px] flex items-center justify-center">
          <span>Add to Cart</span>
        </div>
      </div>

      <div>
        <RiDeleteBin6Line className="text-red-500 text-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default WishlistCard;
