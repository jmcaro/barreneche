import axios from "axios";

export const createCategories = async(cat) =>{
    return await axios.post('http://localhost:3000/categorias',cat)
};