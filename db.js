const env = require ("dotenv");
import mongoose from "mongoose";
env.config();

const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        console.log('Conexión a la base de datos.')
    } catch (error) {
        console.log(error)
    }
};

module.exports=connectDB;