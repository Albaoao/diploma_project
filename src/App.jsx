import { HashRouter , Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import AdminRoute from "./components/Protected/AdminRoute";
import AdminPanel from "./pages/Admin/AdminPanel";
import Header from "./components/Header/Header";
import HeaderAuth from "./components/Header/HeaderAuth";
import HomePage from "./pages/HomePage";
import WhyBloomyPage from "./pages/WhyBloomyPage";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateChild from "./pages/CreateChild/CreateChild";
import RegisterModal from "./components/Auth/RegisterModal";
import LoginModal from "./components/Auth/LoginModal";
import Footer from "./components/Footer/Footer";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function Layout() {
    const location = useLocation();

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
        });
        return () => unsub();
    }, []);

    // ✅ внутренние страницы (где нужен HeaderAuth)
    const isPrivateRoute =
        location.pathname.startsWith("/dashboard") ||
        location.pathname.startsWith("/create-child") ||
        location.pathname.startsWith("/profile") ||
        location.pathname.startsWith("/admin");


    const hideFooter = location.pathname.startsWith("/admin");

    const openRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const openLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    const closeModals = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(false);
    };

    return (
        <>
            {/* ✅ HeaderAuth только на внутренних страницах */}
            {isPrivateRoute ? (
                <HeaderAuth />
            ) : (
                <Header
                    user={user}                 // ✅ если ты хочешь на главной вместо Войти/Регистрация показывать "Кабинет"
                    onRegisterClick={openRegister}
                    onLoginClick={openLogin}
                />
            )}

            <Routes>
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute user={user}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                {/* ✅ PUBLIC */}
                <Route path="/" element={<HomePage onRegister={openRegister} />} />
                <Route path="/why-bloomy" element={<WhyBloomyPage />} />
                <Route path="/how-it-works" element={<HowItWorks />} />

                {/* ✅ PRIVATE */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute user={user}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-child"
                    element={
                        <ProtectedRoute user={user}>
                            <CreateChild />
                        </ProtectedRoute>
                    }
                />

                {/* ✅ ADMIN */}
                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminPanel />
                        </AdminRoute>
                    }
                />
            </Routes>

            {!hideFooter && <Footer />}

            {/* ✅ МОДАЛКИ */}
            {isRegisterOpen && (
                <RegisterModal
                    onClose={closeModals}
                    onOpenLogin={openLogin}   // ✅ добавь это
                />
            )}


            {isLoginOpen && (
                <LoginModal onClose={closeModals} onOpenRegister={openRegister} />
            )}
        </>
    );
}

export default function App() {
    return (
        <HashRouter >
            <Layout />
        </HashRouter >
    );
}
