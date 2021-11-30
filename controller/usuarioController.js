// Usuario 

const Usuario = require('../src/model/Usuario')
const bcryptjs =  require ('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');




exports.createUsuario = async (req, res) => {

    
    const errores = validationResult(req); 

    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });  
    }

    
    const { email, password } = req.body;
    
    try {
        

        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({ msg: "El usuario ya existe" })
        }

    
        usuario = new Usuario(req.body);
        
        
        const salt = await bcryptjs.genSalt(10); 
        usuario.password = await bcryptjs.hash(password, salt);

        
        await usuario.save()
        


        // Crear y  firmar el JWT
        // consiste en dos partes, primero crear JWT con su payload
        const payload = {
            usuario: {
                _id: usuario.id
            }
        }
        console.log(payload)
        
        // firmar nuestro token con su metodo sing() y le pasamos el payload de primer parametor y luego su palabra secreta.
        // es importar que esa secreta sea idem para firmar como para autenticar al usuario.
        jwt.sign(payload, ` ${process.env.JWT}`, {
            expiresIn: 3600,
            
        }, (error, token) => {
            if (error) throw error; // si hay marca el error
            res.json({token: token });
            console.log(token)
        })

        // mensaje de confirmacion


    } catch (error) {
        console.log(error);
        res.status(400).send("Error")
    }
}