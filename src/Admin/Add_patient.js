
import { useState } from "react";
import axios from 'axios';
import Sidebar from "./Sidebar";
function Add_patient() {

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [image, setimage] = useState("");

  const Patient = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("fname", fname);
    Data.append("lname", lname);
    Data.append("phone", phone);
    Data.append("date", date);
    Data.append("age", age);
    Data.append("gender", gender);
    Data.append("email", email);
    Data.append("message", message);
    Data.append("image", image);

    axios
      .post("http://localhost/hospital/admin/patient.php", Data)
      .then((response) => {
        // Show success or error message
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert("There was an error with your registration.");
        }

        // Reset form fields after submission
        setfname("");
        setlname("");
        setphone("");
        setdate("");
        setage("");
        setgender("");
        setemail("");
        setmessage("");
        setimage("");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <>

      <div className="theme-cyan">


        <div>
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
                  <h2>Add Patient
                    <small className="text-muted">Welcome to Oreo</small>
                  </h2>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12">
                  <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                    <li className="breadcrumb-item active">Add Patient</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                      <ul className="header-dropdown">
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                          <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                            <li><a href="javascript:void(0);">Edit</a></li>
                            <li><a href="javascript:void(0);">Delete</a></li>
                            <li><a href="javascript:void(0);">Report</a></li>
                          </ul>
                        </li>
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <form method="post" enctype="multipart/form-data">
                      <div className="body">
                        <div className="row clearfix">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <input type="text" className="form-control" value={fname} onChange={(e) => setfname(e.target.value)} placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <input type="text" className="form-control" value={lname} onChange={(e) => setlname(e.target.value)} placeholder="Last Name" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <input type="text" className="form-control" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone No." />
                            </div>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-sm-3">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="zmdi zmdi-calendar" />
                              </span>
                              <input type="date" className="form-control" value={date} onChange={(e) => setdate(e.target.value)} placeholder="Enter date" />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <input type="text" className="form-control" value={age} onChange={(e) => setage(e.target.value)} placeholder="Age" />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <select value={gender} onChange={(e) => setgender(e.target.value)} className="form-control show-tick">
                              <option value>- Gender -</option>
                              <option value={"male"}>Male</option>
                              <option value={"female"}>Female</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <input type="text" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Your Email" />
                            </div>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" >
                            <div className="dz-message">
                              <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                              <h3>Drop files here or click to upload.</h3>
                              <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                            <div className="fallback">
                              <input name="file" onChange={(e)=>setimage(e.target.files[0])} type="file" multiple />
                            </div>
                          </form>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea rows={4} value={message} onChange={(e) => setmessage(e.target.value)} className="form-control no-resize" placeholder="Description" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button type="submit" onClick={Patient} className="btn btn-primary btn-round">Submit</button>
                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                      <ul className="header-dropdown">
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                          <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                            <li><a href="javascript:void(0);">Edit</a></li>
                            <li><a href="javascript:void(0);">Delete</a></li>
                            <li><a href="javascript:void(0);">Report</a></li>
                          </ul>
                        </li>
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Doctor Name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Staff on Duty" />
                          </div>
                        </div>
                      </div>
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ward No." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="zmdi zmdi-calendar" />
                            </span>
                            <input type="text" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary btn-round">Submit</button>
                          <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>


    </>
  );
}
export default Add_patient;