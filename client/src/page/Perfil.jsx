
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

// import { useAuth } from "../Context";

const Perfil = () => {
  // const { user } = useAuth();
 
  return (
    <div className='container mt-4'>
       
      <h1 className="text-center mb-4">Mi Perfil</h1>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink className="navbar-brand ms-5 " to="/misproductos">Mis Publicaciones</NavLink>
          <NavLink className="navbar-brand me-5" to="/nueva-publicacion">Nueva Publicacion</NavLink>
          {/* <NavLink className="navbar-brand me-5" to="/mis-datos">Mis Datos</NavLink> */}
        </Container>
      </Navbar>
    </div>
  )
  
};

export default Perfil