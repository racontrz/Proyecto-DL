import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
  return (
    <div className='container'>
      <h1 className="text-center mt-5">Acceder</h1>
      <div className="container border rounded w-50 mt-5 ">
      <Form className='container mt-3'>
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>     
      <Button variant="outline-secondary" type="submit" className='mb-3'>
        ingresar
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;