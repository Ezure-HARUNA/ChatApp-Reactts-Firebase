import React, { useState } from 'react'
import styles from "./ChatInput.module.css"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { auth, storage, db } from  "../firebase"
import firebase from "firebase/app"
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { 
  Avatar, 
  Button, 
  IconButton
} from "@material-ui/core"

const ChatInput: React.FC = () => {
    const user = useSelector(selectUser);
    const [ chatImage, setChatImage ] = useState<File | null>(null);
    const [ chatMessage, setChatMessage ] = useState("");

    const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files![0]) {
        setChatImage(e.target.files![0]);
        e.target.value = "";
      }
    };

     const sendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatImage) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");
      const fileName = randomChar + "_" + chatImage.name;
      const uploadChatImg = storage.ref(`images/${fileName}`).put(chatImage);
      uploadChatImg.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        (err) => {
          alert(err.message);
        },
        async () => {
          await storage
            .ref("images")
            .child(fileName)
            .getDownloadURL()
            .then(async (url) => {
              await db.collection("posts").add({
                avatar: user.photoUrl,
                image: url,
                text: chatMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
              });
            });
        }
      );
    } else {
      db.collection("posts").add({
        avatar: user.photoUrl,
        image: "",
        text: chatMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
      });
    }
    setChatImage(null);
    setChatMessage("");
  };

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
