import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../Context/Context";

const PrivateRoute = () => {
  const { user } = useData();

  return user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
