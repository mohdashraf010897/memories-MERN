import React, { useEffect, useState } from "react";
import memories from "../../images/memories.png";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") ?? "{}")
  );

  const logout = () => {
    dispatch(logoutAction());
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, logout]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result?.name}
              src={user.result?.imageUrl}
            >
              {user?.result?.name?.charAt(0)}
            </Avatar>{" "}
            <Typography className={classes.userName} variant="h6">
              {user.result?.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.purple}
              color="secondary"
              onClick={logout}
            >
              Logout{" "}
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
