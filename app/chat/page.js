"use client";

import { useState } from "react";
import ChatSiderbar from "../components/ChatSiderbar";
import ChatWindow from "../components/ChatWindow";
import styles from "../styles/Chat.module.css";

export default function ChatPage() {
  const [conversationId, setConversationId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);


  return (

    <div className={styles.container}>

      <ChatSiderbar 
      setConversationId={setConversationId}
      refreshTrigger={refreshTrigger} />

      <ChatWindow 
      conversationId={conversationId} 
      setConversationId={setConversationId}
      setRefreshTrigger={setRefreshTrigger}
      />
    </div>);
}