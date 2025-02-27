import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from "react-router-dom";

function Payment2() {
  const [blogdata, setblogdata] = useState([])
  useEffect(() => {

    axios.post('http://localhost/hospital/admin/payment_select.php')
      .then(function (response) {
        // handle success
        console.log(response);
        setblogdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  })
   // Function to handle deletion
   const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
        axios.post('http://localhost/hospital/admin/payment_delete.php', { id })
            .then((response) => {
                if (response.data.success) {
                    alert("Item deleted successfully!");
                    setblogdata((prevPost) => prevPost.filter((item) => item.id !== id));
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
        {/* <div/> */}
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
              <li className="m-r-15"><h2>Doctor Team</h2></li>
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
                <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="chat-widget">
              <ul className="chat-scroll-list clearfix">
                <li className="left float-left">
                  <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
                  <div className="chat-info">
                    <a className="name" href="#">Alexander</a>
                    <span className="datetime">6:12</span>
                    <span className="message">Hello, John </span>
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                </li>
                <li className="right">
                  <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                </li>
                <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
                  <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                </li>
                <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
                  <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                </li>
                <li className="right">
                  <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                </li>
              </ul>
            </div>
            <div className="input-group p-t-15">
              <input type="text" className="form-control" placeholder="Enter text here..." />
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
              <h2>Payments
                <small className="text-muted">Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Payments</a></li>
                <li className="breadcrumb-item active">Payments</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {/* Basic Examples */}
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2><strong>List</strong> </h2>
                  <ul className="header-dropdown">
                    <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                      <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                        <li><a href="javascript:void(0);">Action</a></li>
                        <li><a href="javascript:void(0);">Another action</a></li>
                        <li><a href="javascript:void(0);">Something else</a></li>
                      </ul>
                    </li>
                    <li className="remove">
                      <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Payment Number</th>
                          <th>Patient</th>
                          <th>Doctor</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Discount</th>
                          <th>Payment method</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          blogdata.map(jay =>
                            <tr>
                              <td>{jay.id}</td>
                              <td>{jay.payment}</td>
                              <td>{jay.patient}</td>
                              <td>{jay.doctor}</td>
                              <td>{jay.date}</td>
                              <td>{jay.amount}</td>
                              <td>{jay.discount}</td>
                              <td>{jay.paymet_method} </td>
                              <td>    
                        <button onClick={() => handleDelete(jay.id)} className="btn btn-danger">
                                                        <i className="fa-solid fa-trash-can">Delete</i>
                                                    </button>
                                                    </td>
                                                    <td>
                                  <Link
                                    to={`/updateitem2?id=${jay.id}`}
                                    className="btn btn-warning"
                                  >
                                    up
                                  </Link>
                                </td>
                            </tr>
                          )
                        }





                      </tbody>
                    </table>
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
export default Payment2;