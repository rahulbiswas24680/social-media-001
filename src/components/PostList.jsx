import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      <h2 className="text-center my-4">All Posts</h2>
      {postList.length > 0 ? (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      ) : (
        <p className="text-center my-5">No Posts to show.</p>
      )}
    </>
  );
};

export default PostList;
