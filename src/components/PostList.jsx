import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [ fetching, setFetching ] = useState(false);

  useEffect(() => {
    setFetching(true);
    console.log('fetch started!!');

    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then(data => {
        console.log(data.posts);
        addInitialPosts(data.posts);
        setFetching(false);
        console.log('fetch returned!!');
      });
    
    return () => {
      console.log('Cleaning up useeffect.');
      controller.abort();
    }
  }, []);


  const handleGetPostClick = () => {
    // console.log("get posts");

  };

  return (
    <>
      <h2 className="text-center my-4">All Posts</h2>
      { fetching && <LoadingSpinner /> }
      { !fetching && postList.length === 0 && <WelcomeMessage />}
      { !fetching && postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
