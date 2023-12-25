const { Router } = require('express');
const { registroUser, loginUser, exitUser, perfilUser, updateUser } = require('../controllers/auth.controller');
const { isAuth } = require('../middlewares/auth.middleware');
const router = Router();
const { validacionSchema } = require('../middlewares/validacion.middleware.js');
const { registroSchema, loginSchema, updateSchema } = require( '../schemas/auth.schemas.js');


router.post('/login', validacionSchema( loginSchema ), loginUser );

router.post('/registro', validacionSchema( registroSchema ), registroUser );

router.post('/exit', exitUser);

router.get('/perfil/id', isAuth, perfilUser);

router.put('/perfil/:id', isAuth, validacionSchema( updateSchema ), updateUser);



module.exports = router;