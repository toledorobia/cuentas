import React from "react";
import { Link, Location } from "@reach/router";
import parse from "url-parse";

const NavLink = props => {
  return (
    <Location>
      {props2 => {
        const parsed = parse(props.to);
        return props2.location.pathname === parsed.pathname ? (
          <li className="nav-item active">
            <Link className="nav-link" {...props} />
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" {...props} />
          </li>
        );
      }}
    </Location>
  );
};

export default NavLink;
