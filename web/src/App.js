import AppRoutes from './routes';
import { CartProvider } from './provider/CartProvider';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
