import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaDeviantart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu & close
import Shop from "../../Pages/Shop/Shop";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown this initializes it to be closed
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar this is not a side bar once it is in a big screen

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-4">
        {/* Menu Button for Mobile */}
        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-3xl">
          <HiMenu />
        </button>

        {/* LOGO */}
        <div className="flex items-center text-3xl font-medium space-x-2">
          <FaDeviantart className="text-black size-10" />
          <Link to="/" className="hover:text-red-500 transition">
          <h1 className="text-red-500">SHOPON</h1>
          </Link>
        </div>

        {/* NAVIGATION (Hidden on Mobile) you cannot see this part in a mobile view  */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>

          {/* SHOP DROPDOWN */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-red-500 transition"
              // when the state is not opened
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* this is a conditional statement that checks that if the dropdown is open the icon rotates down else it rotates up */}
              Shop <SlArrowDown className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} /> 
            </button>

            {/* Dropdown Menu, if the state is set to be open that is if the dropdown is open then the design takes place */}
            {isOpen && (
              <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48">
                <Shop />
              </ul>
            )}
          </div>

          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/blog" className="hover:text-red-500 transition">Blog</Link>
          <Link to="/contact_us" className="hover:text-red-500 transition">Contact us</Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-6">
          <CiSearch className="text-xl cursor-pointer hover:text-red-500 transition" />
          <FaRegHeart className="text-xl cursor-pointer hover:text-red-500 transition" />
          <Link to="/cart" className="text-xl cursor-pointer hover:text-red-500 transition">
            <FaCartShopping />
          </Link>
          
          {/* LOGIN BUTTON */}
          <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
            Login
          </Link>
          
        </div>
      </header>

      {/* Sidebar Overlay  here is the side bar section, so when the sidebar is  clicked to be opened and the design takes place let it don't open*/}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        {/* Close Button */}
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-2xl">
          <HiX />
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col mt-12 space-y-6 pl-6">
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/shop" className="text-lg">Shop</Link>
          <Link to="/about" className="text-lg">About</Link>
          <Link to="/blog" className="text-lg">Blog</Link>
          <Link to="/contact_us" className="text-lg">Contact Us</Link>
        </nav>
      </div>
    </>
  );
}
