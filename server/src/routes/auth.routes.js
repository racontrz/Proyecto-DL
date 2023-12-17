const { Router } = require('express');
const { registroUser, loginUser, exitUser, perfilUser } = require('../controllers/auth.controller');
const { isAuth } = require('../middlewares/auth.middleware');
const router = Router();

router.post('/login', loginUser );

router.post('/registro', registroUser );

router.post('/exit', exitUser);

router.get('/perfil', isAuth, perfilUser);




module.exports = router;