const express = require('express');
const app = express();

const usuariosRoute = require('../Routes/usuario')
const authindex = require ('../Routes/auth')
const Usuarios = require('../src/model/Usuario')
const conectarDB = require('./db/mongoose')




conectarDB();

// Habilitamos express.json

app.use(express.json({extend: true}));



/// port del server

const PORT = process.env.PORT || 4500;


// Ruta usuarios api/usuarios

app.get('/usuariosRegistrados', (req, res) => {
    Usuarios.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})
app.use('/registrarse', usuariosRoute);

app.use('/login',authindex);





app.listen(PORT, ()=>{
    console.log("escuchando PORT")
})