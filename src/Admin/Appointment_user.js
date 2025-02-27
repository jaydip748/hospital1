import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function Appointment_user() {
    const [appointments, setAppointments] = useState([]); // Store appointment data

    useEffect(() => {
        // Fetch all appointments
        axios.post("http://localhost/hospital/admin/appointment_user_select.php")
            .then(response => {
                setAppointments(response.data); // Update state with fetched data
            })
            .catch(error => {
                console.error("❌ Error fetching appointments:", error);
            });
    }, []);

    // Function to handle status update
    const updateStatus = (currentStatus, id) => {
        const newStatus = currentStatus === "Pending" ? "Approved" : "Pending"; // Toggle status

        axios.post("http://localhost/hospital/admin/appointment_user_approve.php", {
            id: id,
            status: newStatus
        })
        .then(response => {
            console.log("✅ Response from server:", response.data); // Debugging

            if (response.data.success) {
                setAppointments(prevData =>
                    prevData.map(item =>
                        item.id === id ? { ...item, status: response.data.new_status } : item
                    )
                );
            } else {
                alert("❌ Failed to update status.");
            }
        })
        .catch(error => {
            console.error("❌ Error updating status:", error);
        });
    };

    return (
        <div className="theme-cyan">
            <Sidebar />
            <section className="content">
                <div className="block-header">
                    <h2>All Patients <small className="text-muted">Welcome to Oreo</small></h2>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card patients-list">
                                <div className="header">
                                    <h2><strong>Patients</strong> List</h2>
                                </div>
                                <div className="body">
                                    <table className="table m-b-0 table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Date</th>
                                                <th>Doctor</th>
                                                <th>Department</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appointments.map(jay => (
                                                <tr key={jay.id}>
                                                    <td>{jay.id}</td>
                                                    <td>{jay.name}</td>
                                                    <td>{jay.phone}</td>
                                                    <td>{jay.date}</td>
                                                    <td>{jay.doctor}</td>
                                                    <td>{jay.department}</td>
                                                    <td>{jay.status}</td>
                                                    <td>
                                                        <button
                                                            className={jay.status === "Pending" ? "badge badge-warning" : "badge badge-success"}
                                                            onClick={() => updateStatus(jay.status, jay.id)}
                                                        >
                                                            {jay.status === "Pending" ? "Approve" : "Set Pending"}
                                                        </button>
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
            </section>
        </div>
    );
}

export default Appointment_user;