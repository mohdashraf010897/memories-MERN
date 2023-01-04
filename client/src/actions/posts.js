import * as api from "../api";
import ACTION_TYPES from "../constants/actionTypes";

// Action Creators
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();

      dispatch({ type: ACTION_TYPES.POST.FETCH_ALL, payload: data });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);

      dispatch({ type: ACTION_TYPES.POST.CREATE, payload: data });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);

      dispatch({ type: ACTION_TYPES.POST.UPDATE, payload: data });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);

      dispatch({ type: ACTION_TYPES.POST.DELETE, payload: id });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
};
export const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);

      dispatch({ type: ACTION_TYPES.POST.UPDATE, payload: data });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
};
