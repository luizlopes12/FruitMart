import React from 'react';
import List from '../List';
import Cart from '../Cart/Cart';
import {Routes, Route} from 'react-router-dom'
const PageRoutes = ({listItems, cartItems, handleAddProduct}) => {
  return <div>
    <Routes>
      <Route path='/' exact element={<List listItems={listItems} handleAddProduct={handleAddProduct}/>}/>
      <Route path='/cart' exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
    </Routes>
  </div>;
};

export default PageRoutes;
