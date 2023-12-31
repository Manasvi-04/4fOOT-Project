import Link from "next/link";
import React from "react";
import { FaTrademark, FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import {PiPawPrintBold} from "react-icons/pi"

const Header = () => {

  return (
    <div className="header w-full h-20 border-b-[1px] border-b-zinc-600 flex items-center mdl:justify-between">
      {/* =================== Left Start here ===================== */}
      <div className="hidden lgl:flex items-center gap-8">
        {/* Home */}
        <Link href="/">
          <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative overflow-hidden group">
            <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
              Home
            </span>
            <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
              Home
            </span>
          </div>
        </Link>
        {/* Care */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-800 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
            Care
          </span>
          <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
            Care
          </span>
        </div>
        {/* Services */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-800 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
            Services
          </span>
          <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
            Services
          </span>
        </div>
      </div>
      {/* =================== Left End here ======================= */}
      {/* =================== Middle Start here =================== */}
      <Link href="/">
        <div>
          <p className="text-5xl font-medium font-titleFont tracking-wider relative text-black">
            4 fOOt  
            <span className ="absolute bottom-2 -right-16 text-small text-centre ">
              <PiPawPrintBold />
              </span>   
          </p>
            
        </div>
      </Link>
      {/* =================== Middle End here ===================== */}
      {/* =================== Right Start here ==================== */}
      <div className="hidden mdl:flex items-center gap-8">
        {/* Shop */}
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-800 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
            Shop
          </span>
          <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
            Shop
          </span>
        </div>
        {/* Work */}
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-800 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
            Work
          </span>
          <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
            Work
          </span>
        </div>
        {/* About */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-800 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-800 group-hover:translate-y-5 transition-transform duration-300">
            About
          </span>
          <span className="absolute left-0 -translate-y-5 text-black group-hover:translate-y-0 transition-transform duration-300">
            About
          </span>
        </div>
        {/* userIcon */}
        <a href = "mailto: manasvisrivastava21@gmail.com">
          <div>
            <FiUser className="text-xl text-gray-800 hover:text-black cursor-pointer duration-300" />
          </div>
        </a>
        {/* Shopping Icon */}
        
      </div>
      {/* =================== Right End here ====================== */}
    </div>
  )
  
  }
export default Header;
