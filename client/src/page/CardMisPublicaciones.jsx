import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllProductos } from '../api/productos.api';


function CardMisPublicaciones() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getAllProductos()
    .then(Response => {
        setProductos(Response.data)
        console.log(Response.data)
      })  
  },[]);

  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {
        productos.map(producto => (
          <Card key={producto.id} style={{ width: '18rem' }} className='m-3'>
          <Card.Img variant="top" src={producto.image}/>
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
        
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>{producto.brand}</ListGroup.Item>
          <ListGroup.Item>${producto.price}</ListGroup.Item>
       
          </ListGroup>
          <Card.Body>
          <Card.Link href="#">Ver Más</Card.Link>
          </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}

export default CardMisPublicaciones;