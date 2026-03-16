import { useState } from "react";
import api from "../services/api";
import styles from "../styles/Message.module.css";

export default function MessageInput({ conversationId, setMessages }) {

  const [message, setMessage] = useState("");

  async function send() {
  if (!message.trim()) return;

  const res = await api.post("/api/chat/message", {
    message,
    conversationId
  });

  setMessages(prev => [
    ...prev,
    { content: message, sender: "USER" },
    { content: res.data.message, sender: "BOT" }
  ]);

  setMessage("");
}

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
      />

      <button
        className={styles.button}
        onClick={send}
      >
        Enviar
      </button>
    </div>
  )
}