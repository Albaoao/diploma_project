import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import "./AuthModal.css";
import { useNavigate } from "react-router-dom";

export default function RegisterModal({ onClose, onOpenLogin  }) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async () => {
        setError("");

        if (!accepted) {
            setError("Необходимо принять пользовательское соглашение");
            return;
        }

        if (!name || !email || !password) {
            setError("Заполните все обязательные поля");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const uid = userCredential.user.uid;


            await setDoc(doc(db, "users", uid), {
                uid,
                name,
                email,
                role: "parent",
                createdAt: serverTimestamp(),
            });

            onClose();
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>

                <h2>Регистрация</h2>
                <p className="subtitle">Введите свои данные чтобы зарегистрироваться</p>

                <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Имя
                        <input
                            type="text"
                            placeholder="Введите имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

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
                            <input
                                type="password"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="eye">👁</span>
                        </div>
                    </label>

                    <label className="terms">
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                        />
                        <span>
              Я принимаю условия{" "}
                            <a href="/Bloomy_Пользовательское_соглашение" download>
  Пользовательского соглашения
</a>



            </span>
                    </label>

                    {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

                    <button type="button" className="submit-btn" onClick={handleRegister}>
                        Зарегистрироваться
                    </button>
                </form>

                <div className="login-link">
                    Уже есть аккаунт?{" "}
                    <span
                        style={{ cursor: "pointer", color: "#325895" }}
                        onClick={onOpenLogin}
                    >
    Войти
  </span>
                </div>

            </div>
        </div>
    );
}
