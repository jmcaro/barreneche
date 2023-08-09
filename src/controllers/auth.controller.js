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
        const user = req.body;
        await Usuario.sync();
        const createUsuario = await Usuario.create({
            tipoDocumento: user.tipoDocumento,
            numeroDocumento: user.numeroDocumento,  
            correo: user.correo,
            password: await encriptar(user.password),
            telefono:user.telefono,
            primerNombre:user.primerNombre,
            segundoNombre:user.segundoNombre,
            primerApellido: user.primerApellido,
            segunApellido: user.segundoApellido,
            nacimento: user.nacimiento,
            isActive: true
        });
        const token = tokenizador(createUsuario.id);
        res.cookie('token',token),
        res.status(200).json({
            message : createUsuario.correo +" creado en nuestro sistema"
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            error
        });
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
            const token = tokenizador(userCheck.id);
            res.cookie("token", token)
            res.status(200).json({
                message: "Credenciales Correctas, Bienevenido al Consultorio",
            });
        } 

    }
    
};
