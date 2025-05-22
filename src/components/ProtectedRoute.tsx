
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  
  // Show loading state while checking auth
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // Redirect to signin if not authenticated
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  
  // Render the protected content if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
