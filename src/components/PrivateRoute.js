import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import { AuthContext } from "./Auth";

const PrivateRoute = (props) => {
  const { logged } = useContext(AuthContext);

  if (logged == null) {
    return <Redirect noThrow to="login" />;
  }

  return props.children;
};

export default PrivateRoute;
