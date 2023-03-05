import { Container,
  ImageContainer,
  Description,
  Button
} from './styles';

const ProductCard = ({data, action}) => {
  
  const price = data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Container>
      <ImageContainer>
        <img src={data.imageUrl} alt="Product" />
      </ImageContainer>
      <Description>
        <h5>{data.description}</h5>
        <h3>{price}</h3>
      </Description>
      <Button onClick={() => action(data)}>
        <div>1</div>
        <div>ADICIONAR AO CARRINHO</div>
      </Button>
    </Container>
  );
}

export default ProductCard;
