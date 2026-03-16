import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";
import styles from "../styles/Siderbar.module.css";

export default function ChatSidebar({ setConversationId }) {

    const [conversations, setConversations] = useState([]);
    const router = useRouter();

    function logout() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    useEffect(() => {
        async function load() {
            try {
                const res = await api.get("/api/chat/conversations");
                setConversations(res.data);
            } catch (error) {
                console.error("Erro ao carregar conversas:", error);
            }
        }

        load();
    }, []);

    return (
        <div className={styles.sidebar}>
            
            <h1 className={styles.logo}>Code<span>Tutor AI</span></h1>
            {conversations.map(conv => (
                <div
                    key={conv.id}
                    className={styles.item}
                    onClick={() => setConversationId(conv.id)}
                >
                    {conv.title || "Sem título"}
                </div>
            ))}
            <button
                className={styles.logout}
                onClick={logout}
            >
                Sair
            </button>
        </div>
    )
}