const mongoose = require('mongoose')
//const DB_MONGO = "mongodb+srv://cristianlair:daemla1113@cluster0.7wajw.mongodb.net/registro-AvanzadoDB?retryWrites=true";
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const conectarDB = async () => {
    try {
         await mongoose.connect(process.env.DB_M,
            {useNewUrlParser: true,
             useUnifiedTopology:true,
             connectTimeoutMS : 10000,
        
              } );
        console.log(process.env.DB_M);

    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}

mongoose.set("useCreateIndex", true)
module.exports = conectarDB;