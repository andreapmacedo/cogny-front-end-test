import ProductCard from '../../components/ProductCard';

const Products = ({data}) => {
  console.log(data);
  return (
    <div
      className="products"
    >
      {data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
}


export default Products;
