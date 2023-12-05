import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import usersBd from '../user.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../Context';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    try {
      if(!email || !password) {
        alert('Email y contraseña son requeridos');
      } else if(email !== usersBd.email) {
          alert('Email incorrecto');
      } else if(password !== usersBd.password) {
          alert('Password incorrecto');
        } else {
        const { email: emailPrueba, password: passwordPrueba, } = usersBd;
    
      if (emailPrueba === email && passwordPrueba === password) {
        setUser({ emailPrueba: email, passwordPrueba: password });
        alert('Sesion iniciada');
        return navigate('/perfil');
      }
    }
    } catch (error) {
      alert('Error al iniciar sesión');
      console.log(error.message);
    }
  }

  return (
    <div className='container'>
      <h1 className="text-center mt-5">Acceder</h1>
      <div className="container border rounded w-50 mt-5 ">
      <Form className='container mt-3'>
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          />
      </Form.Group>     
      <Button 
        variant="outline-secondary" 
        type="submit" className='mb-3'
        onClick={handleSubmit}>
        ingresar
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;