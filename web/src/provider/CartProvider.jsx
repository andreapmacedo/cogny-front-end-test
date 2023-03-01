import { createContext, useState, useMemo } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    
  const value = useMemo(() => ({
    cart,
    setCart
  }), [cart]);

  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export {CartProvider, CartContext };