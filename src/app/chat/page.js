"use client";

import { useState } from "react";
import ChatSiderbar from "../components/ChatSiderbar";
import ChatWindow from "../components/ChatWindow";
import styles from "../styles/Chat.module.css";

export default function ChatPage() {

  const [conversationId, setConversationId] = useState(null);

  return (
    <div className={styles.container}>
      
      <ChatSiderbar setConversationId={setConversationId} />

      <ChatWindow conversationId={conversationId} />

    </div>
  );
}