import ACTION_TYPES from "../constants/actionTypes";

const auth = (state = { authData: null }, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case ACTION_TYPES.AUTH.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default auth;
