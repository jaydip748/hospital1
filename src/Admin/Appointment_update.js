import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";


function Appointment_update() {

const navigate = useNavigate();
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

// Define state variables for form inputs
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [dob, setDob] = useState("");
const [gender, setGender] = useState("");
const [service, setService] = useState("");
const [dateTime, setDateTime] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

// Fetch patient data if 'id' exists in the URL
useEffect(() => {
  if (id) {
    axios
      .get(`http://localhost/hospital/admin/update_appointment.php?id=${id}`)
      .then((response) => {
        if (response.data) {
          // Pre-fill form fields with fetched data
          setFname(response.data.fname);
          setLname(response.data.lname);
          setDob(response.data.dob);
          setGender(response.data.gender);
          setService(response.data.service);
          setDateTime(response.data.dateTime);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setMessage(response.data.message);
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
  formData.append("fname", fname);
  formData.append("lname", lname);
  formData.append("dob", dob);
  formData.append("gender", gender);
  formData.append("service", service);
  formData.append("dateTime", dateTime);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);


  // Post the form data to update the patient
  axios
    .post("http://localhost/hospital/admin/update_appointment1.php",formData)
    .then((response) => {
      if (response.data.success) {
        alert("Patient updated successfully!");
        navigate("/All_appointment2");
      } else {
        alert("Failed to update patient. Please try again.");
      }
    })
    .catch((error) => {
      alert("Error updating patient: " + error.message);
    });
};

  return (
    <>
      <div className="theme-cyan">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Right Sidebar */}
        <div className="chat-launcher" />
        <div className="chat-wrapper">
          <div className="card">
            <div className="header">
              <ul className="list-unstyled team-info margin-0">
                <li className="m-r-15">
                  <h2>Doctor Team</h2>
                </li>
                {/* Avatars */}
                <li>
                  <img src="./assets2/images/xs/avatar2.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="./assets2/images/xs/avatar3.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="./assets2/images/xs/avatar4.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="./assets2/images/xs/avatar6.jpg" alt="Avatar" />
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
                  {/* Sample Chat Items */}
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
                <h2>
                  Book Appointment
                  <small>Welcome to Oreo</small>
                </h2>
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12">
                <ul className="breadcrumb float-md-right">
                  <li className="breadcrumb-item">
                    <a href="/home">
                      <i className="zmdi zmdi-home" /> Oreo
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Appointment</a>
                  </li>
                  <li className="breadcrumb-item active">Book Appointment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      <strong>Book</strong> Appointment
                      <small>Description text here...</small>
                    </h2>
                  </div>
                  <div className="body">
                    <form >
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              value={fname}
                              onChange={(e) => setFname(e.target.value)}
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              value={lname}
                              onChange={(e) => setLname(e.target.value)}
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="date"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              className="form-control"
                              placeholder="Date of Birth"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="">- Gender -</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              value={service}
                              onChange={(e) => setService(e.target.value)}
                            >
                              <option value="">- Service -</option>
                              <option value="Dental Checkup">Dental Checkup</option>
                              <option value="Full Body Checkup">Full Body Checkup</option>
                              <option value="ENT Checkup">ENT Checkup</option>
                              <option value="Heart Checkup">Heart Checkup</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="datetime-local"
                              value={dateTime}
                              onChange={(e) => setDateTime(e.target.value)}
                              className="form-control"
                              placeholder="Choose date & time"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              placeholder="Enter Your Email"
                            />
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="form-control"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea
                              rows={4}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="form-control no-resize"
                              placeholder="Please type your message..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-round">
                            Submit
                          </button>
                          <button type="reset" className="btn btn-default btn-round btn-simple">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Appointment_update;
