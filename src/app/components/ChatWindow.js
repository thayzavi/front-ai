import { useState, useEffect } from "react";
import api from "../services/api";
import MessageInput from "./MessageInput";
import styles from "../styles/Chat.module.css";

export default function ChatWindow({ conversationId }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
  if (!conversationId) return;

  async function load() {
    try {
      const res = await api.get(`/api/chat/conversations/${conversationId}/messages`);
      setMessages(res.data);
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
    }
  }

  load();
}, [conversationId]);

    return (
        <div className={styles.chatWindow}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            msg.sender === "USER"
                            ? styles.user
                            : styles.bot
                        }
                    >
                        {msg.content}
                    </div>
                ))}
            </div>

            <MessageInput conversationId={conversationId} setMessages={setMessages} />
        </div>
    )  

}