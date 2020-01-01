import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const LoadingPage = props => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <FontAwesomeIcon icon={faSync} fixedWidth spin size="3x" />
      </div>
    </div>
  );
};

export default LoadingPage;
