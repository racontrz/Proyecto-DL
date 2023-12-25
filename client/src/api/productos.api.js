import axios from "./axios"; 

export const postProductos =  (data) => axios.post("/productos", data)

export const getMyProductos =  () => axios.get("/misproductos")


export const getAllProductos =  () => axios.get("/productos")

export const deleteProductos =  (id) => axios.delete(`/productos/${id}`)

export const putProductos =  (id, data) => axios.put(`/misproductos/${id}`, data)

export const getIdProductos =  (id) => axios.get(`/productos/${id}`)