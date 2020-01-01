import React, { useState, useEffect } from "react";
import app from "../firebase";

export const AuthContext = React.createContext({
  currentUser: null,
  loaded: false
});

export const AuthProvider = props => {
  const [auth, setAuth] = useState({
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
    let subs = app.auth().onAuthStateChanged(user => {
      setAuth({
        user: user,
        logged: user != null,
        loaded: true
      });
    });

    return () => {
      subs();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ auth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
