import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

export const ProtectedRoute = ({ element, isMustLogin }: { element: React.ReactNode, isMustLogin: boolean }): React.ReactNode => {
    const cookie = new Cookies()
    const location = useLocation();

    if (!isMustLogin) {
        if (cookie.get('token')) {
            return <Navigate to="/" state={{ from: location }} replace />
        }
    }
    else {
        if (!cookie.get('token')) {
            return <Navigate to="/auth" state={{ from: location }} replace />
        }
    }

    return element;
};