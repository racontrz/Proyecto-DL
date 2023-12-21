import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = ({ redirectTo, allowed, children }) => {
  if (!allowed) return <Navigate to={redirectTo} replace />
  return children ? children : <Outlet />;
}
