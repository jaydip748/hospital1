import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

function Add_patient_update() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id"); // Get the 'id' query parameter from the URL

    // Define state variables for form inputs
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    const [date, setdate] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [image, setimage] = useState(null); // Make sure it's initialized as null

    // Fetch patient data if 'id' exists in the URL
    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost/hospital/admin/update_patient.php?id=${id}`)
                .then((response) => {
                    if (response.data) {
                        // Pre-fill form fields with fetched data
                        setfname(response.data.fname);
                        setlname(response.data.lname);
                        setphone(response.data.phone);
                        setdate(response.data.date);
                        setage(response.data.age);
                        setgender(response.data.gender);
                        setemail(response.data.email);
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
        formData.append("phone", phone);
        formData.append("date", date);
        formData.append("age", age);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("message", message);

        if (image) {
            formData.append("image", image); // Append the image file if selected
        }

        // Post the form data to update the patient
        axios
            .post("http://localhost/hospital/admin/update_patient1.php", formData)
            .then((response) => {
                if (response.data.success) {
                    alert("Patient updated successfully!");
                    navigate("/All_patient2");
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
                <div>
                    <div className="overlay" />
                    <Sidebar />
                    <section className="content">
                        <div className="block-header">
                            <div className="row">
                                <div className="col-lg-7 col-md-5 col-sm-12">
                                    <h2>Add Patient</h2>
                                </div>
                                <div className="col-lg-5 col-md-7 col-sm-12">
                                    <ul className="breadcrumb float-md-right">
                                        <li className="breadcrumb-item">
                                            <a href="/">
                                                <i className="zmdi zmdi-home" /> Oreo
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="javascript:void(0);">Patient</a>
                                        </li>
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
                                            <h2>
                                                <strong>Basic</strong> Information
                                            </h2>
                                        </div>
                                        <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                                            <div className="body">
                                                <div className="row clearfix">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={fname}
                                                                onChange={(e) => setfname(e.target.value)}
                                                                placeholder="First Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={lname}
                                                                onChange={(e) => setlname(e.target.value)}
                                                                placeholder="Last Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={phone}
                                                                onChange={(e) => setphone(e.target.value)}
                                                                placeholder="Phone No."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row clearfix">
                                                    <div className="col-sm-3">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <i className="zmdi zmdi-calendar" />
                                                            </span>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                value={date}
                                                                onChange={(e) => setdate(e.target.value)}
                                                                placeholder="Enter date"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={age}
                                                                onChange={(e) => setage(e.target.value)}
                                                                placeholder="Age"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <select
                                                            value={gender}
                                                            onChange={(e) => setgender(e.target.value)}
                                                            className="form-control show-tick"
                                                        >
                                                            <option value="">- Gender -</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={email}
                                                                onChange={(e) => setemail(e.target.value)}
                                                                placeholder="Enter Your Email"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row clearfix">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <input
                                                            type="file"
                                                            name="image"
                                                            onChange={(e) => setimage(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row clearfix">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                rows={4}
                                                                value={message}
                                                                onChange={(e) => setmessage(e.target.value)}
                                                                className="form-control no-resize"
                                                                placeholder="Description"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <button type="submit" className="btn btn-primary btn-round">
                                                            Submit
                                                        </button>
                                                        <button type="button" className="btn btn-default btn-round btn-simple">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default Add_patient_update;
