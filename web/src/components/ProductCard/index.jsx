const ProductCard = ({data}) => {

  const price = data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div
      className="product-card"
    >
      <h1>{data.description}</h1>
      <h1>{price}</h1>
      <img src={data.imageUrl} alt="Imagem do produto" />
    </div>
  );
}

export default ProductCard;
