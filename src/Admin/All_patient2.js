import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function All_patient2() {
  const [blogdata, setblogdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/hospital/admin/patient_select.php")
      .then(function (response) {
        // handle success
        console.log(response);
        setblogdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });
  // Function to handle deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .post("http://localhost/hospital/admin/patient_delete.php", { id })
        .then((response) => {
          if (response.data.success) {
            alert("Item deleted successfully!");
            setblogdata((prevPost) =>
              prevPost.filter((item) => item.id !== id)
            );
          } else {
            alert("Failed to delete item.");
          }
        })
        .catch((error) => {
          console.log("Error deleting item:", error);
        });
    }
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
                <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
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
                All Patients
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
                  <a href="javascript:void(0);">Patients</a>
                </li>
                <li className="breadcrumb-item active">All Patients</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card patients-list">
                <div className="header">
                  <h2>
                    <strong>Patients</strong> List
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
                      <ul className="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else</a>
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
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs padding-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#All"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#USA">
                        USA
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#India">
                        India
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content m-t-10">
                    <div className="tab-pane table-responsive active" id="All">
                      <table className="table m-b-0 table-hover">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>date</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Image</th>
                            <th>Delete</th>
                            <th>Update</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {blogdata.map((jay) => (
                              <tr>
                                <td>{jay.id}</td>
                                <td>
                                  <span className="list-name">{jay.fname}</span>
                                </td>
                                <td>{jay.lname}</td>
                                <td>{jay.phone}</td>
                                <td>{jay.date}</td>
                                <td>{jay.age}</td>
                                <td>{jay.gender}</td>
                                <td>{jay.email}</td>
                                <td>{jay.message}</td>
                                <td width={'100px'}>
                                  <img
                                    src={`http://localhost/hospital/image/${jay.image}`}
                                    className="patient-image11"
                                    alt=""
                                  />
                                </td>

                                <td>
                                  <button
                                    onClick={() => handleDelete(jay.id)}
                                    className="btn btn-danger"
                                  >
                                    <i className="fa-solid fa-trash-can">
                                      Delete
                                    </i>
                                  </button>
                                </td>
                                <td>
                                  <Link
                                    to={`/updateitem?id=${jay.id}`}
                                    className="btn btn-warning"
                                  >
                                    up
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane table-responsive" id="USA">
                      <table className="table m-b-0 table-hover">
                        <thead>
                          <tr>
                            <th>Media</th>
                            <th>Patients ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Last Visit</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar1.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00598</span>
                            </td>
                            <td>Daniel</td>
                            <td>32</td>
                            <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                            <td>404-447-6013</td>
                            <td>11 Jan 2018</td>
                            <td>
                              <span className="badge badge-success">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar2.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00258</span>
                            </td>
                            <td>Alexander</td>
                            <td>22</td>
                            <td>123 6th St. Melbourne, FL 32904</td>
                            <td>404-447-6013</td>
                            <td>15 Jan 2018</td>
                            <td>
                              <span className="badge badge-success">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar1.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00456</span>
                            </td>
                            <td>Joseph</td>
                            <td>27</td>
                            <td>70 Bowman St. South Windsor, CT 06074</td>
                            <td>404-447-6013</td>
                            <td>19 Jan 2018</td>
                            <td>
                              <span className="badge badge-success">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar2.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00789</span>
                            </td>
                            <td>Cameron</td>
                            <td>38</td>
                            <td>123 6th St. Melbourne, FL 32904</td>
                            <td>404-447-6013</td>
                            <td>19 Jan 2018</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar3.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00987</span>
                            </td>
                            <td>Alex</td>
                            <td>39</td>
                            <td>123 6th St. Melbourne, FL 32904</td>
                            <td>404-447-6013</td>
                            <td>20 Jan 2018</td>
                            <td>
                              <span className="badge badge-success">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar4.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00951</span>
                            </td>
                            <td>James</td>
                            <td>32</td>
                            <td>44 Shirley Ave. West Chicago, IL 60185</td>
                            <td>404-447-6013</td>
                            <td>22 Jan 2018</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar1.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00953</span>
                            </td>
                            <td>charlie</td>
                            <td>51</td>
                            <td>123 6th St. Melbourne, FL 32904</td>
                            <td>404-447-6013</td>
                            <td>22 Jan 2018</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="list-icon">
                                <img
                                  className="patients-img"
                                  src="../assets/images/xs/avatar2.jpg"
                                  alt
                                />
                              </span>
                            </td>
                            <td>
                              <span className="list-name">KU 00934</span>
                            </td>
                            <td>thomas</td>
                            <td>26</td>
                            <td>123 6th St. Melbourne, FL 32904</td>
                            <td>404-447-6013</td>
                            <td>29 Jan 2018</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
export default All_patient2;
