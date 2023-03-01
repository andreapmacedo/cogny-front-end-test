import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';
import Products from '../../components/Products';

const Home = () => {

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    projectFirestore.collection('products').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No matching documents.');
        setLoading(false);
      } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()});
          });
          setProduct(results);
          setLoading(false);
      }
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [])

  useEffect(() => {
    projectFirestore.collection('cart').onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push(doc.data());
      });
      setCart(results);
    });
  }, [])
  
  const addToCart = async ({ id }) => {
    try {
      
      const querySnapshot = await projectFirestore.collection('cart').where('productId', '==', id).get();
      const existingItem = cart.find(item => item.productId === id);

      if (existingItem) {
        const { quantity } = existingItem;
        
        const newCart = cart.map(item => item.productId === id ? { ...item, quantity: item.quantity + 1 } : item);
        const updateItem = projectFirestore.collection('cart').doc(querySnapshot.docs[0].id);
        
        await updateItem.update({ quantity: quantity + 1 });
        setCart(newCart);
      
      } else {
        const newItem = { productId: id, quantity: 1 };
        
        await projectFirestore.collection('cart').doc().set(newItem);
        setCart([...cart, {productId: id, quantity: 1}]);
      }
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  }

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>}
      {product && <Products data={product} action={addToCart}/>}
    </div>
  );
}

export default Home;
