import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
function Add_doctor_update() {

    // const [fname, setfname] = useState("");
    // const [lname, setlname] = useState("");
    // const [dob, setdob] = useState("");
    // const [gender, setgender] = useState("");
    // const[speciality,setspeciality] =useState("");
    // const [phone,setphone] = useState("");
    // const [email,setemail] = useState("");
    // const [web,setweb] = useState("");
    // const [message,setmessage] = useState("");
    // const [image,setimage] = useState("");



    // const Doctor = (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append("fname", fname);
    //     formData.append("lname", lname);
    //     formData.append("dob", dob);
    //     formData.append("gender", gender);
    //     formData.append("speciality", speciality);
    //     formData.append("phone", phone);
    //     formData.append("email", email);
    //     formData.append("web", web);
    //     formData.append("message", message);
    //     formData.append("image", image); // Ensure image is properly captured
    
    //     axios
    //     .post("http://localhost/hospital/admin/doctor.php", formData)
    //     .then((response) => {
    //         console.log(response);  // Log the full response for debugging
    //         if (response.data.message) {
    //             alert(response.data.message);  // Show success message
    //         } else {
    //             alert("There was an error with your registration.");
    //         }
    
    //         // Reset form fields after submission
    //         setfname("");
    //         setlname("");
    //         setdob("");
    //         setgender("");
    //         setspeciality("");
    //         setphone("");
    //         setemail("");
    //         setweb("");
    //         setmessage("");
    //         setimage("");
    //     })
    //     .catch((error) => {
    //         console.error("There was an error!", error);
    //     });
    // };
    
        
    
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    // Define state variables for form inputs
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");
    const [speciality, setspeciality] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [web, setweb] = useState("");
    const [message, setmessage] = useState("");
    const [image, setimage] = useState(''); // Make sure it's initialized as null

    // Fetch patient data if 'id' exists in the URL
    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost/hospital/admin/update_doctor.php?id=${id}`)
                .then((response) => {
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setfname(response.data.fname);
                        setlname(response.data.lname);
                        setdob(response.data.dob);
                        setgender(response.data.gender);
                        setspeciality(response.data.speciality);
                        setphone(response.data.phone);
                        setemail(response.data.email);
                        setweb(response.data.web);
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
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("dob", dob);
        formData.append("gender", gender);
        formData.append("speciality",speciality);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("web", web);
        formData.append("message", message);
        formData.append("image", image);

        if (image) {
            formData.append("image", image); // Append the image file if selected
        }

        // Post the form data to update the patient
        axios
            .post("http://localhost/hospital/admin/update_doctor1.php", formData)
            .then((response) => {
                if (response.data.success) {
                    alert("Doctor updated successfully!");
                    navigate("/All_doctor2");
                } else {
                    alert("Failed to update patient. Please try again.");
                }
            })
            .catch((error) => {
                alert("Error updating patient: " + error.message);
            });
    };

    return (
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
                                <h2>Add Doctors
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                    <li className="breadcrumb-item active">Add Doctors</li>
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
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <form method="post"  enctype="multipart/form-data">
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={fname} onChange={(e) => setfname(e.target.value)} placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" value={dob}  onChange={(e)=> setdob(e.target.value)} className="form-control" placeholder="Date of Birth" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select value={gender} onChange={(e)=> setgender(e.target.value)} className="form-control show-tick">
                                                    <option value>- Gender -</option>
                                                    <option value={"male"}>Male</option>
                                                    <option value={"female"}>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" value={speciality}  onChange={(e)=>setspeciality(e.target.value)} className="form-control" placeholder="Speciality" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)}  className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Enter Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" value={web}onChange={(e)=>setweb(e.target.value)} className="form-control" placeholder="Website URL" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input  onChange={(e)=>setimage(e.target.files[0])} name="file" type="file" multiple />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} value={message}onChange={(e)=>setmessage(e.target.value)} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                            <button type="submit" name="submit" onClick={handleSubmit}  className="btn btn-primary btn-round">Submit</button>

                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                             {/* <input type="submit"  name="submit" id="" onClick={handleSubmit} /> */}
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
                                        <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
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
                                                    <input type="text" className="form-control" placeholder="User Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Confirm Password" />
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
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                    <input type="text" className="form-control" placeholder="Facebook" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                    <input type="text" className="form-control" placeholder="Twitter" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                    <input type="text" className="form-control" placeholder="Google Plus" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                    <input type="text" className="form-control" placeholder="LinkedIN" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                    <input type="text" className="form-control" placeholder="Behance" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                    <input type="text" className="form-control" placeholder="dribbble" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <p> <b>With Search Bar</b> </p>
                                                <select className="form-control z-index show-tick" data-live-search="true">
                                                    <option>Hot Dog, Fries and a Soda</option>
                                                    <option>Burger, Shake and a Smile</option>
                                                    <option>Sugar, Spice and all things nice</option>
                                                </select>
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

    );
}
export default Add_doctor_update;