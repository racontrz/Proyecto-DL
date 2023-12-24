import { createContext, useState, useContext, useEffect } from "react";
import axios from "./api/axios";
import cookie from "js-cookie";
import { getIdProductos, putProductos } from "./api/productos.api";


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);       
  if (!context) {
    throw new Error("There is no AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);

  const registro = async (data) => {
    try {
      const res = await axios.post('/registro', data);
      alert("Cuenta creada con exito")
      setUser(res.data);
      setIsAuth(true);                                                                        
      return res.data;
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
       return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (cookie.get("token")) {
      axios
      .get('/productos ')
      .then((res) => {
        setUser(res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err)});
        setUser(null);
        setIsAuth(false);
    }
  }, [])

  const login = async (data) => {
    try {
      const res = await axios.post('/login', data);
      alert("Bienvenido!")    
      setUser(res.data);
      setIsAuth(true);
      return res.data
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
       return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    };
    console.log(data)
  };
 
  useEffect(() => {
    if (cookie.get("token")) {
      axios
      .get('/productos ')
      .then((res) => {
        setUser(res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err)});
        setUser(null);
        setIsAuth(false);
    }
  }, [])
  
  const exit = async () => {
    const res = await axios.post('/exit');
    setUser(null);
    setIsAuth(false);
  }

  const cargarproducto = async id => {
    const res = await getIdProductos(id);
    return res.data
  }

  const actualizar = async (id, data) => {
    const res = await putProductos(id, data);
    res.data


    // try {
    //   const res = await putProductos(id, data);
    //   return res.data
    // } catch (error) {
    //   if (error.response) {
    //     setErrors([error.response.data.message]);
    //   }
    // }
  }


  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuth, 
      errors,
      registro,
      login,
      exit,
      cargarproducto,
      actualizar
      }} >
      {children}
    </AuthContext.Provider>
  )
    
  }

