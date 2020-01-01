import { useContext } from "react";
import { AuthContext } from "./Auth";
import PropTypes from "prop-types";

const IfAuth = props => {
  const { auth } = useContext(AuthContext);

  if (auth.loaded === false) {
    return null;
  }

  if (props.logged === true && auth.logged === false) {
    return null;
  }

  if (props.logged === false && auth.logged === true) {
    return null;
  }

  return props.children;
};

IfAuth.defaultProps = {
  logged: true
};

IfAuth.propTypes = {
  logged: PropTypes.bool.isRequired
};

export default IfAuth;
