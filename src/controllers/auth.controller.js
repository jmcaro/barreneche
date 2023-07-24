import { faker } from "@faker-js/faker";
import Usuario from "../models/Usuarios.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


//Encriptacion password con bycrypt/////////////////////////
const encriptar = async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}; 

const desencriptar = async (password, reqPassword)=>{
    return await bcrypt.compare(password,reqPassword);
};
///////////////////////////////////////////////////////////


//creacion de tokens
const tokenizador = (payload) =>{
    return jwt.sign(
        {id: payload}, 
        process.env.JWTOKEN,
        {expiresIn: 86400})  
} 

export const signUp = async (req,res)=>{
    try {
        const {email} = req.body;
        await Usuario.sync();
        const createUsuario = await Usuario.create({
            tipoDocumento: faker.person.prefix(),
            numeroDocumento: faker.number.int(9999999999),  
            correo:faker.internet.email(),
            password: await encriptar('123456789'),
            telefono:faker.phone.number(),
            primerNombre:faker.person.firstName(),
            segundoNombre:faker.person.middleName(),
            primerApellido: faker.person.lastName(),
            segunApellido: faker.person.lastName(),
            nacimento: faker.date.birthdate(),
            isActive: faker.datatype.boolean(0.9)
        });
        res.status(200).json({
            token : tokenizador(createUsuario.id),
            message : createUsuario.correo +" creado en nuestro sistema"
        })
        
    } catch (error) {
        res.status(500).json({error});
    }
};

export const signIn = async (req,res)=>{
    const {user,password} = req.body;
    const userCheck = await Usuario.findOne({
        include:{
            all:true,
            nested:true
        },
        where : {numeroDocumento: user}
    })
    if (!userCheck) {
        res.status(400).json({message: "Datos incorrectos"})
    } else {
        //res.status(200).json(userCheck);
        const passwordCheck = await desencriptar(password,userCheck.password);
        console.log(passwordCheck);
        if (!passwordCheck) {
            res.status(400).json({message: "Datos incorrectos"})
        }   else {
            res.status(200).json({
                message: passwordCheck,
                token: tokenizador(userCheck.id)
            });
        } 

    }
    
};
