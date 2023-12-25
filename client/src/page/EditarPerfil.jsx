import React from 'react'
import Perfil from './Perfil'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Context';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';




const EditarPerfil = () => {

  const { register, handleSubmit, setValue} = useForm();
  const { cargarUser, actualizarUser } = useAuth();
  const params = useParams();

  const onSubmit = handleSubmit (async(data) => {
    const user = await actualizarUser(params.id, data)
    if (user) {
      alert('Perfil Actualizado')
    }
  })


useEffect(() => {
  if (params.id) {
    cargarUser(params.id).then(user => {
      setValue('name', user.name)
      setValue('email', user.email)
      setValue('password', user.password)
      setValue('image', user.image)
    })
    console.log(params.id)
  }
},[])

console.log(params.id)
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
          <Form.Control 
          type="email" 
          placeholder="Nombre" 
          {...register("name")}
          />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Correo</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Correo" 
          {...register("email")}
          />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Contraseña" 
          {...register("password")}
          />
      </Form.Group>
      <Form.Group className="mb-4" >
        <Form.Label>Imagen</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Link Imagen" 
          {...register("image")}
          />
      </Form.Group>      
      <Button 
      onClick={onSubmit}
      variant="outline-secondary" 
      type="submit" 
      className='mb-4'>
        Editar
      </Button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default EditarPerfil