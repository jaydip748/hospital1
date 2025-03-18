import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 

  const reg = () => {
    // Clear previous error messages
    setErrorMessage('');

    axios
      .post("http://localhost/hospital/user/register.php", {
        name: name,
        email: email,
        password: password,
        action: "add",
      })
      .then((response) => {
        if (response.data.status === "error") {
          setErrorMessage(response.data.message); // Show error message
        } else {
          alert("Registration successful!");
          navigate("/Login");

          // Clear form after successful registration
          setName('');
          setEmail('');
          setPassword('');
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error); // Log error for debugging
      });
  };

  return (
    <div className="Register">
      <div className="theme-cyan authentication sidebar-collapse">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
          <div className="container">
            <div className="navbar-translate n_logo">
              <a
                className="navbar-brand"
                href="javascript:void(0);"
                title
                target="_blank"
              >
                Oreo
              </a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
          </div>
        </nav>

        {/* Page Header */}
        <div className="page-header">
          <div
            className="page-header-image"
            style={{ backgroundImage: "url(../assets1/images/login.jpg)" }}
          />
          <div className="container">
            <div className="col-md-12 content-center">
              <div className="card-plain">
                <form className="form" method action="#">
                  <div className="header">
                    <div className="logo-container">
                      <img
                        src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
                        alt
                      />
                    </div>
                    <h5>Sign Up</h5>
                    <span>Register a new membership</span>
                  </div>

                  {/* Display Error Message */}
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}

                  <div className="content">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account-circle" />
                      </span>
                    </div>

                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-email" />
                      </span>
                    </div>

                    <div className="input-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock" />
                      </span>
                    </div>
                  </div>

                  <div className="checkbox">
                    <input id="terms" type="checkbox" />
                    <label htmlFor="terms">
                      I read and agree to the <a href="javascript:void(0);">terms of usage</a>
                    </label>
                  </div>
                  <div className="footer text-center">
                    <a
                      href="javascript:void(0);"
                      onClick={reg}
                      className="btn btn-primary btn-round btn-block  waves-effect waves-light"
                    >
                      SIGN UP
                    </a>
                    <h5>
                      <a className="link" href="/login">
                        You already have a membership?
                      </a>
                    </h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <nav>
              <ul>
                <li>
                  <a href="http://thememakker.com/contact/" target="_blank">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="http://thememakker.com/about/" target="_blank">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">FAQ</a>
                </li>
              </ul>
            </nav>
            <div className="copyright">
              ©, <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SingUp;
