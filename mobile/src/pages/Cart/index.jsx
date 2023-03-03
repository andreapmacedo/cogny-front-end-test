
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header'
import CartCard from '../../components/CartCard'
import { GlobalContext } from '../../provider/GlobalProvider';
import { db } from '../../firebase/config';
import CartFooter from '../../components/CartFooter';
import { 
  View,
  FlatList,
  StyleSheet,
} from 'react-native'


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
      console.log(productCart);
      const { quantity } = productCart;
      const currentProduct = products.find(product => product.id === productCart.productId);
      return acc + (quantity*currentProduct.price);
    }, 0);
    setTotal(total);
  }, [cart, products]);


  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.cardContainer}>
        {cart && 
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartCard data={item} />
            )}
            keyExtractor={item => item.productId}
          />
        }
        <CartFooter total={total} action={setCheckout} />
      </View>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flexShrink: 1,
    height: '100%',
    marginTop: 40,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    flexShrink: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
});