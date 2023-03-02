import { ProductCardContainer,
  ImageContainer,
  StyleDescription
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
      <button onClick={() => action(data)}>
        <p>1</p>
        <p>ADICIONAR AO CARRINHOS</p>
      </button>
    </ProductCardContainer>
  );
}

export default ProductCard;
