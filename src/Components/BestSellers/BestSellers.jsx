// import React from 'react'

import Categories from "../../BestSellersDatas/BetSellers";

export default function BestSellers() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"></h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Categories.map((category) => (
          <div
            key={category.id}
            className="bg-green-400 p-4 rounded-xl shadow-lg text-center transition-transform duration-600 hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40  rounded-lg mb-4"
            />

            {/* Product Info */}
            <h1 className="text-lg font-semibold text-gray-700">{category.name}</h1>
            <p className="text-gray-500">{category.color}</p>
            <h1 className="text-black-500 font-bold text-xl mt-2">${category.price}</h1>

            {/* Add to Cart Button */}
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-transform duration-600 hover:scale-3d-100">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
