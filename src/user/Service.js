import Footer from "./Footer";
import Layout from "./Layout";

function Service () {
    return(
<div className="wrapper">
  {/* start loading */}
  <Layout/>

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-service.jpg)'}}>
      <div className="container">
        <h3 className="title">About Us<br /><big>Oreo <strong>Hospital</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* About Us Section */}
    <div className="service-section">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Welcome </span>Oreo Hospital</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-5 col-sm-12">
            <div className="service-cnt">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="services-btn-grp">
              <div className="find-doctor service-btn float-left">
                <a href="javascript:void(0);" className="text-center">
                  <i className="zmdi zmdi-account-add" />
                  <h4><span>Find Search</span>A Doctor</h4>
                </a>
              </div>
              <div className="book-appoitntment service-btn float-left">
                <a href="javascript:void(0);" className="text-center">
                  <i className="zmdi zmdi-phone" />
                  <h4><span>Book Appointment</span>+ 44 12245 12545</h4>
                </a>
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
    <div className="support-home enquiry-section xl-slategray">
      <div className="container">
        <div className="row">
          <div className="col-md-10 text-sm-center">
            <h4>Your First Step towards Oral Health Life starts here</h4>
          </div>
          <div className="col-md-2 text-md-right text-sm-center">
            <a className="btn btn-primary btn-round" href="javascript:void(0);" data-aos="flip-up">Enquiry</a>
          </div>
        </div>
      </div>
    </div>
    {/* Fun Fact */}
    {/* Services List */}
    <div className="department-list services-list">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Most </span>Popular Services</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row" data-aos="flip-up">
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt">
              <div className="box-img"><img src="assets/images/service-1.png" alt /></div>
              <div className="box-cnt">
                <h4>Routine CheckUp</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt">
              <div className="box-img"><img src="assets/images/service-2.png" alt /></div>
              <div className="box-cnt">
                <h4>Medical Counseling</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt">
              <div className="box-img"><img src="assets/images/service-3.png" alt /></div>
              <div className="box-cnt">
                <h4>Medicine Research</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services List */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Service;