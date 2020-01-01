import React, { useState, useEffect, useContext } from "react";
import app from "../firebase";
import { AuthContext } from "./Auth";

export const StoreContext = React.createContext({
  configs: {},
  cuentas: []
});

export const StoreProvider = props => {
  const { auth } = useContext(AuthContext);

  const [cuentas, setCuentas] = useState([]);
  const [configs, setConfigs] = useState({});

  useEffect(() => {
    if (auth.uid == null) {
      setConfigs({ sueldo: 0 });
      return () => {};
    }

    let unsubscribe = app
      .firestore()
      .collection("configs")
      .doc(auth.uid)
      .onSnapshot(
        doc => {
          if (doc.exists) {
            setConfigs(doc.data());
          } else {
            setConfigs({ sueldo: 0 });
          }
        },
        err => {
          console.log(err);
        }
      );

    return () => unsubscribe();
  }, [auth.uid]);

  return (
    <StoreContext.Provider value={{ configs, cuentas }}>
      {props.children}
    </StoreContext.Provider>
  );
};
