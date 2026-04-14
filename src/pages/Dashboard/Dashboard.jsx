import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import dolphin from "../../assets/dolphin.png"; // можешь заменить на dolphin2, как в макете

export default function Dashboard() {
    const navigate = useNavigate();

    const parentName = "Анна";
    const activeChild = { name: "Данис", age: 7 };

    return (
        <section className="dash">
            <div className="container">
                {/* HERO CARD */}
                <div className="dash-hero-card">
                    <div className="dash-hero-inner">
                        <div className="dash-hero-left">
                            <h1 className="dash-title">Здравствуйте, {parentName}!</h1>

                            <div className="dash-child-select">
                                <div className="dash-child-avatar">👦</div>
                                <div className="dash-child-meta">
                                    <div className="dash-child-name">
                                        {activeChild.name}, {activeChild.age} лет
                                    </div>
                                </div>
                                <div className="dash-child-caret">▾</div>
                            </div>

                            <button
                                className="dash-add-btn"
                                type="button"
                                onClick={() => navigate("/create-child")}
                            >
                                + Добавить ребенка
                            </button>
                        </div>

                        <div className="dash-hero-right">
                            <div className="dash-hero-blob" />
                            <img className="dash-dolphin" src={dolphin} alt="Bloomy dolphin" />
                        </div>
                    </div>
                </div>

                {/* TOP ROW: 3 stats + recommendations */}
                <h2 className="dash-section-title">Последняя активность</h2>

                <div className="dash-top-grid">
                    <div className="dash-stat">
                        <div className="dash-stat-icon">✅</div>
                        <div>
                            <div className="dash-stat-value">8 заданий</div>
                            <div className="dash-stat-caption">выполнено на этой неделе</div>
                        </div>
                    </div>

                    <div className="dash-stat">
                        <div className="dash-stat-icon">🕒</div>
                        <div style={{ width: "100%" }}>
                            <div className="dash-stat-value">14 мин.</div>
                            <div className="dash-stat-caption">Среднее время занятия</div>
                            <div className="dash-mini-bar">
                                <div className="dash-mini-bar-fill" style={{ width: "55%" }} />
                            </div>
                        </div>
                    </div>

                    <div className="dash-stat">
                        <div className="dash-stat-icon">📊</div>
                        <div style={{ width: "100%" }}>
                            <div className="dash-stat-value">Прогресс {activeChild.name}</div>
                            <div className="dash-mini-bar">
                                <div className="dash-mini-bar-fill" style={{ width: "62%" }} />
                            </div>
                        </div>
                        <div className="dash-badge">⭐</div>
                    </div>

                    <div className="dash-panel">
                        <h3 className="dash-panel-title">Рекомендации</h3>

                        <ul className="dash-list">
                            <li>Добавить задания на внимание</li>
                            <li>Повторить модуль “Память — карточки”</li>
                            <li>Снизить сложность занятий на логику</li>
                        </ul>

                        <div className="dash-actions">
                            <button className="dash-action" type="button" onClick={() => navigate("/progress")}>
                                <div className="dash-action-ico">📈</div>
                                Открыть<br />прогресс
                            </button>

                            <button className="dash-action" type="button" onClick={() => navigate("/profile")}>
                                <div className="dash-action-ico">👤</div>
                                Перейти<br />к профилю
                            </button>

                            <button className="dash-action" type="button" onClick={() => navigate("/create-child")}>
                                <div className="dash-action-ico">➕</div>
                                + Добавить<br />ребенка
                            </button>
                        </div>
                    </div>
                </div>

                {/* SECOND ROW: activity cards */}
                <h2 className="dash-section-title">Последняя активность</h2>

                <div className="dash-activity">
                    <div className="dash-card">
                        <div className="dash-card-head">
                            <div className="dash-card-icon">🧠</div>
                            <div>
                                <div className="dash-card-title">Память — карточки</div>
                                <div className="dash-card-sub">5 мин • 4/5</div>
                            </div>
                        </div>

                        <div className="dash-progress">
                            <div className="dash-progress-fill" style={{ width: "80%" }} />
                        </div>

                        <div className="dash-chip-row">
                            <span className="dash-chip ok">✔</span>
                            <span className="dash-chip">🏃</span>
                        </div>
                    </div>

                    <div className="dash-card">
                        <div className="dash-card-head">
                            <div className="dash-card-icon">🧩</div>
                            <div>
                                <div className="dash-card-title">Логика — фигуры</div>
                                <div className="dash-card-sub">Уровень повышен</div>
                            </div>
                        </div>
                        <div className="dash-note">✨ Уровень повышен!</div>
                    </div>

                    <div className="dash-card">
                        <div className="dash-card-head">
                            <div className="dash-card-icon">🎯</div>
                            <div>
                                <div className="dash-card-title">Внимание — последовательности</div>
                                <div className="dash-card-sub">12 мин • 88%</div>
                            </div>
                        </div>

                        <div className="dash-chip-row">
                            <span className="dash-pill">12 мин</span>
                            <span className="dash-pill strong">88%</span>
                        </div>
                    </div>
                </div>

                {/* небольшой запас снизу, чтобы футер не "давил" */}
                <div style={{ height: 24 }} />
            </div>
        </section>
    );
}