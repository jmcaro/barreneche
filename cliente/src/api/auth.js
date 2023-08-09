import axios from "axios";

const API = 'http://localhost:3000'

export const registerUser = async(user) =>{
    return await axios.post(`${API}/signup`,user)
};