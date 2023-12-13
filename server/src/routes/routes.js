const { Router } = require('express');
const router = Router();

router.get('/usuarios', (req, res) => res.send('obteniendo usuarios'));

router.get('/usuario/:id', (req, res) => res.send('obteniendo usuario unico'));

router.post('/usuarios', (req, res) => res.send('creando usuario'));

router.put('/usuarios/:id', (req, res) => res.send('actualizando tarea'));


router.delete('/usuarios/:id', (req, res) => res.send('eliminando usuario'));


module.exports = router;







// const { Router } = require('express');
// const router = Router();


// const { 
//   postUser,
//   getUser,
//   getAllProductos, 
//   getIdProducto, 
//   postProducto, 
//   deleteProducto, 
//   putProducto
  
// } = require('../controllers/controller');

// router.get('/usuarios', getUser );

// router.post('/usuarios', postUser );
 
// router.get('/productos', getAllProductos );

// router.get('/producto/:id', getIdProducto);

// router.post('/producto', postProducto);

// router.delete('/producto/:id', deleteProducto);

// router.put('/producto/:id', putProducto);


// module.exports = router;