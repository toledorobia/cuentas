import React, { useContext } from "react";
import app from "../firebase";
import { Redirect } from "@reach/router";
import { AuthContext } from "../components/Auth";

const LoginPage = props => {
  const { auth } = useContext(AuthContext);

  if (auth.logged === true) {
    return <Redirect noThrow to="/" />;
  }

  const submit = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    if (email.value === null || email.value.length === 0) {
      alert("Debe ingresar email.");
      return;
    }

    if (password.value === null || password.value.length === 0) {
      alert("Debe ingresar password.");
      return;
    }

    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);

      return <Redirect noThrow to="/" />;
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
