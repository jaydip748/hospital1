import Footer from "./Footer";
import Layout from "./Layout";
import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Doctor_detail () {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost/hospital/admin/update_doctor.php?id=${id}`)
        .then((response) => {
          if (response.data) {
            setData(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching chair details:", error);
        });
    }
  }, [id]);
    return(
<div className="wrapper">
  {/* start loading */}
  <Layout/>

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-doctors-detail.jpg)'}}>
      <div className="container">
        <h3 className="title">Neurologist <br /><big><strong>Dr. Profile</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Doctor Profile Section */}
    <div className="about-us-section doctor-detail-cnt">
      <div className="container">
        <div className="row">
          <div className="section-title col-12 clearfix">
            <div className="float-left">
              <h2><span>Dr. </span>Charlotte Deo</h2>
              <p>Description text here...</p>
            </div>
            <div className="float-right">
              <button className="btn btn-primary btn-round">Make Appointment</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 col-sm-6 p-r-0">
            <div className="box-img box-shadow">
            <img
                        src={`http://localhost/hospital/image/${data.image}`}
                       
                      />
              <span className="section-line" />
            </div>
            <div className="opening-hours">
              <h6><i className="zmdi zmdi-time" /> Working Hours</h6>
              <ul className="list-unstyled">
                <li>
                  <label><i className="zmdi zmdi-chevron-right" /> Saturday</label>
                  <span>10:00 AM - 05:00 PM</span>
                </li>
                <li>
                  <label><i className="zmdi zmdi-chevron-right" /> Sunday</label>
                  <span>10:00 AM - 02:00 PM</span>
                </li>
                <li>
                  <label><i className="zmdi zmdi-chevron-right" /> Monday - Friday</label>
                  <span>10:00 AM - 07:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7 col-sm-6">
            <div className="page-text">
              <div className="doctor-detail-map m-b-10">
                <img src="assets/images/doctor-detail-map.png" alt />
              </div>
              <div className="doctor-cnt">
                <p>
                  <span>Location</span><br />
                  795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                </p>
                <p>Dr. Charlotte Deo Leon is a neurosurgeon in East Patchogue,Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old. He received his medical
                  degree from Harvard Medical School and has been in practice for 21 years. He is one
                  of 5 doctors at Brookhaven Memorial Hospital Medical Center and one of 9 at
                  Southside Hospital who specialize in Neurological Surgery.</p>
                <p className="m-b-0 ul-title"><span>Speciality</span></p>
                <ul className="list-unstyled">
                  <li>Breast Surgery</li>
                  <li>Colorectal Surgery</li>
                  <li>Endocrinology</li>
                  <li>Cosmetic Dermatology</li>
                  <li>Mole checks and monitoring</li>
                  <li>Clinical Neurophysiology</li>
                </ul>
                <div className="opening-hours">
                  <h6><i className="zmdi zmdi-time" /> Reviews</h6>
                  <ul className="list-unstyled">
                    <li>
                      <label><i className="zmdi zmdi-chevron-right" /> Staff</label>
                      <span>
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star-outline" />
                        <i className="zmdi zmdi-star-outline" />
                      </span>
                    </li>
                    <li>
                      <label><i className="zmdi zmdi-chevron-right" /> Punctuality</label>
                      <span>
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star-outline" />
                      </span>
                    </li>
                    <li>
                      <label><i className="zmdi zmdi-chevron-right" /> Helpfulness</label>
                      <span>
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                      </span>
                    </li>
                    <li>
                      <label><i className="zmdi zmdi-chevron-right" /> Knowledge</label>
                      <span>
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star" />
                        <i className="zmdi zmdi-star-outline" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Doctor Profile Section */}
    {/* Doctor Detail Fun Fact */}
    <div className="fun-fact doctor-fun-fact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-graduation-cap" />
              <span className="counter timer" data-from={0} data-to={652} data-speed={2500} data-fresh-interval={700}>18</span>
              <p>Years Of Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-star" />
              <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
              <p>Awards</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-thumb-up" />
              <span className="counter timer" data-from={0} data-to={52} data-speed={2500} data-fresh-interval={700}>52</span>
              <p>Total Oparation</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-mood" />
              <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
              <p>Well Smiley Faces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Doctor Detail Fun Fact */}
    {/* Our Team */}
    <div className="our-team doctors-team">
      <div className="container">
        <div className="row justify-content-between">
          <div className="section-title left col-lg-4">
            <h2><span>Related </span>Profile</h2>
            <p>Description text here...</p>
          </div>
          <div className="section-title right col-lg-8">
            <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to secure.</p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center">
              <div className="doctor-pic"><img src="assets/images/team-member-01.png" alt="Dr. John" /></div>
              <div className="doctor-info">
                <h4>Dr. John <span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center">
              <div className="doctor-pic"><img src="assets/images/team-member-02.png" alt="Dr. Amelia" /></div>
              <div className="doctor-info">
                <h4>Dr. Amelia <span>Gynecologist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center">
              <div className="doctor-pic"><img src="assets/images/team-member-03.png" alt="Dr. Jack" /></div>
              <div className="doctor-info">
                <h4>Dr. Jack <span>Audiology</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center">
              <div className="doctor-pic"><img src="assets/images/team-member-04.png" alt="Dr. Charlie" /></div>
              <div className="doctor-info">
                <h4>Dr. Charlie<span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    {/* Our Team */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Doctor_detail;