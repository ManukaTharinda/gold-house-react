import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const NewsLetter = () => {
  return (
    <div className="Poppins bg-[#202020] pt-[50px]">
      {/* title */}
      <div className="flex justify-center items-center">
        <span className="capitalize text-[30px] font-[500] text-center text-white pb-[20px]">
          get notified with our NewsLetter
        </span>
      </div>

      {/* newsletter input */}
      <div className="flex justify-center items-center gap-[20px] flex-col md:flex-row">
        <div className="border-white border-solid border-[1px]  w-[80%] md:w-[500px] flex items-center justify-between p-[10px]">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-none outline-none text-white placeholder:text-white"
          />
          <SearchIcon className="text-white" />
        </div>
       
      </div>

      {/* subscribe */}
      <div className="flex justify-center md:gap-[200px] gap-[20px] mt-[20px]  items-center pb-[50px] px-[5px] flex-col md:flex-row">
        {/* left */}
        <div className="mt-[50px] ">
          <p className="text-white text-center md:text-left text-[18px] font-[500]">
            By subscribing, <br />
            you agree to recieve recurring automated <br />
            promotional and personalized marketing text <br />
            messages
          </p>
        </div>
        {/* right */}
        <div>
          <div className=" sBoxGr md:flex hidden justify-center rounded-md items-center mx-[25px] md:mx-0">
            <span className="text-white text-[20px]  font-[500]  p-[10px]  cursor-pointer">
              Subscribe
            </span>
          </div>


          {/* mobile screen button */}
          <div className="flex md:hidden bg-[#6C757D] p-[15px] w-[200px] justify-center items-center text-[20px] text-white">
            <span>Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
