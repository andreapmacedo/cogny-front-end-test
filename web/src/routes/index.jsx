import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;