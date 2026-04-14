import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
    const isAdmin = true; // временно для теста, потом проверка из Firestore
    return isAdmin ? children : <Navigate to="/dashboard" replace />;
}
