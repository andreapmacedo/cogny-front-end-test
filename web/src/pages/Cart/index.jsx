import { useContext, useEffect, useState } from 'react';
import Header from "../../components/Header";
import CartHeader from '../../components/CartHeader';
import CartFooter from '../../components/CartFooter';
import CartCard from '../../components/CartCard';
import { GlobalContext } from '../../provider/GlobalProvider';
import { db } from '../../firebase/config';
import { StyleCard, StyleCardContainer } from './styles';

const Cart = () => {
  const { cart, products } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  const setCheckout = async () => {
    const querySnapshot = await db.collection('cart').get();

    if (!querySnapshot.empty) {
      const batch = db.batch();
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    } 
  }

  useEffect(() => {
    const total = cart.reduce((acc, productCart) => {
      const { quantity } = productCart;
      const currentProduct = products.find(product => product.id === productCart.productId);
      return acc + (quantity*currentProduct.price);
    }, 0);
    setTotal(total);
  }, [cart, products]);

  return (
    <StyleCard>
      <Header />
      <CartHeader />
      <StyleCardContainer>
        {cart.map((product, index) => (
          <CartCard key={index} data={product} />
        ))}
      </StyleCardContainer>
      <CartFooter total={total} action={setCheckout}/>
    </StyleCard>
  );
}

export default Cart;
