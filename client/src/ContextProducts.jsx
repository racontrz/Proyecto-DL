import { getAllProductos } from '../api/productos.api';
import { createContext, useState, useContext, useEffect } from "react";
import { getIdProductos } from './api/productos.api';

const ProductsContext = createContext();

const cargarproductos = async () => {
  
};

const cargarproducto = async id => {
  const res = await getIdProductos(id);
  return res.data
}




// getIdProductos