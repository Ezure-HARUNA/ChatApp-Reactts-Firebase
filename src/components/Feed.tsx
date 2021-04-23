import React, { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { db } from "../firebase";
import ChatInput from "./ChatInput";
import Post from "./Post";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);

  //!! 一旦配列を作って、reverseして、setPostしてみてください！

   useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        // setPosts(
          snapshot.forEach(function(doc) {
            posts.push({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
            })
            
          })
        // )
      );
      const reverse = posts.reverse();
      // console.log(reverse)
      const set = setPosts(reverse)
      console.log(posts)


  // useEffect(() => {
  //   const unSub = db
  //     .collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           avatar: doc.data().avatar,
  //           image: doc.data().image,
  //           text: doc.data().text,
  //           timestamp: doc.data().timestamp,
  //           username: doc.data().username,
  //         }))
  //       )
  //     );
    return () => {
      unSub();
    };
  }, []);

     
      
    

  return (
    <div className={styles.feed}>
      <ChatInput />

     
           {posts[0]?.id && (
        <>
          {posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              avatar={post.avatar}
              image={post.image}
              text={post.text}
              timestamp={post.timestamp}
              username={post.username}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Feed;