const mongoose = require('mongoose');

//const DB_MONGO = "mongodb+srv://cristianlair:daemla1113@cluster0.7wajw.mongodb.net/registro-AvanzadoDB?retryWrites=true";

const conectarDB = async () => {
    try {
         await mongoose.connect("mongodb+srv://cristianlair:daemla1113@cluster0.7wajw.mongodb.net/registro-AvanzadoDB?retryWrites=true",
            {useNewUrlParser: true,
             useUnifiedTopology:true,
             connectTimeoutMS : 10000,
        
              } );
        //console.log(DB_MONGO);

    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}

mongoose.set("useCreateIndex", true)
module.exports = conectarDB;