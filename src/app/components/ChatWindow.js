import { useState, useEffect } from "react";
import api from "../services/api";
import MessageInput from "./MessageInput";
import ChatMessage from "./ChatMessage";
import styles from "../styles/Chat.module.css";

export default function ChatWindow({ conversationId, setConversationId, setRefreshTrigger }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!conversationId) {
        setMessages([]);
        return;
    }
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
        {messages.length === 0 ? (
          <div className={styles.initialMessage}>
            Olá! Como posso te ajudar hoje?
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "USER" ? styles.user : styles.bot
              }
            >
              <ChatMessage content={msg.content} />
            </div>
          ))
        )}
      </div>

      <MessageInput
        conversationId={conversationId}
        setMessages={setMessages}
        setConversationId={setConversationId}
        setRefreshTrigger={setRefreshTrigger}
      />
    </div>
  );
}