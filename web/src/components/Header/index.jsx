import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div onClick={ () => navigate('/') }>
        <h2>Home</h2>
      </div>
      <div onClick={ () => navigate('/cart') }>
        <h2>Cart</h2>
      </div>
    </HeaderContainer>
  );
}

export default Header;
