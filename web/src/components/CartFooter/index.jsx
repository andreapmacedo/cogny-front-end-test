import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { StyleCartFooter } from './styles';

const CartFooter = ({total, action}) => {

  const { cart } = useContext(GlobalContext);
  
  const totalBR = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <StyleCartFooter>
      <button onClick={action} disabled={ cart.length === 0 ? true : false }>FINALIZAR PEDIDO</button>
      <div>
        <p>TOTAL</p>
        <h2>{totalBR}</h2>
      </div>
    </StyleCartFooter>
  );
}

export default CartFooter;
