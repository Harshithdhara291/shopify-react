import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({children}) {
  const token = localStorage.getItem("jwtToken");
  return (token === null) ? <Navigate to="/login" /> : children ;
}
