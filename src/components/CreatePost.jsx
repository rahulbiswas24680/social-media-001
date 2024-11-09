import React, { useRef, useContext } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/[ ,]+/);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(
      userId,
      postTitle,
      postBody,
      reactions,
      tags,
    );
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h2 className="text-center my-4">Add a New Post</h2>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter User Id is"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="body"
          placeholder="Write your thoughts here..."
          rows={4}
          ref={postBodyElement}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post?"
          ref={reactionsElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Add tags for your post"
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
