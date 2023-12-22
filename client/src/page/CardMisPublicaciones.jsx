import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getMyProductos, deleteProductos } from '../api/productos.api';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function CardMisPublicaciones() {
  const [productos, setProductos] = useState([]);
  const navegate = useNavigate();

  useEffect(() => {
    getMyProductos()
    .then(Response => {
        setProductos(Response.data)
        
      })  
  },[]);

  return (
    <div className='container d-flex flex-wrap justify-content-center '>
      {
        productos.length == 0 ? (<h3 className='mt-5'>No Tienes Publicaciones</h3>):(
          
            productos.map(producto => (
              <Card key={producto.id} style={{ width: '18rem' }} className='m-3 shadow-lg p-3 mb-5 bg-body rounded-4'>
              <Card.Img variant="top" src={producto.image}/>
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
            
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>{producto.brand}</ListGroup.Item>
              <ListGroup.Item>${producto.price}</ListGroup.Item>
           
              </ListGroup>
              <Card.Body className='d-flex justify-content-between'>
              <Button 
                variant="outline-secondary" 
                type="submit" 
                onClick={() => navegate(`/nueva-publicacion/${producto.id}`)}>
                Editar
              </Button>
              <Button 
                variant="outline-danger" 
                type="submit" 
                onClick={async() => {
                  alert('Producto Eliminado...')
                  await deleteProductos(producto.id);
                  window.location.reload();
                                   
                }}>
                Eliminar
              </Button>
              </Card.Body>
              </Card>
            ))
          
        )
      }
    </div>
  );
}

export default CardMisPublicaciones;