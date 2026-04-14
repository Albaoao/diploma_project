import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export default function AdminRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setAllowed(false);
                setLoading(false);
                return;
            }

            try {
                const snap = await getDoc(doc(db, "users", user.uid));
                const data = snap.exists() ? snap.data() : null;

                setAllowed(data?.role === "admin");
            } catch (e) {
                setAllowed(false);
            } finally {
                setLoading(false);
            }
        });

        return () => unsub();
    }, []);

    if (loading) return <div style={{ padding: 40 }}>Загрузка...</div>;
    if (!allowed) return <Navigate to="/dashboard" replace />;

    return children;
}
