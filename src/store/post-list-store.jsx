import { Children, createContext, useReducer } from "react";


// store here all the contexts 
export const PostList = createContext({
    postList: [],
    addInitialPosts: () => { },
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newList = currPostList;

    if (action.type === "DELETE_POST") {
        newList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST") {
        newList = [action.payload, ...currPostList];
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newList = action.payload.posts;
    }

    return newList;
};

const PostListProvider = ({ children }) => {
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            },
        })
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            },
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        })
    }

    //update from here
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    // pass from here to the context provider 
    return (
        <PostList.Provider value={{ postList, addInitialPosts, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};



export default PostListProvider;