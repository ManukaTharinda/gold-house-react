import React from "react";
import LifeTime from "../../assets/lifeTime.png";
import PostPay from "../../assets/postepay.png";
import WireCard from "../../assets/wirecard.png";
import Worldpay from "../../assets/worldpay.png";
import Unionpay from "../../assets/unionpay.png";
import Maestro from "../../assets/maestro.png";
import Cr from "../../assets/cr.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FooterLogo1 from "../../assets/footerLogo1.png";
import FooterLogo2 from "../../assets/footerLogo2.png";
import FooterLogo3 from "../../assets/footerLogo3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer  ">
      {/* contents */}
      <div className="flex flex-col gap-[50px] ">
        {/* section 1 */}
        <div>
          <div className="flex flex-col md:flex-row gap-[20px] items-center px-[50px] pt-[20px]">
            <h1 className="text-[40px] font-[700] text-white">Logo</h1>
            <h1 className="text-[40px] font-[700] text-white">Goldhouse</h1>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 md:justify-between items-center px-[100px]">
          {/* item 1 */}
          <div>
            <div>
              <img src={FooterLogo1} alt="footerLogo" />
            </div>
          </div>

          {/* item 2 */}
          <div>
            <img src={FooterLogo2} alt="footerLogo" />
          </div>

          {/* item 3 */}
          <div>
            <img src={FooterLogo3} alt="footerLogo" />
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 items-center md:items-start text-center md:text-left  md:justify-between px-[100px]">
          {/*item 1  */}
          <div>
            <div className="Outfit flex flex-col text-white font-[500] gap-[5px]">
              <div className="flex flex-col">
                <span>1 GALLEFACE,</span>
                <span>COLOMBO 2,</span>
                <span>SRI LANKA,</span>
              </div>

              <div className="flex flex-col">
                <span>011 2345 678</span>
                <span>contact@goldhouse.com</span>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-[20px] font-[500] text-white">
                Quick Links
              </h1>
              <div className="Outfit flex flex-col text-white gap-[10px]">
                <span className="link">All Jewellery</span>
                <span className="link">New Drops</span>
                <span className="link">Collabs</span>
                <span className="link">Customized</span>
                <span className="link">Womens</span>
                <span className="link">Mens</span>
                <span className="link">Solid gold</span>
                <span className="link">Chains</span>
                <span className="link">Watches</span>
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-[20px] font-[500] text-white">
                Help
              </h1>
              <div className="Outfit flex flex-col text-white gap-[10px]">
                <span className="link">Bracelets Size Guides</span>
                <span className="link">Ring Size Guides</span>
                <span className="link">Chain Size Guides</span>
                <span className="link">Initiate A Return</span>
                <span className="link">Warranty</span>
                <Link to={"/terms-of-services"} className="link">
                  Terms Of Services
                </Link>
                <Link to={"/privacy-policy"} className="link">
                  Privacy Policy
                </Link>
                <Link to={"/contact-us"} className="link">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-[100px] px-[100px]">
          {/* left */}
          <div className="Poppins text-[30px] md:text-left text-center text-white font-[700]">
            <h1>Shop With Us</h1>
          </div>
          {/* right */}
          <div className="flex gap-[50px] flex-wrap items-center justify-center">
            <img src={PostPay} alt="postpay" className="w-[50px]" />
            <img src={WireCard} alt="wirecard" className="w-[50px]" />
            <img src={Worldpay} alt="worldpay" className="w-[50px]" />
            <img src={Unionpay} alt="unionpay" className="w-[50px]" />
            <img src={Cr} alt="cr" className="w-[50px] bg-white rounded-full" />
            <img src={Maestro} alt="ma" className="w-[50px] rounded-full" />
          </div>
        </div>

        {/* section 4 */}
        <div className="flex flex-col md:flex-row px-[100px] gap-[20px] text-white">
          {/* left */}
          <div className="Poppins text-[18px] text-center md:text-left font-[500]">
            <h1>Follow us</h1>
          </div>
          {/* right */}
          <div className="flex justify-center gap-[20px]">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </div>
        </div>

        {/* section 5 */}
        <div className="Outfit bg-[#6C757D] p-[3px] flex text-white justify-center items-center">
          <div>
            Developed By{" "}
            <a href="https://web.facebook.com/Cyberpixels">Codescape labs & Solution </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
