
const express = require('express');
const routes = express.Router();
const { check } = require('express-validator');
const autControler = require('../controller/authController')


routes.post('/', [
    check('email', 'agregar un email valido').isEmail(),
    check('password', 'el password debe contener al menos 6 caracteres').isLength({min:6}),

],
autControler.autenticarUsuario
);

module.exports = routes;
