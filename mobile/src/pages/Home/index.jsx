import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { db } from '../../firebase/config';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { 
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
      cart,
      setCart,
      products,
      setProducts
    } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    db.collection('products').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No matching documents.');
        setLoading(false);
      } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()});
          });
          setProducts(results);
          setLoading(false);
      }
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [])

  useEffect(() => {
    db.collection('cart').onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push(doc.data());
      });
      setCart(results);
    });
  }, [])
  
  const addToCart = async ({ id }) => {
    try {
      
      const querySnapshot = await db.collection('cart').where('productId', '==', id).get();
      const existingItem = cart.find(item => item.productId === id);

      if (existingItem) {
        const { quantity } = existingItem;
        
        const newCart = cart.map(item => item.productId === id ? { ...item, quantity: item.quantity + 1 } : item);
        const updateItem = db.collection('cart').doc(querySnapshot.docs[0].id);
        
        await updateItem.update({ quantity: quantity + 1 });
        setCart(newCart);
      
      } else {
        const newItem = { productId: id, quantity: 1 };
        
        await db.collection('cart').doc().set(newItem);
        setCart([...cart, {productId: id, quantity: 1}]);
      }
    } catch (error) {
      console.error('Error to add item:', error);
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Header />
      {error && <Text>Something went wrong...</Text>}
      {loading && <Text>Loading...</Text>}
      <View style={styles.cardContainer} >
        {products &&
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard data={item} action={addToCart}/>
            )}
            keyExtractor={item => item.id}
          />
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flexShrink: 1,
    height: '100%',
    marginTop: 40,
  },
  cardContainer: {
    flexShrink: 1,
    marginTop: 20,
  },
});