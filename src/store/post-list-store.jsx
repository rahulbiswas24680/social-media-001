import { Children, createContext, useReducer } from "react";


// store here all the contexts 
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newList = currPostList;

    if (action.type === "DELETE_POST") {
        newList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST") {
        newList = [action.payload, ...currPostList];
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
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        })
    }

    //update from here
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    // pass from here to the context provider 
    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};


const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: 'Going to Mumbai',
        body: 'Hi, friends! I am going to Mumbai for a vacation. I am excited to visit the Gateway of India and explore the city.',
        reactions: 3,
        userId: 'user-9',
        tags: ['vacation', 'travel', 'Mumbai'],
    },
    {
        id: 2,
        title: 'New Year Resolutions',
        body: 'I have set some new year resolutions for myself. I want to improve my coding skills, read more books, and spend more time with family and friends.',
        reactions: 5,
        userId: 'user-10',
        tags: ['new year', 'resolutions', 'self-improvement'],
    },

]

export default PostListProvider;