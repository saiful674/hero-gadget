import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const CartContext = createContext([]);
export const ProductContex = createContext([])

const App = () => {
  const [products ,cartArr] = useLoaderData()
  const [cart, setCart] = useState(cartArr)
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ProductContex.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductContex.Provider>
    </CartContext.Provider>
  );
};

export default App;