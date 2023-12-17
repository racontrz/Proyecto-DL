const { Router } = require('express');
const router = Router();
const { getAllProductos, getIdProductos, postProductos, putProductos, deleteProductos } = require('../controllers/controller.js');
const { isAuth } = require('../middlewares/auth.middleware.js');

router.get('/productos', getAllProductos);

router.get('/productos/:id', isAuth, getIdProductos);

router.post('/productos', isAuth, postProductos);

router.put('/productos/:id',isAuth,  putProductos);

router.delete('/productos/:id', isAuth, deleteProductos);


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