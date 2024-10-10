import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const isAuthenticated = localStorage.getItem("jwt_token");

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
