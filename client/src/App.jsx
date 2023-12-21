import './App.css'
import Home from './page/Home'
import NotFound from './page/NotFound'
import { useAuth } from './Context'
import Bar from './components/Bar'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Registro from './page/Registro'
import Perfil from './page/Perfil'
import Publicaciones from "./page/misPublicaciones";
import NuevaPublicacion from "./page/NuevaPublicacion";
import EditarPerfil from "./page/EditarPerfil";
import {PrivateRoute} from './page/PrivateRoute'


function App() {
  
  const { isAuth } = useAuth();
  console.log(isAuth);

  return (
    <div className="App">
          <Bar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route element={<PrivateRoute allowed={!isAuth} redirectTo={"/home"}/>}>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
            </Route>
            <Route element={<PrivateRoute allowed={isAuth} redirectTo={"/login"}/>} >
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/mis-publicaciones" element={<Publicaciones/>} />
              <Route path="/nueva-publicacion" element={<NuevaPublicacion/>} />
              <Route path="/mis-datos" element={<EditarPerfil/>} />
            </Route > 

            <Route path="*" element={<NotFound />} />
                    
          </Routes>
            
     
    </div>  
  );
};

export default App
