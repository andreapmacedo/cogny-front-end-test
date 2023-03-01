import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';
import Products from '../../components/Products';

const Home = () => {

  const [data, setData] = useState([]);
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
          setData(results);
          setLoading(false);
      }
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [])

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>}
      {data && <Products data={data} />}
    </div>
  );
}

export default Home;
