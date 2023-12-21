import React from 'react'
import Perfil from './Perfil'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditarPerfil = () => {
  return (
    <div>
      <Perfil />
      <div>
        <h1 className="text-center mt-5">Editar Perfil</h1>
      </div>
      <div className='container'>
      <div className="container border rounded w-50 mt-5 ">
      <Form className='container mt-3'>
        <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-4" >
        <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Link Imagen" />
      </Form.Group>      
      <Button variant="outline-secondary" type="submit" className='mb-4'>
        ingresar
      </Button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default EditarPerfil