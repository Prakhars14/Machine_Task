import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white row">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s12 brand-logo white-text light-blue darken-4"
            >
              <span className="center">Machine Task</span>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}export default Navbar;