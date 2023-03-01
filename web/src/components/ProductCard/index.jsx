import { ProductCardContainer, ImageContainer } from './styles';

const ProductCard = ({data, action}) => {

  const price = data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={data.imageUrl} alt="Product" />
      </ImageContainer>
      <h3>{data.description}</h3>
      <h4>{price}</h4>
      <button onClick={() => action(data)}>Add to cart</button>
    </ProductCardContainer>
  );
}

export default ProductCard;
