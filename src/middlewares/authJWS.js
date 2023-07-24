import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuarios.js';



export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({message: "No te encuentras loggeado correctamente"})
    } else {
        try {
            const verify = jwt.verify(token, process.env.JWTOKEN );
            req.userID = verify.id
            if (!verify) {
                return res.status(403).json({message: "No te encuentras loggeado correctamente"})
            } else {
                const user = await Usuario.findByPk(verify.id);            
                if (!user) {
                   return res.status(404).json({message: "usuario no encontrado"}) 
                } else {
                    next();       
                }
            }            
        } catch (error) {
            return res.status(404).json({message: "error de validacion"}) 
        }
        
        
    }
};