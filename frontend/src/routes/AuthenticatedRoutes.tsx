import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useContext(AuthContext);

  // If user already logged in → redirect away from login
  if (currentUser) {
    return <Navigate to="/products" replace />;
  }

  return children;
};

export default AuthenticatedRoute;
