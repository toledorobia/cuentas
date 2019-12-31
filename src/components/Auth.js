import React, { useState, useEffect } from "react";
import app from "../firebase";

export const AuthContext = React.createContext({
  currentUser: null,
  loaded: false
});

export const AuthProvider = props => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let subs = app.auth().onAuthStateChanged(user => {
      setLogged(true);
      setUser(user);
      setLoaded(true);
    });

    return () => {
      subs();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ logged, user, loaded }}>
      {props.children}
    </AuthContext.Provider>
  );
};
