import "./ForgotPassword.css";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import dolphin from "../../assets/dolphin.png"; // твой дельфин

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleReset = async () => {
        setError("");
        setMessage("");

        if (!email) {
            setError("Введите электронную почту");
            return;
        }

        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            setMessage("Мы отправили ссылку для восстановления пароля на вашу почту.");
        } catch (err) {
            setError("Не удалось отправить письмо. Проверьте e-mail.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="forgot">
            <div className="forgot-card">
                <div className="forgot-left">
                    <h1>Забыли пароль?</h1>
                    <p>
                        Введите e-mail, который вы использовали при регистрации.
                        Мы отправим ссылку для восстановления.
                    </p>

                    <input
                        type="email"
                        placeholder="Электронная почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {error && <div className="error">{error}</div>}
                    {message && <div className="success">{message}</div>}

                    <button onClick={handleReset} disabled={loading}>
                        {loading ? "Отправка..." : "Восстановить пароль"}
                    </button>

                    <button
                        className="back-btn"
                        onClick={() => navigate("/")}
                    >
                        ← Вернуться на главную
                    </button>
                </div>

                <div className="forgot-right">
                    <img src={dolphin} alt="dolphin" />
                </div>
            </div>
        </section>
    );
}
