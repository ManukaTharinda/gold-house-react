import React from "react";
import Slider from "react-slick";
import Neck from "../../assets/neck.jpg";
import Earrings from "../../assets/earrings.jpg";
import Golds from "../../assets/golds.jpg";
import Ads from "./Ads";

const ImgSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {/* img 1 */}
        <div className="slide1 w-[100%] h-[80vh] ">
          <Ads />
        </div>
        {/* img 2 */}
        <div className="slide2 w-[100%] h-[80vh] object-cover">
          <Ads />
        </div>
        {/* img 3 */}
        <div className="slide3 w-[100%] h-[80vh] object-cover">
          <Ads />
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
