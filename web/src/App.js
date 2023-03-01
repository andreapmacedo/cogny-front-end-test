import AppRoutes from './routes';
import { GlobalProvider } from './provider/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
