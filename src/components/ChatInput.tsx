import React from 'react'
import styles from "./ChatInput.module.css"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { auth } from  "../firebase"
import { Avatar } from "@material-ui/core"

const ChatInput: React.FC = () => {
    const user = useSelector(selectUser);
    return (
        <div>
          <Avatar
            className={styles.chat_avatar}
            src={user.photoUrl}
            onClick={async () => {
              await auth.signOut();
            }}
          />
        </div>
    )
}

export default ChatInput
