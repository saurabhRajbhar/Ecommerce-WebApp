// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [item , setItem] =useState();
  const  [count , setCount] = useState(1);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

 const removeItem= (itemToRemove)=>{
    const updateCartItems = cartItems.filter(item  =>  item !==itemToRemove);
    setCartItems(updateCartItems);
 };
 const increamentCount=()=>{
    setCount(count+1);
 }
 const decreamentCount =()=>{
   if(count>1){
    setCount(count-1);
   }
 }
  const cartData = {
    cartItems,
    addToCart,
    removeItem,
    increamentCount,
    decreamentCount,
    count,
  };

  return (
    <CartContext.Provider value={cartData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
