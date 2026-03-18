import { useState } from "react";
import api from "../services/api";
import styles from "../styles/Message.module.css";

export default function MessageInput({ conversationId, setMessages }) {

  const [message, setMessage] = useState("");

  async function send() {
    if (!message.trim()) return;

    const userMessage = { content: message, sender: "USER" };


    setMessages(prev => [...prev, userMessage]);

    setMessage("");

    try {
      const res = await api.post("/api/chat/message", {
        message,
        conversationId
      });

      const botMessage = { content: res.data.message, sender: "BOT" };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error(error);
    }
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