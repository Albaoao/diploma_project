import "./Profile.css";
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    const user = auth.currentUser;

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [displayName, setDisplayName] = useState("");
    const [role, setRole] = useState("parent"); // parent / teacher / admin (если надо)
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const email = useMemo(() => user?.email || "—", [user]);
    const uid = useMemo(() => user?.uid || "", [user]);

    useEffect(() => {
        const load = async () => {
            setError("");
            setSuccess("");

            if (!user) {
                setLoading(false);
                return;
            }

            try {
                // 1) из auth (displayName)
                setDisplayName(user.displayName || "");

                // 2) из Firestore users/{uid}
                const ref = doc(db, "users", user.uid);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    const data = snap.data();
                    setRole(data.role || "parent");
                    setPhone(data.phone || "");
                    setCity(data.city || "");
                    if (data.name && !user.displayName) setDisplayName(data.name);
                } else {
                    // если документа нет — создадим базовый, чтобы дальше проще было
                    await setDoc(
                        ref,
                        {
                            uid: user.uid,
                            email: user.email || null,
                            role: "parent",
                            createdAt: serverTimestamp(),
                        },
                        { merge: true }
                    );
                }
            } catch (e) {
                console.error(e);
                setError("Не удалось загрузить профиль.");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [user]);

    const handleSave = async () => {
        setError("");
        setSuccess("");

        if (!user) {
            setError("Сначала войдите в аккаунт.");
            return;
        }

        if (!displayName.trim()) {
            setError("Введите имя (отображаемое).");
            return;
        }

        try {
            setSaving(true);

            // 1) обновим имя в Firebase Auth (для удобства)
            await updateProfile(user, { displayName: displayName.trim() });

            // 2) сохраним в Firestore
            const ref = doc(db, "users", user.uid);
            await setDoc(
                ref,
                {
                    uid: user.uid,
                    email: user.email || null,
                    name: displayName.trim(),
                    role,
                    phone: phone.trim() || null,
                    city: city.trim() || null,
                    updatedAt: serverTimestamp(),
                },
                { merge: true }
            );

            setSuccess("Профиль сохранён ✅");
        } catch (e) {
            console.error(e);
            setError("Не удалось сохранить изменения.");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    if (loading) {
        return (
            <section className="profile">
                <div className="container profile-content">
                    <div className="profile-card">
                        <h1 className="profile-title">Профиль</h1>
                        <p className="profile-muted">Загрузка...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="profile">
            <div className="container profile-content">
                <div className="profile-card">
                    <div className="profile-head">
                        <div>
                            <h1 className="profile-title">Профиль</h1>
                            <p className="profile-muted">
                                Аккаунт: <b>{email}</b>
                            </p>
                            <p className="profile-muted small">UID: {uid}</p>
                        </div>

                        <button className="profile-logout" onClick={handleLogout}>
                            Выйти
                        </button>
                    </div>

                    <div className="profile-grid">
                        <label className="profile-label">
                            Имя (отображаемое)
                            <input
                                className="profile-input"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="Например: Айгуль"
                            />
                        </label>

                        <label className="profile-label">
                            Роль
                            <select
                                className="profile-input"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="parent">Родитель</option>
                                <option value="teacher">Педагог</option>
                                {/* admin обычно назначается вручную */}
                                <option value="admin">Администратор</option>
                            </select>
                        </label>

                        <label className="profile-label">
                            Телефон (необязательно)
                            <input
                                className="profile-input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+7 ..."
                            />
                        </label>

                        <label className="profile-label">
                            Город (необязательно)
                            <input
                                className="profile-input"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Алматы"
                            />
                        </label>
                    </div>

                    {error && <div className="profile-alert error">{error}</div>}
                    {success && <div className="profile-alert success">{success}</div>}

                    <div className="profile-actions">
                        <button
                            className="profile-save"
                            onClick={handleSave}
                            disabled={saving}
                        >
                            {saving ? "Сохранение..." : "Сохранить изменения"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
