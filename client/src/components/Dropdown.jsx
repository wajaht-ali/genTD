/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Dropdown = ({ label, items, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li
            className={`group relative flex flex-row items-center justify-center py-2 px-4 cursor-pointer ${label === "Products" && "font-semibold"
                }`}
            onClick={toggleDropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span>{label}</span>
            <MdKeyboardArrowDown
                size={18}
                className={`mt-1 ml-2 opacity-70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                    }`}
            />

            {/* Dropdown Menu */}
            <ul
                className={`absolute top-full left-0 w-44 p-2 bg-white shadow-lg rounded-lg ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } transition-opacity duration-200 z-10`}
            >
                {items.map((item, index) => (
                    <li key={index} onClick={onItemClick}>
                        <Link
                            to={item.link}
                            className="flex flex-row items-center justify-start gap-x-2 px-4 py-2 text-gray-700 hover:bg-sky-50 rounded-sm"
                        >
                            <span className="peer font-normal">{item.label}</span>
                            <MdOutlineKeyboardArrowRight
                                size={18}
                                className="opacity-0 translate-x-0 peer-hover:opacity-100 peer-hover:translate-x-8 transition-all duration-300"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default Dropdown;