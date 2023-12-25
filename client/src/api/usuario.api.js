import axios from "./axios"; 

export const perfilUser =  (id) => axios.get(`/perfil/${id}`);

export const updateUser =  (id, data) => axios.put(`/perfil/${id}`, data);