import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function publicRoute(Component) {
    const { auth } = useAuth();
    return auth.accessToken ? <Navigate to="/" /> : <Component />;
}