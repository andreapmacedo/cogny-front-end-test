import ProductCard from '../../components/ProductCard';
import { ProductsContainer } from './styles';

const Products = ({data, action}) => {
  
  return (
    <ProductsContainer>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} action={action}/>
      ))}
    </ProductsContainer>
  );
}


export default Products;
