import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
    { label: "Product 3", link: "/product-3" },
  ];

  return (
    <div
      id="navbar"
      className="sticky w-full h-[100px] flex justify-between items-center px-8 text-dark z-10"
    >
      <div>
        <Link
          to={"/"}
          className="font-jaro text-heading text-white cursor-pointer outline-none border-none uppercase"
        >
          Gen 3d
        </Link>
      </div>
      <div className="hidden md:block blockNav text-white">
        <ul className="font-Inter text-items flex justify-between items-center w-full md:gap-x-8">
          {/* <Dropdown
            label="Products"
            items={productsDropdownItems}
            onItemClick={undefined}
          />
          <Dropdown
            label="Sources"
            items={productsDropdownItems}
            onItemClick={undefined}
          />
          <Dropdown
            label="Solutios"
            items={productsDropdownItems}
            onItemClick={undefined}
          /> */}
          <li className="py-2 px-4 hover:bg-[#0fd9a] cursor-pointer">Home</li>
          <li className="py-2 px-4 hover:bg-[#0fd9a] cursor-pointer">
            Product
          </li>
          <li className="py-2 px-4 hover:bg-[#0fd9a] cursor-pointer">About</li>
          <li className="py-2 px-4 hover:bg-[#0fd9a] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <div>
        <button
          onClick={() => navigate("/login")}
          className="font-medium text-white rounded-full py-2 px-4 w-32 border border-light"
        >
          Login
        </button>
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
        <Dropdown
          label="Products"
          items={productsDropdownItems}
          onItemClick={handleClick}
        />
        <Dropdown
          label="Sources"
          items={productsDropdownItems}
          onItemClick={handleClick}
        />
        <Dropdown
          label="Solutions"
          items={productsDropdownItems}
          onItemClick={handleClick}
        />
        <li
          onClick={handleClick}
          className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer"
        >
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li
          onClick={handleClick}
          className="py-2 px-4 hover:bg-[#0fd9a] hover:underline cursor-pointer"
        >
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li onClick={handleClick}>
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
