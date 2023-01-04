import ACTION_TYPES from "../constants/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.POST.FETCH_ALL:
      return action.payload;
    case ACTION_TYPES.POST.CREATE:
      return [...posts, action.payload];
    case ACTION_TYPES.POST.UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case ACTION_TYPES.POST.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default posts;
