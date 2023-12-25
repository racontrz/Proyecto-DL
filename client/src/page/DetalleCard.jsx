import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllProductos } from '../api/productos.api';
import { useNavigate } from 'react-router-dom';





function DetalleCard() {
 
  const [productos, setProductos] = useState([]);
  const navegate = useNavigate();



  useEffect(() => {
    getAllProductos()
    .then(Response => {
        setProductos(Response.data)
        
      })  
  },[]);

  return (
    <div className='container d-flex flex-column  align-items-center'>
      <div className='mt-5 d-flex  '>
        <h3 >Detalles de la Publicacion</h3>
      </div>
      {
        (
            productos.map(producto => (
              
              <Card key={producto.id} style={{ width: '40rem' }} className='m-3 shadow-lg p-3 mt-5 bg-body rounded-4 '>
                
                <div className='d-flex '>
                  <div>
                    <Card.Img variant="top" src={producto.image} style={{ width: '18rem' }}/>
                  </div>
                  <div className='d-flex flex-column align-items-center' style={{ width: '20rem' }}>
                    <Card.Title>{producto.name}</Card.Title>
                    <ListGroup className="list-group-flush mt-">
                      <ListGroup.Item>Marca:  {producto.brand}</ListGroup.Item>
                      <ListGroup.Item>Precio:  ${producto.price}</ListGroup.Item>
                      <ListGroup.Item>Descripcion:  {producto.description}</ListGroup.Item>
                    </ListGroup>
                  </div>    
                </div>
              </Card>
            ))
        )
      }
    </div>
  );
}

export default DetalleCard