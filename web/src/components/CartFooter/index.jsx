import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { Container } from './styles';

const CartFooter = ({total, action}) => {

  const { cart } = useContext(GlobalContext);
  
  const totalBR = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Container>
      <button onClick={action} disabled={ cart.length === 0 ? true : false }>FINALIZAR PEDIDO</button>
      <div>
        <p>TOTAL</p>
        <h2>{totalBR}</h2>
      </div>
    </Container>
  );
}

export default CartFooter;
