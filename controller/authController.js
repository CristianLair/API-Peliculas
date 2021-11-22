const Usuario = require('../src/model/Usuario');
const bcryptjs =  require ('bcryptjs');
const { validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');




exports.autenticarUsuario = async(req,res) =>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    const {email, password} = req.body;
    
    try {
        let usuario = await Usuario.findOne({email })
        if(!usuario){
           return res.status(400).json({msg: 'usuario inexistente'});

        }

        const passCorrecto = await bcryptjs.compare(password,usuario.password);
        if(!passCorrecto){
            return res.status(400).json({msg:'contraseña incorrecta'});

        }
        
        res.json({msg: "usuario logueado"})
        
        
    } catch (error) {
        console.log(error);
        
        res.status(400).json({errors})

    }
}
