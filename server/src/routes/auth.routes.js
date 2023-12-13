const { Router } = require('express');
const router = Router();

router.post('/login', (req, res) => res.send('ingresando'));

router.post('/registro', (req, res) => res.send('registrando'));

router.post('/exit', (req, res) => res.send('cerradno cesion'));

router.get('/perfil', (req, res) => res.send('perfil usuario'));




module.exports = router;