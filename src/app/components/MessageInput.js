import { useState } from "react";
import api from "../services/api";
import styles from "../styles/Message.module.css";

export default function MessageInput({
  conversationId,
  setMessages,
  setConversationId,
  setRefreshTrigger
}) {
  const [message, setMessage] = useState("");

  async function send() {
  if (!message.trim()) return;

  const userMessage = { content: message, sender: "USER" };

  setMessages(prev => [...prev, userMessage]);
  setMessage("");

  try {
    const res = await api.post("/api/chat/message", {
      message,
      conversationId,
      language: "pt-BR"
    });

    const convId = conversationId || res.data.conversationId;

    if (!conversationId && convId) {
      setConversationId(convId);
    }

    setRefreshTrigger(prev => prev + 1);

    const updated = await api.get(`/api/chat/conversations/${convId}/messages`);
    setMessages(updated.data);

  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
      />

      <button className={styles.button} onClick={send}>
        Enviar
      </button>
    </div>
  );
}