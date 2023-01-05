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
