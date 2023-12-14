const { Router } = require('express');
const router = Router();
const { getAllProductos, getIdProductos, postProductos, putProductos, deleteProductos } = require('../controllers/controller.js');

router.get('/productos', getAllProductos);

router.get('/productos/:id', getIdProductos);

router.post('/productos', postProductos);

router.put('/productos/:id', putProductos);

router.delete('/productos/:id', deleteProductos);


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