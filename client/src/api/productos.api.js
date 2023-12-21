import axios from "./axios"; 

export const postProductos = async (data) => axios.post("/productos", data)

export const getAllProductos = async () => axios.get("/productos")