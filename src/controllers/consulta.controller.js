import { fakerES_MX as faker } from "@faker-js/faker";
import Consulta from "../models/Consultas.js";


export const getConsultas = async (req,res) =>{
    try {
        const consultas = await Consulta.findAll({
            //  raw:true,
            include:{
                all:true,
                nested:true
            }
        });
        console.log(consultas);
        res.status(200).json({consultas});
    } catch (error) {
        res.status(500).json({error});  
    }
};
export const createConsulta = async(req, res)=>{    
    try {
        const consulta = req.body;
        //const cat = "16a4f6a4-d9f7-4d2a-8e0a-70d9bbf3f6e2";
        await Consulta.sync();
        const createConsulta = await Consulta.create({
            correo:faker.internet.email(),
            telefono:faker.phone.number(),
            consulta:faker.person.bio(),
            tipo_persona:faker.animal.cow(),
            primer_nombre:faker.person.firstName(),
            segundo_nombre:faker.person.firstName(),
            primer_apellido:faker.person.lastName(),
            segundo_apellido:faker.person.lastName(),
            tipo_identificacion:faker.person.sexType(),
            numero_identificacion:faker.number.int(),
            sexo:faker.person.sexType(),
            categoriaId: 1,
        });
        res.status(200).json({
            message: createConsulta.consulta + " fue creado con éxito"
        })        
    } catch (error) {
        res.status(500).json({error});
    }
};

export const readConsulta = async (req, res)=>{
    try {
        const id = req.params.id;
        const consulta = await Consulta.findByPk(id)
        res.status(302).json({consulta});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const updateConsulta = async (req, res)=>{
    try {
        const consulta = req.body;
        const id = req.params.id
        const updateConsulta = await Consulta.update({
            consulta: consulta
        },{
            where:{
                id:id
            }
        });
        res.status(200).json({
            message: consulta + " fue actualizado con éxito"
        })
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteConsulta = async (req,res)=>{
    try {
        const id = req.params.id;
        await Consulta.destroy({
            where:{
                id:id
            }
        });
        res.status(204).json({
            message: "Consulta eliminado con éxito"
        })
    } catch (error) {
        res.status(500).json({error})
    }
}