import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  // mobile menu open trigger
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Outfit bg-black items-center px-[20px] md:px-[50px]">
      {/* top */}
      <div className="flex justify-between text-white items-center ">
        {/* logo */}
        <NavLink to={"/"} className="cursor-pointer">
          <h1 className="text-[40px] font-[600]">Logo</h1>
        </NavLink>

        {/* icons */}
        <div className="flex gap-[10px] items-center">
          {/* search ico */}
          <div className="cursor-pointer">
            <SearchIcon style={{ fontSize: 30 }} />
          </div>

          {/* person */}
          <div className="cursor-pointer">
            <PersonIcon style={{ fontSize: 30 }} />
          </div>

          {/* wishlist */}
          <Link to={"/wishlist"} className="cursor-pointer">
            <Badge badgeContent={3} color="primary">
              <FaHeart style={{ fontSize: 25 }} />
            </Badge>
          </Link>
          {/* cart */}
          <Link to={"/cart"} className="cursor-pointer">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon style={{ fontSize: 30 }} />
            </Badge>
          </Link>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-black text-white py-[10px] relative">
        {/* mobile screen menu icon */}
        {menuOpen ? (
          <div
            className="text-white flex justify-end md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon style={{ fontSize: 35 }} />
          </div>
        ) : (
          <div
            className="text-white flex justify-end md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon style={{ fontSize: 35 }} />
          </div>
        )}
        <div className="md:flex hidden items-center justify-between ">
          {/* nav links */}
          <NavLink to={"/shop/1"} className="link">
            All Jewellery
          </NavLink>

          <NavLink className="link">New Drops</NavLink>

          <NavLink className="link">Chains</NavLink>

          <NavLink className="link">Womens</NavLink>

          <NavLink className="link">Collabs</NavLink>

          <NavLink className="link">Watches</NavLink>

          <NavLink className="link">Solid gold</NavLink>

          <NavLink className="link">Customized</NavLink>

          <NavLink className="link">Mens</NavLink>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0, x: -200 }}
            animate={{ opacity: 1, width: "100vw", x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex md:hidden flex-col absolute z-[5000] bg-black w-[100vw] items-center gap-[20px] text-[20px] pt-[20px] h-[100vh]"
          >
            <NavLink
              to={"/shop/1"}
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              All Jewellery
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              New Drops
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Chains
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Womens
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Collabs
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Watches
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Solid gold
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Customized
            </NavLink>

            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Mens
            </NavLink>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
