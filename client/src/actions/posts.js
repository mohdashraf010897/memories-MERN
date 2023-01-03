import * as api from "../api";

// Action Creators
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();

      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);

      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};
