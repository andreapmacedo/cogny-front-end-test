import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { 
  Container,
  ImageContainer,
  Description,
  Quantity,
  Subtotal
} from './styles';

const CartCard = ({ data }) => {
  const { products } = useContext(GlobalContext);
  
  const product = products.find(product => product.id === data.productId);
  const price = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const subTotal = (product.price * data.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  return (
    <Container>
      <ImageContainer>
        <img src={product.imageUrl} alt="Product"/>
      </ImageContainer>
      <Description>
        <p>{product.description}</p>
        <h3>{price}</h3>
      </Description>
      <Quantity>{data.quantity}</Quantity>
      <Subtotal>{subTotal}</Subtotal>
    </Container>
  );
}

export default CartCard;
