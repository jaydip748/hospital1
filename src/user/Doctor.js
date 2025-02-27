import Footer from "./Footer";
import Layout from "./Layout";

function Doctor () {
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
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
              <div className="doctor-pic"><img src="assets/images/team-member-01.png" alt="Dr. John" /></div>
              <div className="doctor-info">
                <h4>Dr. John <span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
              <div className="doctor-pic"><img src="assets/images/team-member-02.png" alt="Dr. Amelia" /></div>
              <div className="doctor-info">
                <h4>Dr. Amelia <span>Gynecologist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-03.png" alt="Dr. Jack" /></div>
              <div className="doctor-info">
                <h4>Dr. Jack <span>Audiology</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-04.png" alt="Dr. Charlie" /></div>
              <div className="doctor-info">
                <h4>Dr. Charlie<span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
              <div className="doctor-pic"><img src="assets/images/team-member-05.png" alt="Dr. John" /></div>
              <div className="doctor-info">
                <h4>Dr. Joseph <span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
              <div className="doctor-pic"><img src="assets/images/team-member-06.png" alt="Dr. Amelia" /></div>
              <div className="doctor-info">
                <h4>Dr. Sophie <span>Gynecologist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-07.png" alt="Dr. Jack" /></div>
              <div className="doctor-info">
                <h4>Dr. William <span>Audiology</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-08.png" alt="Dr. Charlie" /></div>
              <div className="doctor-info">
                <h4>Dr. Jessica<span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
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