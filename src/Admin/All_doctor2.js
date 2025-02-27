import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from "react-router-dom";

function All_doctor2 () {

    const [data,setdata]=useState([])
    useEffect (()=>{
        axios.post('http://localhost/hospital/admin/doctor_select.php')
  .then(function (response) {
    // handle success
    console.log(response);
    setdata(response.data);
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
          axios.post('http://localhost/hospital/admin/doctor_delete.php', { id })
              .then((response) => {
                  if (response.data.success) {
                      alert("Item deleted successfully!");
                      setdata((prevPost) => prevPost.filter((item) => item.id !== id));
                  } else {
                      alert("Failed to delete item.");
                  }
              })
              .catch((error) => {
                  console.log("Error deleting item:", error);
              });
      }
  };
    return(
<div className="theme-cyan">
  {/* Page Loader */}
  <div className="page-loader-wrapper">
    <div className="loader">
      <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
      <p>Please wait...</p>
    </div>
  </div>
  {/* Overlay For Sidebars */}
  <div className="overlay" />
  {/* Top Bar */}

  {/* Left Sidebar */}
<Sidebar/>
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
        <div className="col-lg-5 col-md-5 col-sm-12">
          <h2>All Doctors
            <small>Welcome to Oreo</small>
          </h2>
        </div>            
        <div className="col-lg-7 col-md-7 col-sm-12 text-right">
          <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
            <i className="zmdi zmdi-plus" />
          </button>
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
            <li className="breadcrumb-item active">All Doctors</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="body">
              <ul className="nav nav-tabs padding-0">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Permanent">Permanent</a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Consultant">Consultant</a></li>
              </ul>
            </div>
          </div>
          <div className="tab-content m-t-10">
            <div className="tab-pane active" id="Permanent">
              <div className="row clearfix">
              {
                data.map(jay=>
                       <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img src={`http://localhost/hospital/image/${jay.image}`} className="img-fluid" alt="profile-image" />                               
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">{jay.fname}</h4>
                        <p className="text-muted">{jay.lname}</p>
                        <ul className="social-links list-inline m-t-20">
                          <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                          <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                          <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                        </ul>
                        <p className="text-muted">{jay.message}</p> 
                                             
                        {/* <a href="profile.html" className="btn btn-default btn-round btn-simple"></a> */}
                        <Link
                                to={`/Doctor_details?id=${jay.id}`}
                                className="btn btn-default btn-round btn-simple"
                              >
                              View Profile
                              </Link>
                        <td>    
                        <button onClick={() => handleDelete(jay.id)} className="btn btn-danger">
                                                        <i className="fa-solid fa-trash-can">Delete</i>
                                                    </button>
                                                    </td>
                                                    <td>
                                  <Link
                                    to={`/updateitem1?id=${jay.id}`}
                                    className="btn btn-warning"
                                  >
                                    up
                                  </Link>
                                </td>
                      </div>
                    </div>
                  </div>
                </div> 
                )
              }
              </div> 
            </div>
            <div className="tab-pane" id="Consultant">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-khaki member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img src="../assets/images/doctors/member2.png" className="img-fluid" alt="profile-image" />                               
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Amelia</h4>
                        <p className="text-muted">Gynecologist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                          <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                          <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                        </ul>
                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-blue member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img src="../assets/images/doctors/member3.png" className="img-fluid" alt="profile-image" />                               
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Jack </h4>
                        <p className="text-muted">Dentist</p>
                        <ul className="social-links list-inline m-t-20">
                          <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                          <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                          <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                        </ul>
                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-pink member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img src="../assets/images/doctors/member5.png" className="img-fluid" alt="profile-image" />                               
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Joseph </h4>
                        <p className="text-muted">Audiology</p>
                        <ul className="social-links list-inline m-t-20">
                          <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                          <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                          <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                        </ul>
                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card xl-seagreen member-card doctor">
                    <div className="body">
                      <div className="member-thumb">
                        <img src="../assets/images/doctors/member6.png" className="img-fluid" alt="profile-image" />                               
                      </div>
                      <div className="detail">
                        <h4 className="m-b-0">Dr. Charlie </h4>
                        <p className="text-muted">Physical Therapy</p>
                        <ul className="social-links list-inline m-t-20">
                          <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                          <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                          <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                        </ul>
                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>                           
                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                      </div>
                    </div>
                  </div>
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
export default All_doctor2;