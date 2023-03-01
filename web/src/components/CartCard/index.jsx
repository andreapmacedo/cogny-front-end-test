import { useContext } from 'react';
import { CardContainer, ImageContainer } from './styles';
import { GlobalContext } from '../../provider/GlobalProvider';

const CartCard = ({ data }) => {
  const { products } = useContext(GlobalContext);
  
  const product = products.find(product => product.id === data.productId);
  const price = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log(price);

  return (
    <CardContainer>
      <ImageContainer>
        <img src={product.imageUrl} alt="Product" />
      </ImageContainer>
      <h3>{product.description}</h3>
      <h4>{price}</h4>
    </CardContainer>
  );
}

export default CartCard;
