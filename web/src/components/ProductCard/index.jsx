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
        <h3>{data.description}</h3>
        <h4>{price}</h4>
      </StyleDescription>
      <StyleButton onClick={() => action(data)}>
        <div>1</div>
        <div>ADICIONAR AO CARRINHOS</div>
      </StyleButton>
    </ProductCardContainer>
  );
}

export default ProductCard;
