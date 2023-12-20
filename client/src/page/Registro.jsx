import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context';
import { useNavigate } from 'react-router-dom';


function Registro() {
  const navegate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registro, errors: registroErrors } = useAuth();
   
  const onSubmit = handleSubmit (async(data) => {
    const user = await registro(data);
    if (user) {
      navegate('/login');
    };
    
      
  });


  return (
    <div className='container'>
      <h1 className="text-center mt-5">Crear Cuenta</h1>
      <div className="container border rounded w-50 mt-5 ">
      { registroErrors && (registroErrors.map(err =>( <p className='text-danger text-center mt-2'>{err}</p>))) }
      <Form className='container mt-3'>
      <Form.Group as={Col}  className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Nombre" 
            {...register("username", { required: true })}
           />
           {errors.username && <span className='text-danger'>Nombre es requerido</span>}
        </Form.Group>
         
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email"
           {...register("email", { required: true })}
          />
          {errors.email && <span className='text-danger'>Email es requerido</span>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Contraseña"
            { ...register("password", { required: true })}
          />
          {errors.password && <span className='text-danger'>Contraseña es requerda</span>}
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label>Imagen</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Link Imagen"
             {...register("image")}
          />
      </Form.Group>          

      <div className='d-flex justify-content-between'>
        <div>
          <Button 
            onClick={onSubmit}
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