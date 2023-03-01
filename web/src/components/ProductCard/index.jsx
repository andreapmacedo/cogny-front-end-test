import { ProductCardContainer } from './styles';

const ProductCard = ({data}) => {

  const price = data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ProductCardContainer>
      <img src={data.imageUrl} alt="Imagem do produto" />
      <h3>{data.description}</h3>
      <h4>{price}</h4>
    </ProductCardContainer>
  );
}

export default ProductCard;
