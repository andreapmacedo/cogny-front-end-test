import { ProductCardContainer,
  ImageContainer,
  StyleDescription,
  StyleButton
} from './styles';

const ProductCard = ({data, action}) => {
  
  const price = data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={data.imageUrl} alt="Product" />
      </ImageContainer>
      <StyleDescription>
        <h5>{data.description}</h5>
        <h3>{price}</h3>
      </StyleDescription>
      <StyleButton onClick={() => action(data)}>
        <div>1</div>
        <div>ADICIONAR AO CARRINHO</div>
      </StyleButton>
    </ProductCardContainer>
  );
}

export default ProductCard;
