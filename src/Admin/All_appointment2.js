import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function All_appointment2() {
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    // Fetch the appointments
    axios
      .post("http://localhost/hospital/admin/appointment_select.php")
      .then(function (response) {
        // Handle success
        console.log(response);
        setblogdata(response.data);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });
  }, []);

  // Function to handle deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .post("http://localhost/hospital/admin/appointment_delete.php", { id })
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

  // Function to handle approval
  const handleApprove = (id) => {
    if (window.confirm("Are you sure you want to approve this appointment?")) {
      axios
        .post("http://localhost/hospital/admin/appointment_approved.php", {
          id,
          status: "approved",
        })
        .then((response) => {
          if (response.data.success) {
            alert("Appointment approved successfully!");
            // Update the status in the state without reloading data from the server
            setblogdata((prevData) =>
              prevData.map((item) =>
                item.id === id ? { ...item, status: "approved" } : item
              )
            );
          } else {
            alert("Failed to approve appointment.");
          }
        })
        .catch((error) => {
          console.log("Error approving appointment:", error);
        });
    }
  };

  return (
    <div className="theme-cyan">
      {/* Overlay For Sidebars */}
      <div className="overlay" />
      {/* Left Sidebar */}
      <Sidebar />

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
                </div>

                <div className="body">
                  <div className="tab-content m-t-10">
                    <div className="tab-pane table-responsive active" id="All">
                      <table className="table m-b-0 table-hover">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Dob</th>
                            <th>Gender</th>
                            <th>Service</th>
                            <th>Datetime</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogdata.map((jay) => (
                            <tr key={jay.id}>
                              <td>{jay.id}</td>
                              <td>
                                <span className="list-name">{jay.fname}</span>
                              </td>
                              <td>{jay.lname}</td>
                              <td>{jay.dob}</td>
                              <td>{jay.gender}</td>
                              <td>{jay.service}</td>
                              <td>{jay.datetime}</td>
                              <td>{jay.email}</td>
                              <td>{jay.phone}</td>
                              <td>{jay.message}</td>
                              <td>
                                {jay.status === "pending" ? (
                                  <button
                                    onClick={() => handleApprove(jay.id)}
                                    className="btn btn-success"
                                  >
                                    Approve
                                  </button>
                                ) : (
                                  <button className="btn btn-success disabled">
                                    Approved
                                  </button>
                                )}
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
                                  to={`/updateitem4?id=${jay.id}`}
                                  className="btn btn-warning"
                                >
                                  Update
                                </Link>
                              </td>
                            </tr>
                          ))}
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

export default All_appointment2;
