import axios from "axios";

const URL = "http://localhost:5001/posts";

export const fetchPosts = () => axios.get(URL);

export const createPost = (newPost) => axios.post(URL, newPost);
