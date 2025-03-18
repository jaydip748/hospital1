import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function ApprovedAppointments() {
    const [appointments, setAppointments] = useState([]); // Approved appointments

    useEffect(() => {
        axios.post("http://localhost/hospital/admin/appointment_user_select.php")
            .then(response => {
                const approved = response.data.filter(item => item.status === "Approved");
                setAppointments(approved);
            })
            .catch(error => {
                console.error("❌ Error fetching appointments:", error);
            });
    }, []);

 
























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
                                  

                                   <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Department</th>
                                <th>Status</th>
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
                                    <td><span className="badge badge-success">{jay.status}</span></td>
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

export default ApprovedAppointments;