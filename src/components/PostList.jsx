import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(data => {
          console.log(data.posts);
          addInitialPosts(data.posts);
        });

    setDataFetched(true);
  }


  const handleGetPostClick = () => {
    // console.log("get posts");
    
  };

  return (
    <>
      <h2 className="text-center my-4">All Posts</h2>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
