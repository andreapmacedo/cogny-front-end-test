import { useContext } from 'react';
import Header from "../../components/Header";
import { CartContext } from '../../provider/CartProvider';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <Header />
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
