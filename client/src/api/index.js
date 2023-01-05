import axios from "axios";

const URL = "http://localhost:5001/posts";
// "https://memories-mern-backend.vercel.app/posts";

export const fetchPosts = () => {
  return axios.get(URL);
};

export const createPost = (newPost) => axios.post(URL, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${URL}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${URL}/${id}`);

export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
