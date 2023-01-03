import * as api from "../api";

// Action Creators
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();

      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {}
  };
};
