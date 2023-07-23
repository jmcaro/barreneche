import { fakerES_MX as faker } from "@faker-js/faker";
import Categoria from "../models/Categorias.js";


export const getCategorias = async (req,res) =>{
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json({categorias});
    } catch (error) {
        res.status(500).json({error});  
    }
};
export const createCategoria = async(req, res)=>{    
    try {
        const {categoria} = req.body;
        await Categoria.sync();
        const createCategoria = await Categoria.create({
            categoria: categoria,
        });
        res.status(200).json({
            message: createCategoria.categoria + " fue creado con éxito"
        })        
    } catch (error) {
        res.status(500).json({error});
    }
};

export const readCategoria = async (req, res)=>{
    try {
        const id = req.params.id;
        const categoria = await Categoria.findByPk(id)
        res.status(302).json({categoria});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const updateCategoria = async (req, res)=>{
    try {
        const {categoria} = req.body;
        const id = req.params.id
        const updateCategoria = await Categoria.update({
            categoria: categoria
        },{
            where:{
                id:id
            }
        });
        res.status(200).json({
            message: categoria + " fue actualizado con éxito"
        })
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteCategoria = async (req,res)=>{
    try {
        const id = req.params.id;
        await Categoria.destroy({
            where:{
                id:id
            }
        });
        res.status(204).json({
            message: "Categoria eliminado con éxito"
        })
    } catch (error) {
        res.status(500).json({error})
    }
}