import * as api from "../api";
import ACTION_TYPES from "../constants/actionTypes";

// Action Creators
export const triggerAuth = (data) => ({
  type: ACTION_TYPES.AUTH.AUTH,
  data,
});

export const logoutAction = () => ({
  type: ACTION_TYPES.AUTH.LOGOUT,
});

export const signupAction = (formData, history) => {
  return async (dispatch) => {
    try {
      // sign up the user
      const { data } = await api.signUp(formData);

      dispatch(triggerAuth(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signinAction = (formData, history) => {
  return async (dispatch) => {
    try {
      // sign in the user
      const { data } = await api.signIn(formData);

      dispatch(triggerAuth(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
