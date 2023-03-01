import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await projectFirestore.collection('products').get();
  //       const data = response.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }))
  //       setData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   }
  //   fetchData();
  // }, [])

  return (
    <div
      className="home"
    >
      {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>}
      {data && data.map((product) => (
        <div key={product.id}>
          {/* <h2>{product.name}</h2> */}
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <h1>Hello World</h1>
    </div>
  );
}



export default Home;
