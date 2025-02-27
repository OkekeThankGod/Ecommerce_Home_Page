import React from 'react';
import ShopHeader from '../../Components/shopHeader/shopHeader';
import { Routes, Route } from 'react-router-dom';
import ShopHome from '../ShopPages/ShopHome';
import ShopCategory from '../ShopPages/ShopCategory';
import Product from '../ShopPages/Product';
import Cart from '../ShopPages/Cart';
import LoginSignup from '../ShopPages/LoginSignup';

export default function ShopOn() {
  return (
    <div>
      <ShopHeader />
      <Routes>
        <Route path='/shop-home' element={<ShopHome />} />
        <Route path='/men' element={<ShopCategory category='men' />} />
        <Route path='/women' element={<ShopCategory category='women' />} />
        <Route path='/kids' element={<ShopCategory category='kids' />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </div>
  );
}
