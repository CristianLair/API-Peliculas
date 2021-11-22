// Usuario 

const Usuario = require('../src/model/Usuario')
const bcryptjs =  require ('bcryptjs');
const {validationResult} = require('express-validator');




exports.createUsuario = async (req, res) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(400).json({errores:  error.array()})
    }
    const {email,password} = req.body;
    console.log(email,password)
    try {
         await Usuario.findOne({email}).then(async v=>{
             
             console.log(v);
             if (v) {
                 
                 return res.status(200).json({messege: "usuario ya registrado"});
                 
                 
             }else {
          usuario = new Usuario(req.body);
          const salt = await bcryptjs.genSalt(10)
          usuario.password = await bcryptjs.hash(password,salt);
           usuario.save();
          
           return res.send(usuario )
             }
         });
        
      
    }  catch (e) {
     
       res.status(400).json({ message: "Error en la creacion de usuario", e });
        
    }
   }
