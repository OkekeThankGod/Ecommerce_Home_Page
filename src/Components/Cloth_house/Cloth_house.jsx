import React from "react";
import clothes from "../../Cloth_house_datas/Cloth_house_datas.js";
import { Link } from "react-router-dom";

export default function Cloth_house() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"></h2>

        <Link to={'/kids'}>
      {/* Flexbox Layout */}
      <div className="flex flex-wrap justify-between gap-8">
        {clothes.map((cloth) => (
          <div
            key={cloth.id}
            className="bg-black p-4 rounded-lg shadow-lg text-center w-64 transition-transform duration-800 hover:scale-x-180"
          >
            {/* Cloth Image */}
            <img
              src={cloth.image}
              // alt={cloth.name}
              className="w-full h-80  rounded-md mb-4"/>

            {/* Cloth Info */}
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              {cloth.name}
            </button>
            <p className="text-gray-500">{cloth.color}</p>
            <h2 className="text-red-500 font-bold text-xl mt-2">{cloth.price}</h2>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
}
