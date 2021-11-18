require ('./src/db/mongoose')
const express = require('express');
const morgan = require('morgan');
const app = express();
const Usuario = require('./src/model/registro');
const port = process.env.PORT || 3001 ;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));





app.get('/registros', (req, res) => {
    Usuario.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})


app.post('/registrarse', (req, res) => {
    const usuario = new Usuario(req.body)
    usuario.save()
        .then(() => {
            res.status(201).send(usuario);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});