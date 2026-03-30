import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";
import styles from "../styles/Siderbar.module.css";

export default function ChatSidebar({ setConversationId, refreshTrigger }) {
  const [conversations, setConversations] = useState([]);
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  async function loadConversations() {
    try {
      const res = await api.get("/api/chat/conversations");
      setConversations(res.data);
    } catch (error) {
      console.error("Erro ao carregar conversas:", error);
    }
  }

  useEffect(() => {
    loadConversations();
  }, [refreshTrigger]);

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>
        Code<span>Tutor AI</span>
      </h1>

      <button
        className={styles.btnNewChat}
        onClick={() => setConversationId(null)}
      >
        Nova Conversa
      </button>

      {conversations.map((conv) => (
        <div
          key={conv.id}
          className={styles.item}
          onClick={() => setConversationId(conv.id)}
        >
          {conv.title || "Sem título"}
        </div>
      ))}

      <button className={styles.logout} onClick={logout}>
        Sair
      </button>
    </div>
  );
}