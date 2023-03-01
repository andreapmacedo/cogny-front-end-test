import { createContext, useState, useMemo } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
    
  const value = useMemo(() => ({
    cart,
    setCart,
    products,
    setProducts
  }), [cart, products]);

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalProvider, GlobalContext };