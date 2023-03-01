import { useContext } from 'react';
import Header from "../../components/Header";
import CartHeader from '../../components/CartHeader';
import CartFooter from '../../components/CartFooter';
import CartCard from '../../components/CartCard';
import { GlobalContext } from '../../provider/GlobalProvider';
import { projectFirestore } from '../../firebase/config';
import { StyleCard } from './styles';

const Cart = () => {
  const { cart } = useContext(GlobalContext);

  const setCheckout = async () => {
    const querySnapshot = await projectFirestore.collection('cart').get();

    if (!querySnapshot.empty) {
      const batch = projectFirestore.batch();
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    } 
  }

  return (
    <StyleCard>
      <Header />
      <CartHeader />
      {cart.map((product, index) => (
        <CartCard key={index} data={product} />
      ))}
      <button onClick={() => setCheckout()}>Finalizar Compra</button>
      <CartFooter />
    </StyleCard>
  );
}

export default Cart;
