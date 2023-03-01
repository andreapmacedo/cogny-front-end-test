import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { 
  StyleCard,
  StyleImage,
  StyleDescription,
  StyleQuantity,
  StyleSubTotal
} from './styles';

const CartCard = ({ data }) => {
  const { products } = useContext(GlobalContext);
  
  const product = products.find(product => product.id === data.productId);
  const price = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const subTotal = (product.price * data.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  return (
    <StyleCard>
      <StyleImage>
        <img src={product.imageUrl} alt="Product" />
      </StyleImage>
      <StyleDescription>
        <h3>{product.description}</h3>
        <h3>{price}</h3>
      </StyleDescription>
      <StyleQuantity>{data.quantity}</StyleQuantity>
      <StyleSubTotal>{subTotal}</StyleSubTotal>
    </StyleCard>
  );
}

export default CartCard;
