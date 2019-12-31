import React, { useContext } from "react";
import app from "../firebase";
import { Redirect } from "@reach/router"
import { AuthContext } from "../components/Auth";

const LoginPage = (props) => {
  const { user } = useContext(AuthContext);

  if (user != null) {
    return <Redirect noThrow to="/" />;
  }

  const submit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    if (email.value === null || email.value.length === 0) {
      alert("Debe ingresar email."); return;
    }

    if (password.value === null || password.value.length === 0) {
      alert("Debe ingresar password."); return;
    }

    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);

      return <Redirect noThrow to="/" />;
    } catch (error) {
      alert(error);
    }
  };

  return <>
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </>;
}

export default LoginPage;
