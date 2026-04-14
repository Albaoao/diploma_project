import "./CreateChild.css";
import { useState } from "react";
import dolphin from "../../assets/dolphin.png";

export default function CreateChild() {
    const [email, setEmail] = useState("");
    const [searchState, setSearchState] = useState("idle");
    // idle | found | notfound

    const handleSearch = () => {
        const value = email.trim().toLowerCase();

        if (!value) return;

        // временная демо-логика
        if (value === "child@gmail.com" || value === "danis@gmail.com") {
            setSearchState("found");
        } else {
            setSearchState("notfound");
        }
    };

    const handleAddChild = () => {
        alert("Ребёнок добавлен в ваш кабинет");
    };

    return (
        <section className="add-child-page">
            <div className="container add-child-container">
                {/* HERO */}
                <div className="add-child-hero">
                    <div className="add-child-left">
                        <h1 className="add-child-title">Добавить ребёнка</h1>

                        <p className="add-child-subtitle">
                            Введите почту ребёнка, которую он использовал для входа
                            через Google или Apple.
                        </p>

                        <div className="add-child-search-card">
                            <label className="add-child-label">Почта ребёнка</label>

                            <div className="add-child-search-row">
                                <input
                                    type="email"
                                    placeholder="child@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="add-child-input"
                                />

                                <button
                                    type="button"
                                    className="add-child-search-btn"
                                    onClick={handleSearch}
                                >
                                    Найти
                                </button>
                            </div>

                            <p className="add-child-hint">
                                Если ребёнок ещё не входил в приложение — попросите его
                                войти один раз.
                            </p>
                        </div>
                    </div>

                    <div className="add-child-right">
                        <div className="add-child-blob" />
                        <img src={dolphin} alt="Bloomy dolphin" className="add-child-dolphin" />
                    </div>
                </div>

                {/* RESULTS */}
                <div className="add-child-results">
                    <div className="add-child-result-main">
                        <div className="result-card">
                            {searchState === "idle" && (
                                <div className="result-empty">
                                    <div className="result-empty-icon">📩</div>
                                    <h3>Найдите аккаунт ребёнка</h3>
                                    <p>
                                        Введите email ребёнка в поле выше, чтобы привязать
                                        его аккаунт к вашему кабинету.
                                    </p>
                                </div>
                            )}

                            {searchState === "found" && (
                                <div className="result-found">
                                    <div className="result-avatar">👦</div>

                                    <div className="result-info">
                                        <h3>Аккаунт найден</h3>
                                        <p>
                                            <strong>Email:</strong> {email}
                                        </p>
                                        <p>
                                            <strong>Статус:</strong> не привязан
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="result-add-btn"
                                        onClick={handleAddChild}
                                    >
                                        Добавить в мои дети
                                    </button>
                                </div>
                            )}

                            {searchState === "notfound" && (
                                <div className="result-empty">
                                    <div className="result-empty-icon">⚠️</div>
                                    <h3>Аккаунт ребёнка не найден</h3>
                                    <p>
                                        Проверьте email или попросите ребёнка войти через
                                        Google/Apple, затем повторите поиск.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="add-child-result-side">
                        <div className="side-card">
                            <div className="side-card-icon">💡</div>
                            <h3>Как это работает?</h3>
                            <p>
                                Ребёнок входит в мобильное приложение через Google или Apple.
                                После этого родитель может найти аккаунт ребёнка по email
                                и добавить его в свой кабинет.
                            </p>

                            <button
                                type="button"
                                className="side-btn"
                                onClick={() => setEmail("")}
                            >
                                Понятно
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}