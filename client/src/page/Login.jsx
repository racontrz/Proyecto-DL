import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context';


function Login() {
  const navegate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit (async(data) => {
    const user = await login(data);
    if (user) {
      navegate('/misproductos');
    };
    
  });

  return (
    <div className='container'>
     
      <h1 className="text-center mt-5">Acceder</h1>
      <div className="container border rounded w-50 mt-5 ">
      { loginErrors && (loginErrors.map(err =>( <p className='text-danger text-center mt-2'>{err}</p>))) }
      <Form className='container mt-3'>
        <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          />
          {errors.email && <span className='text-danger'>Email es requerido</span>}
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
          />
         {errors.password && <span className='text-danger'>Contraseña es requerda</span>}
      </Form.Group>     
      <div className='d-flex justify-content-between'>
        <div >
          <Button 
            variant="outline-secondary" 
            type="submit" className='mb-3'
            onClick={onSubmit}>
            ingresar
          </Button>
        </div>
        <div>
        <NavLink 
          className="navbar-brand me-3" 
          to="/registro"
          >
            Crear Cuenta
          </NavLink>
        </div>
      </div>
    </Form>
    </div>
    </div>
  );
};

export default Login;