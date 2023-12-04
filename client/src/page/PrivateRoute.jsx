import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../Context";

const PrivateRoute = () => {
  const { user } = useData();

  return user.token ? <Outlet /> : <Navigate to="/perfil" />;

};

export default PrivateRoute;
