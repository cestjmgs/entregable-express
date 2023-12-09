const express = require("express")
const routerAuth = express.Router();
const jwt = require("jsonwebtoken");
require('dotenv').config();

const users = [
    { email: "primeremail@gmail.com", password: "password123"},
    { email: "segundoemail@gmail.com", password: "password234"},
]

routerAuth.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = { email: email }
    const auth = users.some(
        item => item.email === email && item.password === password
        ); 

        if(!auth){
         res.status(401).send("Credenciales inválidas.")   
        }
        const token = generarToken(user);
        res.json(token)

});


function generarToken(user){
    const secreto = process.env.JWT_SECRETO || "secreto"
    return jwt.sign(user, secreto, { expiresIn: "3m" })  
};



module.exports = routerAuth;
