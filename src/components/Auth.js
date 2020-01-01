import React, { useState, useEffect } from "react";
import app from "../firebase";

export const AuthContext = React.createContext({
  auth: null,
  logout: null
});

export const AuthProvider = props => {
  const [auth, setAuth] = useState({
    uid: null,
    user: null,
    logged: false,
    loaded: false
  });
  // const [logged, setLogged] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  const logout = () => {
    app.auth().signOut();
  };

  useEffect(() => {
    let unsubscribe = app.auth().onAuthStateChanged(user => {
      setAuth({
        uid: user != null ? user.uid : null,
        user: user,
        logged: user != null,
        loaded: true
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ auth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
