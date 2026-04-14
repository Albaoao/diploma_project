import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderAuth() {
    const navigate = useNavigate();
    const isAuth =
        location.pathname.startsWith("/dashboard") ||
        location.pathname.startsWith("/create-child");
        location.pathname.startsWith("/admin");
    const handleLogout = () => {
        // позже сюда добавим firebase signOut
        navigate("/");
    };

    return (
        <header className="header auth-header">
            <div className="container header-inner">

                {/* LOGO */}
                <div className="logo">
                    <img src={logo} alt="Bloomy logo" />
                    <span>Bloomy</span>
                </div>

                <nav className="auth-nav">
                    <Link to="/dashboard">Главная</Link>
                    <Link to="/progress">Прогресс</Link>
                    <Link to="/add-child">Добавить ребенка</Link>
                    <Link to="/profile">Профиль</Link>
                </nav>

                <button className="logout-btn" onClick={handleLogout}>
                    Выйти
                </button>

            </div>
        </header>
    );
}
