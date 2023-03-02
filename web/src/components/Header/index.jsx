import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(GlobalContext);

  return (
    <HeaderContainer>
      <div onClick={ () => navigate('/') }>
        <h2>COGNYSHOES</h2>
      </div>
      <div onClick={ () => navigate('/cart') }>
        <h3>Meu carrinho</h3>
        <div>
          <p>{cart.length}</p>
          <p>itens</p>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
