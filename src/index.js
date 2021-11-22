const express = require('express');
const app = express();

const usuariosRoute = require('../Routes/usuario')
const authindex = require ('../Routes/auth')
const conectarDB = require('./db/mongoose')

conectarDB();

// Habilitamos express.json

app.use(express.json({extend: true}));




/// port del server

const PORT = process.env.PORT || 4500;

// Ruta usuarios api/usuarios
app.use('/api/usuarios', usuariosRoute);

app.use('/api/auth',authindex);


app.listen(PORT, ()=>{
    console.log("escuchando PORT")
})