const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const { userVerification, tokenVerification } = require('../../middleware/middleware');

const { 
  postUser,
  dataUser,
  keyUser,
  getAllProductos, 
  getIdProducto, 
  postProducto, 
  deleteProducto, 
  putProducto
  
} = require('../controllers/productos.controller');

router.get('/usuarios', userVerification, async (req, res) => {
  const usuario = req.
});

router.get('/productos', getAllProductos );

router.get('/producto/:id', getIdProducto);

router.post('/producto', postProducto);

router.delete('/producto/:id', deleteProducto);

router.put('/producto/:id', putProducto);


module.exports = router;