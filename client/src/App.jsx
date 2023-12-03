import './App.css'
import Home from './page/Home'
import NotFound from './page/NotFound'
import Bar from './components/Bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Registro from './page/Registro'
import Perfil from './page/Perfil'
import Publicaciones from "./page/misPublicaciones";
import NuevaPublicacion from "./page/NuevaPublicacion";
import EditarPerfil from "./page/EditarPerfil";
import PrivateRoute from './page/PrivateRoute'


function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
      <Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<PrivateRoute />} />
            <Route path='/perfil' element={<Perfil />} />
          <Route />  
          <Route path="*" element={<NotFound />} />
          <Route path="/mis-publicaciones" element={<Publicaciones/>} />
          <Route path="/nueva-publicacion" element={<NuevaPublicacion/>} />
          <Route path="/mis-datos" element={<EditarPerfil/>} />
          
        </Routes>
      </BrowserRouter>
    

    </div>  
  );
};

export default App
