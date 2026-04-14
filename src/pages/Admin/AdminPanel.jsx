import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminPanel.css";

export default function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [children, setChildren] = useState([]);
    const [tab, setTab] = useState("users");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadData = async () => {
        try {
            setError("");
            setLoading(true);

            // USERS
            const usersQ = query(collection(db, "users"), orderBy("createdAt", "desc"));
            const usersSnap = await getDocs(usersQ);
            const usersData = usersSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
            setUsers(usersData);

            // CHILDREN
            const childrenQ = query(collection(db, "children"), orderBy("createdAt", "desc"));
            const childrenSnap = await getDocs(childrenQ);
            const childrenData = childrenSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
            setChildren(childrenData);

        } catch (e) {
            console.error(e);
            setError("Нет доступа или ошибка чтения Firestore (проверь rules и admin UID).");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <section className="admin">
            <div className="container admin-wrap">
                <div className="admin-head">
                    <h1 className="admin-title">Админ панель</h1>

                    <div className="admin-tabs">
                        <button
                            className={`admin-tab ${tab === "users" ? "active" : ""}`}
                            onClick={() => setTab("users")}
                            type="button"
                        >
                            Пользователи
                        </button>
                        <button
                            className={`admin-tab ${tab === "children" ? "active" : ""}`}
                            onClick={() => setTab("children")}
                            type="button"
                        >
                            Дети
                        </button>

                        <button className="admin-reload" onClick={loadData} type="button">
                            Обновить
                        </button>
                    </div>
                </div>

                {loading && <div className="admin-info">Загрузка...</div>}
                {error && <div className="admin-error">{error}</div>}

                {!loading && !error && tab === "users" && (
                    <div className="admin-card">
                        <h2 className="admin-subtitle">Список пользователей</h2>

                        <div className="admin-table">
                            <div className="admin-row admin-row--head">
                                <div>Email</div>
                                <div>Имя</div>
                                <div>Role</div>
                                <div>UID (doc id)</div>
                            </div>

                            {users.map((u) => (
                                <div className="admin-row" key={u.id}>
                                    <div>{u.email || "-"}</div>
                                    <div>{u.name || "-"}</div>
                                    <div>{u.role || "-"}</div>
                                    <div className="mono">{u.id}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!loading && !error && tab === "children" && (
                    <div className="admin-card">
                        <h2 className="admin-subtitle">Список детей</h2>

                        <div className="admin-table">
                            <div className="admin-row admin-row--head">
                                <div>Имя</div>
                                <div>Пол</div>
                                <div>Parent UID</div>
                                <div>Аватар</div>
                            </div>

                            {children.map((c) => (
                                <div className="admin-row" key={c.id}>
                                    <div>{c.name || "-"}</div>
                                    <div>{c.gender || "-"}</div>
                                    <div className="mono">{c.parentUid || c.uid || "-"}</div>
                                    <div>
                                        {c.avatar ? (
                                            <img className="admin-avatar" src={c.avatar} alt="" />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
