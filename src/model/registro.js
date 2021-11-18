const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    name: {
        type: String,
        required: true        
        },

    
    password: {
        type: String,
        validate(value){
            if(value.length < 8){
                throw new Error('La contraseña debe contener al menos 8 caracteres')
            }
        },
        required: true
    },
    
});

module.exports = Usuario;