import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useAuth } from '../Context'


function Bar() {
  const { isAuth, exit  } = useAuth();
 
  // const navegate = useNavigate();
  const DarkMode = () => {  
    document.querySelector( 'body' ).setAttribute( 'data-bs-theme', 'dark' );
    document.querySelector( '#dl-icon' ).setAttribute( 'class', 'bi bi-sun-fill' );
  } 
  const LightkMode = () => {
    document.querySelector( 'body' ).setAttribute( 'data-bs-theme', 'light' );
    document.querySelector( '#dl-icon' ).setAttribute( 'class', 'bi bi-moon-fill' );
  } 
  const SwitchMode = () => {
    document.querySelector( 'body' ).getAttribute( 'data-bs-theme' ) === 'light' ? DarkMode() : LightkMode();
  }


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink className="navbar-brand" to="/">Drummerworld</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
            </Nav>
            
            <Button onClick={SwitchMode} className="btn-secondary rounded me-3"><i id="dl-icon" className="bi bi-sun-fill"></i></Button>
            
            {isAuth ? (
              <div>
                <img src={isAuth.image} className="rounded-circle me-2"  width="40" height="40" />
                <Button variant="outline-secondary" className="me-2">
                <NavLink className="nav-link" to="/misproductos">Mi Perfil</NavLink>
                </Button>
                <Button variant="outline-danger" >
                <NavLink className="nav-link" to="/login" onClick={() => exit()}>Salir</NavLink>
                </Button>
              </div>
            ) : (
             <div>
              <Button variant="outline-secondary" className="me-2">
              <NavLink className="nav-link" to="/login">Acceder</NavLink>
              </Button>
              <Button variant="outline-secondary" >
              <NavLink className="nav-link" to="/registro">Crear Cuenta</NavLink>
              </Button>
             </div>
            )}   
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bar;

