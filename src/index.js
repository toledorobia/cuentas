import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { AuthProvider, AuthContext } from "./components/Auth";
// import app from "./firebase";

import PrivateRoute from "./components/PrivateRoute";
import LoadingPage from "./pages/LoadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import "./styles.css";

const App = () => {
  const { logged } = useContext(AuthContext);

  if (!logged) {
    return <LoadingPage />;
  }

  return (
    <>
      <Router>
        <NotFoundPage default />
        <PrivateRoute path="/">
          <HomePage path="/" />
        </PrivateRoute>
        <LoginPage path="/login" />
      </Router>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  rootElement
);
