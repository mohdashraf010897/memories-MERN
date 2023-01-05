import jwt_decode from "jwt-decode";

export const parseJwt = (token) => {
  try {
    return jwt_decode(token);
  } catch (error) {
    console.log(error);
    return null;
  }
};
