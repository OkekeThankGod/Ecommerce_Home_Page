import React, { useState } from 'react';
import { Link,} from 'react-router-dom'; // Import Link
import { FaDeviantart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function ShopHeader() {
  // Cart count state (default: 3 for testing)
  const [cartCount, setCartCount] = useState(3);
  const [menu, setMenu] = useState('Shop');

  return (
    <div className="w-full bg-gray-200 shadow-md py-3 px-6 flex justify-between items-center mt-16">
      
      {/* Left Section: Logo & Title */}
      <div className="flex items-center space-x-3">
        <FaDeviantart className="text-green-600 text-3xl" />
        <h2 className="text-lg font-semibold text-gray-800">Shop Categories</h2>
      </div>

      {/* Center Section: Navigation Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
       <li onClick={()=>{setMenu('Shop')}}><Link to={'/ShopHome'}> {menu=== 'Shop'? <hr/>: <></>}Shop</Link></li>
       <li onClick={()=>{setMenu('Shop')}}><Link to={'/Men'}> {menu=== 'Men'? <hr/>: <></>}Men</Link></li>
       <li onClick={()=>{setMenu('Shop')}}><Link to={'/Women'}> {menu=== 'Women'? <hr/>: <></>}Women</Link></li>
       <li onClick={()=>{setMenu('Shop')}}><Link to={'/Kids'}> {menu=== 'Kids'? <hr/>: <></>}Kids</Link></li>
      </ul>

      {/* Right Section: Cart & Login */}
      <div className="flex items-center space-x-4 relative">
        {/* Cart Icon with Count */}
        <div className="relative cursor-pointer">
        <Link> <FaCartShopping className="text-2xl text-gray-700 hover:text-blue-600" />
          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}</Link>
        </div>
 
        {/* Login Button */}
        <Link to="/login">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Link>
      </div>

    </div>
  );
}
