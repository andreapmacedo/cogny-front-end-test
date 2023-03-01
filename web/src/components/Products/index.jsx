import ProductCard from '../../components/ProductCard';
import { ProductsContainer } from './styles';

const Products = ({data}) => {
  console.log(data);
  return (
    <ProductsContainer>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </ProductsContainer>
  );
}


export default Products;
