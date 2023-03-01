import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from '../../firebase/config';
import Products from '../../components/Products';
import Header from '../../components/Header';
import { GlobalContext } from '../../provider/GlobalProvider';

const Home = () => {

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
    projectFirestore.collection('products').get().then((snapshot) => {
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
      console.error('Error to add item:', error);
    }
  }

  return (
    <div>
      <Header />
      {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>}
      {products && <Products data={products} action={addToCart}/>}
    </div>
  );
}

export default Home;
