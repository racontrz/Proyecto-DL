import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Perfil from './Perfil'
import Col from 'react-bootstrap/esm/Col';
import { useForm } from 'react-hook-form';
import { postProductos } from '../api/productos.api' 
import { useNavigate } from 'react-router-dom';


const NuevaPublicacion = () => {
  const { register, handleSubmit } = useForm();
  const navegate = useNavigate();

  const onSubmit = handleSubmit (async(data) => {
    const res = await postProductos(data)
    navegate('/mis-publicaciones')
    console.log(res)
  })

  return (
    <div>
      <Perfil />
      <div>
      <h1 className="text-center mt-5">Nueva Publicación</h1>
      <div className="container border rounded w-50 mt-5 ">
      <Form className='container mt-3'>
        <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Nombre"
          {...register("name", { required: true })}
          />
          
      </Form.Group>
       
      <Row>
      <Col>
      <Form.Group className="mb-3" >
        <Form.Label>Marca</Form.Label>
          <Form.Control
           type="text" 
           placeholder="Marca" 
           {...register("brand", { required: true })}
           />
           
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" >
        <Form.Label>Precio</Form.Label>
          <Form.Control
           type="text"
           placeholder="$ Precio"
           {...register("price", { required: true })}
           />
           
      </Form.Group> 
      </Col>
      </Row>
      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Link Imagen"
          {...register("image", { required: true })}
          />
          
      </Form.Group>
      <Form.Label>Descripcion</Form.Label>
      <FloatingLabel controlId="floatingTextarea2"  className='mb-4'>
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
          {...register("description", { required: true })}
        />
        
      </FloatingLabel>

      <Button 
        onClick={onSubmit}
        variant="outline-secondary" 
        type="submit" 
        className='mb-3'>
        ingresar
      </Button>
    </Form>
    </div>
    </div>
    </div>
    
  )
}

export default NuevaPublicacion