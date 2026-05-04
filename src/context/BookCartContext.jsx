"use client";
import { createContext, useState } from "react";

export const DataContext = createContext();
const BookCartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const data = {
    cartItems,
    setCartItems,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default BookCartContext;
