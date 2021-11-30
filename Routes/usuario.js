const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const { check } = require('express-validator');


router.post('/',[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('email', 'ingresar email').isEmail(),
    check('password', 'la contraseña debe contener al menos 6 caracteres').isLength({min:6})
], usuarioController.createUsuario);



module.exports = router;
