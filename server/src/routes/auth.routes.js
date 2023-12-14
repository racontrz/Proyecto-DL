const { Router } = require('express');
const { postUser, getUser } = require('../controllers/auth.controller');
const router = Router();

router.post('/login', );

router.post('/registro', postUser );

router.post('/exit', );

router.get('/perfil', getUser);




module.exports = router;