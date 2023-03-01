import { useContext } from 'react';
import Header from "../../components/Header";
import CartCard from '../../components/CartCard';
import { GlobalContext } from '../../provider/GlobalProvider';

const Cart = () => {
  const { cart, setCart } = useContext(GlobalContext);
  // console.log(cart);

  const setCheckout = (data) => {
    console.log(data);
    // const { id } = data;
    // const existingItem = cart.find(item => item.productId === id);
    // const newCart = cart.filter(item => item.productId !== id);
    // setCart(newCart);
  }

  return (
    <div>
      <Header />
      {cart.map((product, index) => (
        <CartCard key={index} data={product} />
      ))}
      <button onClick={() => setCheckout()}>Finalizar Compra</button>
    </div>
  );
}

export default Cart;
