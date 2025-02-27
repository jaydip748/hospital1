import Footer from "./Footer";
import Layout from "./Layout";

function About () {
    return(
     <div className="wrapper">
  {/* start loading */}
 <Layout/>
  

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-about.jpg)'}}>
      <div className="container">
        <h3 className="title">About Us<br /><big>Oreo <strong>Hospital</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* About Us Section */}
    <div className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>About </span>Us</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="box-img box-shadow" data-aos="fade-up">
              <img src="assets/images/about-page-img.jpg" alt />
              <span className="section-line" data-aos="fade-right" />
            </div>
          </div>
          <div className="col-md-7 col-sm-6">
            <div className="page-text">
              <div className="section-top" data-aos="fade-up" data-aos-duration={4000}>
                <p><strong>Oreo Hospital</strong> isIt is a long established fact that a reader will be
                  distracted by the readable content.</p>
              </div>
              <p data-aos="fade-up" data-aos-duration={4000}>It is a long established fact that a reader will be distracted by the readable content
                more or less normal distribution of letters opposed.</p>
              <div className="mission-vision" data-aos="fade-up" data-aos-duration={4000}>
                <div className="grp-area mission">
                  <i className="zmdi zmdi-favorite" />
                  <h5>Our Mission</h5>
                  <p>Reader will be distracted by the readable content of a page when looking at its
                    layout the point of using more or less normal distribution.</p>
                </div>
                <div className="grp-area vision">
                  <i className="zmdi zmdi-eye" />
                  <h5>Our Vision</h5>
                  <p>Reader will be distracted by the readable content of a page when looking at its
                    layout the point of using more or less normal distribution.</p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="zmdi zmdi-thumb-up" />
                      <p>Idea of denouncing pleasure and praising.</p>
                    </li>
                    <li>
                      <i className="zmdi zmdi-thumb-up" />
                      <p>Pleasure and praising pain was complete system.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="opening-hours" data-aos="fade-up" data-aos-duration={4000}>
                <h6><i className="zmdi zmdi-time" /> Opening Hours</h6>
                <ul className="list-unstyled">
                  <li>
                    <label><i className="zmdi zmdi-chevron-right" /> Saturday</label>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li>
                    <label><i className="zmdi zmdi-chevron-right" /> Sunday</label>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li>
                    <label><i className="zmdi zmdi-chevron-right" /> Monday - Friday</label>
                    <span>9:00 - 20:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About Us Section */}
    {/* Why choose us */}
    <div className="what-we-do">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Why </span>Choose Us</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-account-add" />
              <h6>Qualified Doctors</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-collection-add" />
              <h6>Blood Bank</h6>
              <p>It is a long established fact that a reader will be distracted by the readable content of
                a page when looking at</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-hospital-alt" />
              <h6>Modren Clinic</h6>
              <p>How all this mistaken idea denoucing pleasure and praisings pain was born complete
                account expound.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-thumb-up" />
              <h6>Emergency</h6>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-headset-mic" />
              <h6>24x7 Service</h6>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="what-we-box" data-aos="fade-right" data-aos-duration={5000}>
              <i className="zmdi zmdi-shield-check" />
              <h6>Health Care</h6>
              <p>How all this mistaken idea denoucing pleasure and praisings pain was born complete
                account expound.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Why choose us */}
    {/* Fun Fact */}
    <div className="fun-fact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-account" />
              <span className="counter timer" data-from={0} data-to={652} data-speed={2500} data-fresh-interval={700}>652</span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-favorite" />
              <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
              <p>Heart Transplant</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fun-fact-box text-center">
              <i className="zmdi zmdi-thumb-up" />
              <span className="counter timer" data-from={0} data-to={52} data-speed={2500} data-fresh-interval={700}>52</span>
              <p>Years Of Experience</p>
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
    {/* Fun Fact */}
    {/* Our Location */}
    <div className="our_location">
      <div className="container">
        <div className="row justify-content-between">
          <div className="section-title col-4" data-aos="fade-right">
            <h2><span>Our </span>Location</h2>
            <p>Description text here...</p>
          </div>
          <div className="section-title col-7" data-aos="fade-left">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div id="world-map-markers" style={{height: 380}} />
          </div>
          <div className="col-lg-12 col-md-12">                        
            <ul className="row location_list list-unstyled">
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-turquoise">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={453} data-speed={2500} data-fresh-interval={700}>453</h4>
                  <span>America</span>
                </div>
              </li>
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-khaki">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={124} data-speed={2500} data-fresh-interval={700}>124</h4>
                  <span>Australia</span>
                </div>
              </li>
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-parpl">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={215} data-speed={2500} data-fresh-interval={700}>215</h4>
                  <span>Canada</span>
                </div>
              </li>
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-salmon">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={155} data-speed={2500} data-fresh-interval={700}>155</h4>
                  <span>India</span>
                </div>
              </li>
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-blue">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={78} data-speed={2500} data-fresh-interval={700}>78</h4>
                  <span>UK</span>
                </div>
              </li>
              <li className="col-lg-2 col-md-4 col-6">
                <div className="body xl-slategray">
                  <i className="zmdi zmdi-pin" />
                  <h4 className="counter timer" data-from={0} data-to={55} data-speed={2500} data-fresh-interval={700}>55</h4>
                  <span>Other</span>
                </div>
              </li>                      
            </ul>                        
          </div>
        </div>
      </div>
    </div>
    {/* Our Location */}
    {/* Our Team */}
    <div className="our-team about-team">
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
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
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
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
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
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
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
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
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
export default About;