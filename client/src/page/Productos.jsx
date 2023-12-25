import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllProductos } from '../api/productos.api';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getAllProductos()
    .then(Response => {
        setProductos(Response.data)
        
      })  
  },[]);

  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {
        productos.map(producto => (
          <Card key={producto.id} style={{ width: '18rem' }} className='m-3 shadow-lg p-3 mb-5 bg-body rounded-4'>
          <Card.Img variant="top" src={producto.image}/>
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
        
          </Card.Body>
          <ListGroup className="list-group-flush">
          {/* <ListGroup.Item>{producto.brand}</ListGroup.Item> */}
          <ListGroup.Item>${producto.price}</ListGroup.Item>
       
          </ListGroup >
          <Card.Body className='mt-3'>
          <Button variant="outline-secondary" >        
          <NavLink className="navbar-brand " to={`/detalle/${producto.id}`}	>Ver Más</NavLink>
          </Button>
          </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}

export default Productos;




