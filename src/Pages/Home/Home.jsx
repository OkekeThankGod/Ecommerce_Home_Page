// import React from 'react'
import { Link } from 'react-router-dom'
// import { IoArrowForwardOutline } from "react-icons/io5";
import imgHome from '../../assets/images/woman.jpg'
import Cloth_house from '../../Components/Cloth_house/Cloth_house';
import BestSellers from '../../Components/BestSellers/BestSellers';
import { SlArrowRight } from 'react-icons/sl';
import Stories from '../../Components/Stories';
import Reviews from '../../Components/Reviews';
import Deals from '../../Components/Deals';

export default function Home() {
  return (
    <div>
    <div className='w-full px-4 text-black bg-[#f7f7f7] sm:text-center pt-20'>
    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div className='flex flex-col mx-20 justify-center mx:w-[600px] sm:my-10'>
      <p className='text-slate-600 text-calibri text-4xl'>Classic Collection</p>
      <h1 className='md:text-7xl  sm:text-3xl text-3xl  font-bold py-5'>Men Collection</h1>
      <p className='text-slate-600 text-calibri text-4xl'>UPTO 40% OFF</p>
     <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white '><Link to={'/ShopOn'}>shop now</Link> </button>
      </div>
    <img className='w-[400px] mx-auto my-4' src={imgHome} alt="" />
    </div>
    </div>

    <div className="w-full px-4 py-8 bg-[#f7f7f7] text-black">
  {/* Section Header */}
  <div className="text-center mb-12">
    {/* "Shop by Categories" Title */}
    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
      Shop by Categories
    </p>
    
    {/* "Next" Button with Arrow */}
    <h2 className="flex items-center text-3xl sm:text-3xl md:text-5xl font-semibold text-blue-500 cursor-pointer hover:text-blue-600 transition duration-300">
    </h2>
  </div>

  {/* Categories Component */}
  <div className="mt-8">
    <Cloth_house />
  </div>
</div>



<div className="w-full px-4 py-8 bg-[#f7f7f7]">
  {/* Section Header */}
  <div className="text-center mb-12">
    <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold text-black py-5">
      Our Best Sellers
    </h1>
  </div>

  {/* Best Sellers Content */}
    <BestSellers />
</div>
<Deals />
<Reviews />
<Stories />
    </div>
  )
}
