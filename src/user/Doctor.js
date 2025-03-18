import Footer from "./Footer";
import Layout from "./Layout";
import { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";

function Doctor () {

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
    <div className="wrapper">
  {/* start loading */}
  <Layout/>
  
  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-doctors.jpg)'}}>
      <div className="container">
        <h3 className="title">Our <br /><big><strong>Specialist</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Our Team */}
    <div className="our-team doctors-team">
      <div className="container">
        <div className="row justify-content-between">
          <div className="section-title left col-lg-4" data-aos="fade-right">
            <h2><span>Meet </span>Our Team</h2>
            <p>Description text here...</p>
          </div>
          <div className="section-title right col-lg-8" data-aos="fade-left">
            <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to secure.</p>
          </div>
        </div>
        <div className="row">
                {
                  data.map(jay=>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="team-box text-center"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={5000} >
                    <div className="doctor-pic">
                    <img src={`http://localhost/hospital/image/${jay.image}`} className="img-fluid" alt="profile-image" />                               

                    </div>
                    <div className="doctor-info">
                      <h4>
                        {jay.fname}<span>{jay.speciality}</span>
                      </h4>
                      <ul className="clearfix">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="zmdi zmdi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="zmdi zmdi-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="zmdi zmdi-instagram" />
                          </a>
                        </li>
                      </ul>
                      <Link
                                to={`/Doctor_detail?id=${jay.id}`}
                                className="btn btn-default btn-round btn-simple"
                              >
                              View Profile
                              </Link>
                    </div>
                  </div>
                </div>
                  )
                }

              </div>
      </div>
    </div>
    {/* Our Team */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Doctor;