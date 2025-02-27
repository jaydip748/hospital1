import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";


  function Deparment_update () {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    // Define state variables for form inputs
    const [name, setname] = useState("");
    const [message, setmessage] = useState("");
    const [image, setimage] = useState(null); // Make sure it's initialized as null

    // Fetch patient data if 'id' exists in the URL
    useEffect(() => {
        if (id) {
            axios
            .get(`http://localhost/hospital/admin/update_department.php?id=${id}`)
                .then((response) => {
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setname(response.data.name);
                        setmessage(response.data.message);
                        setimage(response.data.image); // Set the image path if provided
                    } 
                })
                .catch((error) => {
                    console.error("Error fetching patient details:", error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id", id); // Ensure you are passing the ID of the patient
        formData.append("name", name);
        formData.append("message", message);
        formData.append("image", image);

        if (image) {
            formData.append("image", image); // Append the image file if selected
        }

        // Post the form data to update the patient
        axios
            .post("http://localhost/hospital/admin/update_department1.php", formData)
            .then((response) => {
                if (response.data.success) {
                    alert("Patient updated successfully!");
                    navigate("/All_department2");
                } else {
                    alert("Failed to update patient. Please try again.");
                }
            })
            .catch((error) => {
                alert("Error updating patient: " + error.message);
            });
    };
    return(
     <div className="theme-cyan">
  {/* Page Loader */}
  <div/>
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
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Add Departments
            <small>Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/Dashboard"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Departments</a></li>
            <li className="breadcrumb-item active">Add</li>
          </ul>
        </div>
      </div>
    </div>    
    <div className="container-fluid">        
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2><strong>Add</strong>Departments<small>Description text here...</small> </h2>
              <ul className="header-dropdown">                            
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control"  value={name}
                            onChange={(e) => setname(e.target.value)} placeholder="Departments Name" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea rows={4} className="form-control no-resize" value={message} onChange={(e)=> setmessage(e.target.value)} placeholder="Please type what you want..." defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone m-b-20" method="post" encType="multipart/form-data">
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
                  <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-round">Submit</button>
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

    );
}
export default Deparment_update;