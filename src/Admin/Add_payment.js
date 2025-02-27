import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Add_payment() {
  const [payment, setpayment] = useState("");
  const [patient, setpatient] = useState("");
  const [doctor, setdoctor] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const [discount, setdiscount] = useState("");
  const [payment_method, setpayment_method] = useState("");

  const finalPayment = (e) => {
    e.preventDefault();
    const blogdata = new FormData();
    blogdata.append("payment", payment);
    blogdata.append("patient", patient);
    blogdata.append("doctor", doctor);
    blogdata.append("date", date);
    blogdata.append("amount", amount);
    blogdata.append("discount", discount);
    blogdata.append("payment_method", payment_method);

    axios
      .post("http://localhost/hospital/admin/add_payment.php", blogdata)
      .then(function (response) {
        // handle success
        console.log(response);
        alert("Payment Added");
        window.location.reload(true);
        document.getElementById("payment").value = " ";
        document.getElementById("patient").value = " ";
        document.getElementById("doctor").value = " ";
        document.getElementById("date").value = " ";
        document.getElementById("amount").value = " ";
        document.getElementById("discount").value = " ";
        document.getElementById("payment_method").value = " ";
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className="theme-cyan">
      {/* Page Loader */}
      <div className="page-loader-wrapper">
        <div className="loader">
          <div className="m-t-30">
            <img
              className="zmdi-hc-spin"
              src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
              width={48}
              height={48}
              alt="Oreo"
            />
          </div>
          <p>Please wait...</p>
        </div>
      </div>
      {/* Overlay For Sidebars */}
      <div className="overlay" />
      {/* Top Bar */}

      {/* Left Sidebar */}
      <Sidebar />
      {/* Right Sidebar */}
      {/* Chat-launcher */}
      <div className="chat-launcher" />
      <div className="chat-wrapper">
        <div className="card">
          <div className="header">
            <ul className="list-unstyled team-info margin-0">
              <li className="m-r-15">
                <h2>Doctor Team</h2>
              </li>
              <li>
                <img src="assets1/images/xs/avatar2.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="assets1/images/xs/avatar3.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="assets1/images/xs/avatar4.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="assets1/images/xs/avatar6.jpg" alt="Avatar" />
              </li>
              <li>
                <a href="javascript:void(0);" title="Add Member">
                  <i className="zmdi zmdi-plus-circle" />
                </a>
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="chat-widget">
              <ul className="chat-scroll-list clearfix">
                <li className="left float-left">
                  <img
                    src="../assets/images/xs/avatar3.jpg"
                    className="rounded-circle"
                    alt
                  />
                  <div className="chat-info">
                    <a className="name" href="#">
                      Alexander
                    </a>
                    <span className="datetime">6:12</span>
                    <span className="message">Hello, John </span>
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span className="datetime">6:15</span>{" "}
                    <span className="message">
                      Hi, Alexander
                      <br /> How are you!
                    </span>{" "}
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span className="datetime">6:16</span>{" "}
                    <span className="message">
                      There are many variations of passages of Lorem Ipsum
                      available
                    </span>{" "}
                  </div>
                </li>
                <li className="left float-left">
                  {" "}
                  <img
                    src="../assets/images/xs/avatar2.jpg"
                    className="rounded-circle"
                    alt
                  />
                  <div className="chat-info">
                    {" "}
                    <a className="name" href="#">
                      Elizabeth
                    </a>{" "}
                    <span className="datetime">6:25</span>{" "}
                    <span className="message">
                      Hi, Alexander,
                      <br /> John <br /> What are you doing?
                    </span>{" "}
                  </div>
                </li>
                <li className="left float-left">
                  {" "}
                  <img
                    src="../assets/images/xs/avatar1.jpg"
                    className="rounded-circle"
                    alt
                  />
                  <div className="chat-info">
                    {" "}
                    <a className="name" href="#">
                      Michael
                    </a>{" "}
                    <span className="datetime">6:28</span>{" "}
                    <span className="message">
                      I would love to join the team.
                    </span>{" "}
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span className="datetime">7:02</span>{" "}
                    <span className="message">
                      Hello, <br />
                      Michael
                    </span>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div className="input-group p-t-15">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text here..."
              />
              <span className="input-group-addon">
                <i className="zmdi zmdi-mail-send" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>
                Add Payment
                <small className="text-muted">Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button
                className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10"
                type="button"
              >
                <i className="zmdi zmdi-plus" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item">
                  <a href="/">
                    <i className="zmdi zmdi-home" /> Oreo
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Payment</a>
                </li>
                <li className="breadcrumb-item active">Add Payment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="card">
                <div className="header">
                  <h2>
                    <strong>Patients</strong> Information{" "}
                    <small>Description text here...</small>{" "}
                  </h2>
                  <ul className="header-dropdown">
                    <li className="dropdown">
                      {" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="zmdi zmdi-more" />{" "}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                    <li className="remove">
                      <a role="button" className="boxs-close">
                        <i className="zmdi zmdi-close" />
                      </a>
                    </li>
                  </ul>
                </div>
                <form method="post">
                  <div className="body">
                    <div className="row clearfix">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            value={payment}
                            onChange={(e) => setpayment(e.target.value)}
                            placeholder="Payment Number"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={patient}
                            onChange={(e) => setpatient(e.target.value)}
                            placeholder="Patient Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 ">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={doctor}
                            onChange={(e) => setdoctor(e.target.value)}
                            placeholder="Doctor Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="header">
                  <h2>
                    <strong>Payment</strong> Information{" "}
                    <small>Description text here...</small>{" "}
                  </h2>
                  <ul className="header-dropdown">
                    <li className="dropdown">
                      {" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="zmdi zmdi-more" />{" "}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                    <li className="remove">
                      <a role="button" className="boxs-close">
                        <i className="zmdi zmdi-close" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-12 ">
                      <div className="form-group">
                        <input
                          type="date "
                          className="form-control"
                          value={date}
                          onChange={(e) => setdate(e.target.value)}
                          placeholder="Payment Date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 ">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          value={amount}
                          onChange={(e) => setamount(e.target.value)}
                          placeholder="Total Amount"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 ">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          value={discount}
                          onChange={(e) => setdiscount(e.target.value)}
                          placeholder="Discount"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <select
                        className="form-control show-tick mb-3"
                        value={payment_method}
                        onChange={(e) => setpayment_method(e.target.value)}
                        data-live-search="true"
                      >
                        <option value="">-- Payment Method --</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Netbanking">Netbanking</option>
                        <option value="Insurance">Insurance</option>
                      </select>
                    </div>
                    <div className="col-sm-12 m-t-30">
                      <button
                        type="submit"
                        name="submit"
                        onClick={finalPayment}
                        className="btn btn-primary btn-round"
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        className="btn btn-default btn-round btn-simple"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Add_payment;
