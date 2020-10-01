import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
            <Link to="/" className="btn-floating waves-effect left">
              <i className="material-icons">keyboard_backspace</i>
            </Link>
            <div className="col s8 offset-s2">
            <div className="col s8 offset-s2 center" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Forgot Password</b>
              </h4>
              <p>
                    Enter your email address and we'll send you an email with instructions to reset your password.
                </p>
            </div> 
            <form noValidate>
              <div className="input-field col s8 offset-s2">
                <input
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable  teal accent-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ForgotPassword
