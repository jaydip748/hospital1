import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Pulmonology() {
  const [blogdata, setblogdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/hospital/admin/Pulmonology.php")
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
        .post("http://localhost/hospital/admin/department_delete.php", { id })
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
                <h2>Dr. Team</h2>
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
      {/* Main Content */}
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>
                All Departments
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button
                className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10"
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
                  <a href="javascript:void(0);">Departments</a>
                </li>
                <li className="breadcrumb-item active">Alle</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            {blogdata.map((jay) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card project_widget">
                  <div className="pw_img">
                    <img
                      className="img-fluid"
                      src={`http://localhost/hospital/image/${jay.image}`}
                      alt="About the image"
                    />
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <h6>{jay.name}</h6>
                      <ul className="list-unstyled team-info margin-0 p-t-15">
                        <li className="m-r-15">
                          <small>Team</small>
                        </li>
                        <li>
                          <img
                            src="assets1/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets1/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets1/images/xs/avatar4.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets1/images/xs/avatar6.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <a href="javascript:void(0);" title="Add Member">
                            <i className="zmdi zmdi-plus-circle" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pw_meta">
                      <p>{jay.message}</p>
                      <a
                        href="more-Departments.html"
                        className="btn btn-primary btn-simple btn-round"
                      >
                        More
                      </a>
                    </div>
                    <td>
                      <button
                        onClick={() => handleDelete(jay.id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can">Delete</i>
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/updateitem3?id=${jay.id}`}
                        className="btn btn-warning"
                      >
                        up
                      </Link>
                    </td>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Pulmonology ;
