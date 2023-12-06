import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { useState } from "react";



function Registro() {


  return (
    <div className='container'>
      <h1 className="text-center mt-5">Crear Cuenta</h1>
      <div className="container border rounded w-50 mt-5 ">
      <Form className='container mt-3'>
      <Form.Group as={Col} controlId="formGridEmail"  className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Nombre" 
            // value = {user.name}
            // onChange={handleSetUsuario}
           />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
          <Form.Control
            type="email" 
            placeholder="Email"
            // value={user.email}
            // onChange={handleSetUsuario}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Contraseña"
            // value={user.password}
            // onChange={handleSetUsuario}
          />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Label>Imagen</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Link Imagen"
            // value={user.image}
            // onChange={handleSetUsuario}
          />
      </Form.Group>          

      <div className='d-flex justify-content-between'>
        <div>
          <Button 
            // onClick={registrarUsuario}
            variant="outline-secondary" 
            type="submit" 
            className='mb-3 '>
            Registrate
          </Button>
        </div>
        <div>
        <NavLink 
          className="navbar-brand me-3" 
          to="/login"
          >
            Acceder
          </NavLink>
        </div>
      </div>
    </Form>
    </div>
    </div>
  );
}

export default Registro;