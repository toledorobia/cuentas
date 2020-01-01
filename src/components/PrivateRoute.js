import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import { AuthContext } from "./Auth";

const PrivateRoute = props => {
  const { auth } = useContext(AuthContext);

  if (auth.logged === false) {
    return <Redirect noThrow to="login" />;
  }

  return props.children;
};

export default PrivateRoute;
