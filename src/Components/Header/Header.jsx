import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ onRegisterClick, onLoginClick }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="header">
            <div className="container">
                {/* LOGO */}
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Bloomy logo" />
                    <span>Erekshe alem</span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="header-nav">
                    <Link to="/why-bloomy" className="nav-link">
                        Почему Erekshe alem
                    </Link>

                    <Link to="/how-it-works" className="nav-link">
                        Как это работает
                    </Link>
                </nav>

                {/* DESKTOP ACTION BUTTONS */}
                <div className="header-actions">
                    <button className="header-btn" onClick={onRegisterClick}>
                        Регистрация
                    </button>

                    <button className="header-btn" onClick={onLoginClick}>
                        Войти
                    </button>
                </div>

                {/* MOBILE BURGER */}
                <button
                    className="burger-btn"
                    type="button"
                    aria-label="Открыть меню"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <Link
                    to="/why-bloomy"
                    className="mobile-menu-link"
                    onClick={closeMobileMenu}
                >
                    Почему Erekshe alem
                </Link>

                <Link
                    to="/how-it-works"
                    className="mobile-menu-link"
                    onClick={closeMobileMenu}
                >
                    Как это работает
                </Link>

                <button
                    className="mobile-menu-btn"
                    onClick={() => {
                        closeMobileMenu();
                        onRegisterClick();
                    }}
                >
                    Регистрация
                </button>

                <button
                    className="mobile-menu-btn"
                    onClick={() => {
                        closeMobileMenu();
                        onLoginClick();
                    }}
                >
                    Войти
                </button>
            </div>
        </header>
    );
}

export default Header;