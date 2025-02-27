import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
  const categories = ["Electronics", "Clothing", "Home & Kitchen", "Books", "Beauty Products"];

  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold"></h2>

      {/* Dropdown Button with Icon */}
      <div className="relative inline-block">
        <div
          className="cursor-pointer flex items-center gap-1 text-gray-800 hover:text-red-500 transition"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
        >
          <span> Shop by Categories</span>
          {/* Rotate icon when dropdown is open */}
          <SlArrowDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                onClick={() => console.log(`Selected: ${category}`)} // Replace with actual action
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Shop;
