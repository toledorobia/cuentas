import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { AuthProvider, AuthContext } from "./components/Auth";

import PrivateRoute from "./components/PrivateRoute";
import LoadingPage from "./pages/LoadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

import Nav from "./components/Nav";

import "./bootstrap";
import "./styles.css";

const App = () => {
  const { auth } = useContext(AuthContext);

  console.log("App");

  if (!auth.loaded) {
    return <LoadingPage />;
  }

  return (
    <>
      <Nav />
      <main role="main" className="container-fluid">
        <Router>
          <NotFoundPage default />
          <PrivateRoute path="/">
            <HomePage path="/" />
            <SettingsPage path="/settings" />
          </PrivateRoute>
          <LoginPage path="/login" />
        </Router>
      </main>
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
