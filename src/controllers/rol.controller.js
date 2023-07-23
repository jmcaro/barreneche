import Rol from '../models/Roles.js';
import { faker } from '@faker-js/faker';

export const getRoles = async (req,res) =>{
    try {
        const roles = await Rol.findAll();
        res.status(200).json({roles});
    } catch (error) {
        res.status(500).json({error});  
    }
};
export const createRol = async(req, res)=>{    
    try {
        const {rol} = req.body;
        await Rol.sync();
        const createRol = await Rol.create({
            rol: rol,
        });
        res.status(200).json({
            message: createRol.rol + " fue creado con éxito"
        })        
    } catch (error) {
        res.status(500).json({error});
    }
};

export const readRol = async (req, res)=>{
    try {
        const id = req.params.id;
        const rol = await Rol.findByPk(id)
        res.status(302).json({rol});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const updateRol = async (req, res)=>{
    try {
        const {rol} = req.body;
        const id = req.params.id
        const updateRol = await Rol.update({
            rol: rol
        },{
            where:{
                id:id
            }
        });
        res.status(200).json({
            message: rol + " fue actualizado con éxito"
        })
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteRol = async (req,res)=>{
    try {
        const id = req.params.id;
        await Rol.destroy({
            where:{
                id:id
            }
        });
        res.status(204).json({
            message: "Rol eliminado con éxito"
        })
    } catch (error) {
        res.status(500).json({error})
    }
}