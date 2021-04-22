import React from "react";
import { auth } from "../firebase";
import ChatInput from "./ChatInput"

const Feed = () => {
  return (
    <div>
      <ChatInput/>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
