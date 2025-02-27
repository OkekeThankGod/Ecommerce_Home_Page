import React from 'react'
import imgdoll from '../../src/assets/images/dol.jpg'



export default function Deals() {
  return (
    <div>
        
            <div className="w-full px-4 py-8 text-black bg-[#f7f7f7] sm:text-center">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-semibold text-center mb-4">Deals of the Month</h1>
              <p className="text-lg text-gray-700 mb-6">
                It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
        
              <div className="grid gap-4 mb-6">
                <ul className="flex gap-10 justify-center">
                  <li className="text-3xl font-bold">120</li>
                  <li className="text-3xl font-bold">18</li>
                  <li className="text-3xl font-bold">15</li>
                  <li className="text-3xl font-bold">10</li>
                </ul>
                <ul className="flex gap-10 justify-center text-xl text-gray-500">
                  <li>Days</li>
                  <li>Hours</li>
                  <li>Minutes</li>
                  <li>Seconds</li>
                </ul>
              </div>
        
              <button
                type="button"
                className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                View All Products
              </button>
            </div>
        
            <div className="flex justify-center md:justify-end">
              <img src={imgdoll} alt="Deal of the Month" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        
        
    </div>
  )
}
