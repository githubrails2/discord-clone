import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import "./App.css";
import { Sidebar, Chat, Login } from "./components";
import { auth } from "./config/firebase";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <Fragment>
          <Sidebar />
          <Chat />{" "}
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
