import React from "react";
import { auth } from "../firebase";
import ChatInput from "./ChatInput"
import styles from "./Feed.module.css"

const Feed = () => {
  return (
    <div className={styles.feed}>
      <ChatInput/>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
