import React, { useState } from 'react';

function Forget() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  // Check if passwords match
  if (newPassword !== confirmPassword) {
    setError('Passwords do not match!');
    return;
  }

  const requestData = {
    email: email,
    newPassword: newPassword,
  };

  try {
    const response = await fetch('http://localhost/hospital/admin/password.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (data.success) {
      setSuccessMessage('Password updated successfully!');
      setError('');
    } else {
      setError(data.message || 'Something went wrong.');
      setSuccessMessage('');
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    setError('An error occurred, please try again later.');
    setSuccessMessage('');
  }
};

  

  return (
    <div className="theme-cyan">
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
        <div className="container">
          <div className="navbar-translate n_logo">
            <a className="navbar-brand" href="javascript:void(0);" title>Oreo</a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
        </div>
      </nav>
      <div className="page-header">
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="card-plain">
              <form className="form" onSubmit={handleSubmit}>
                <div className="header">
                  <div className="logo-container">
                    <img
                      src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
                      alt="logo"
                    />
                  </div>
                  <h5>Forgot Password?</h5>
                  <span>Enter your e-mail address below to reset your password.</span>
                </div>
                <div className="content">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-email" />
                    </span>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock" />
                    </span>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock" />
                    </span>
                  </div>
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <div className="footer text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-round btn-block waves-effect waves-light"
                  >
                    SUBMIT
                  </button>
                  <h5>
                    <a href="javascript:void(0);" className="link">
                      Need Help?
                    </a>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
