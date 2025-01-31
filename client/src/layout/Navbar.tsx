import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/mimar_Logo-nobg.png";
import Dropdown from "../components/Dropdown";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState<boolean>(false);
  const handleNavIcon = () => {
    setNav(!nav);
  };
  const handleClick = () => setNav(!nav);
  const productsDropdownItems = [
    { label: "Product 1", link: "/product-1" },
    { label: "Product 2", link: "/product-2" },
  ];

  return (
    <div
      id="navbar"
      className="sticky w-full h-[80px] flex justify-between items-center px-4 text-dark shadow-sm shadow-gray-300 z-10"
    >
      <div>
        <Link to={"/"} className="cursor-pointer outline-none border-none">
          <img src={logo} alt="img_logo" height={120} width={120} />
        </Link>
      </div>
      <div className="hidden md:block blockNav">
        <ul className="flex justify-between items-center w-full md:gap-x-2">
          <Dropdown label="Products" items={productsDropdownItems} />
          <Dropdown label="Sources" items={productsDropdownItems} />
          <Dropdown label="Solutios" items={productsDropdownItems} />
          <li className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer">
            Pricing
          </li>
          <li className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer">
            Contact
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary/80 text-white mr-2 rounded-xl py-2 px-4 outline-none w-24"
            >
              Login
            </button>
          </li>
        </ul>
      </div>

      <div
        onClick={handleNavIcon}
        className="block md:hidden z-10 hover:cursor-pointer mx-4 text-gray-700"
        id="icons"
      >
        {!nav ? <FaBars fill="#333" size={25} /> : <FaTimes size={25} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-base mx-auto"
        }
      >
        <Dropdown label="Products" items={productsDropdownItems} />
        <Dropdown label="Sources" items={productsDropdownItems} />
        <Dropdown label="Solutions" items={productsDropdownItems} />
        <li className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer">
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <button
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/80 text-white mr-2 rounded-xl py-2 px-4 outline-none w-24"
          >
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
