import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext.js";

export default function ProtectedRoute({ role }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/signupandsignin" replace />;

  if (role && user.role !== role)
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
