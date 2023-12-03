import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Perfil from './Perfil'
import Col from 'react-bootstrap/esm/Col';


const NuevaPublicacion = () => {
  return (
    <div>
      <Perfil />
      <div>
      <h1 className="text-center mt-5">Nueva Publicación</h1>
      <div className="container border rounded  mt-5 ">
      <Form className='container mt-3'>
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
       
      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="Marca" />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="$ Precio" />
      </Form.Group> 
      </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Link Imagen" />
      </Form.Group>
      <Form.Label>Descripcion</Form.Label>
      <FloatingLabel controlId="floatingTextarea2"  className='mb-4'>
        <Form.Control
          as="textarea"
          // placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Button variant="outline-secondary" type="submit" className='mb-3'>
        ingresar
      </Button>
    </Form>
    </div>
    </div>
    </div>
    
  )
}

export default NuevaPublicacion