import AppRoutes from './routes';
import { GlobalProvider } from './provider/GlobalProvider';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
