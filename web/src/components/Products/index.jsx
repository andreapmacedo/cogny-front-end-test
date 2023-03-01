import ProductCard from '../../components/ProductCard';
import { ProductsContainer } from './styles';

const Products = ({data, action}) => {
  // console.log("data", data);
  return (
    <ProductsContainer>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} action={action}/>
      ))}
    </ProductsContainer>
  );
}


export default Products;
