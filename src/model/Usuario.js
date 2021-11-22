const mongoose = require('mongoose');
const{isEmail} = require('validator/lib/isEmail');

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: 'String',
        require: true,
        trim: true

    },
    

    email: {
        type: 'string',
        require: true,
        trim: true,
        unique: true,
        lowercase:true,
        validate : [(val)=> isEmail,'Ingrese un correo electronico valido']
    },

    password: {
        type: 'string',
        require: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('usuarios', usuarioSchema);