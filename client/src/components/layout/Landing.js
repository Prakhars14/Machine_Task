import React, { Component } from "react";
import { Link } from "react-router-dom";class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh", marginTop:'30px', borderRadius:'5px' }} className="container valign-wrapper light-blue lighten-5 hoverable ">
        <div className="row">
          <div className="col s12 center-align">
            <h4>Register if you are new to Machine Task</h4>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light teal accent-4 hoverable"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}export default Landing;