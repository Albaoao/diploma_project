import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js"; // ✅ ДОБАВЬ db (Firestore)
import { doc, getDoc } from "firebase/firestore"; // ✅ ДОБАВЬ
import "./AuthModal.css";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ onClose, onOpenRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        setError("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            console.log("Вход выполнен:", userCredential.user);

            // ✅ ДОБАВЬ: читаем пользователя из Firestore
            const userDocRef = doc(db, "users", uid);
            const userSnap = await getDoc(userDocRef);

            // ✅ ДОБАВЬ: определяем роль
            const role = userSnap.exists() ? userSnap.data().role : "parent";

            onClose();

            // ✅ ИЗМЕНИ: переход по роли
            if (role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            console.error(err);
            setError("Неверный email или пароль");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>

                <h2>Войти</h2>
                <p className="subtitle">Введите свои данные для входа в аккаунт</p>

                <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Электронная почта
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        Пароль
                        <div className="password-field">
                            <div className="password-field">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Введите пароль"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <span
                                    className="eye"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    role="button"
                                    aria-label="Показать пароль"
                                >
        {showPassword ? "🙈" : "👁"}
    </span>
                            </div>

                        </div>
                    </label>

                    {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

                    <button type="button" className="submit-btn" onClick={handleLogin}>
                        Войти
                    </button>
                </form>

                <div className="login-link" style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ cursor: "pointer", color: "#325895" }} onClick={onOpenRegister}>
            Зарегистрироваться
          </span>

                    <span
                        style={{ cursor: "pointer", color: "#325895" }}
                        onClick={() => {
                            onClose();
                            navigate("/forgot-password");
                        }}
                    >
    Забыли пароль?
</span>

                </div>
            </div>
        </div>
    );
}
