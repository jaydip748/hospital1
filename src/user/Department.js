import Footer from "./Footer";
import Layout from "./Layout";

function Department () {
    return(
<div className="wrapper">
  {/* start loading */}
  {/* <div id="loading">
    <p>pleas wait page loading ...</p>
  </div> */}
  <Layout/>
  
  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-department.jpg)'}}>
      <div className="container">
        <h3 className="title">Oreo Hospital<br /><big><strong>Departments</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Departments List */}
    <div className="department-list">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={6000}>
              <div className="box-img"><img src="assets/images/department-1.jpg" alt /></div>
              <div className="box-cnt">
                <h4>CARDIOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={5000}>
              <div className="box-img"><img src="assets/images/department-2.jpg" alt /></div>
              <div className="box-cnt">
                <h4>PULMONOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={3000}>
              <div className="box-img"><img src="assets/images/department-3.jpg" alt /></div>
              <div className="box-cnt">
                <h4>GYNECOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={4000}>
              <div className="box-img"><img src="assets/images/department-4.jpg" alt /></div>
              <div className="box-cnt">
                <h4>NEUROLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={4000}>
              <div className="box-img"><img src="assets/images/department-5.jpg" alt /></div>
              <div className="box-cnt">
                <h4>UROLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={3000}>
              <div className="box-img"><img src="assets/images/department-6.jpg" alt /></div>
              <div className="box-cnt">
                <h4>Detal</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Departments List */}
    {/* Home Why choose us */}
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Why </span>Choose Us</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="common-cnt">
              <div className="section-top" data-aos="fade-down">
                <p>Our goal is to make sure<br />
                  with advances in <br />
                  technology</p>
              </div>
              <p data-aos="fade-down" data-aos-duration={3000}>Professional dental clinic 32roDent offers the whole range of dentistry services:
                treatment of caries, gum diseases, tooth whitening, implantation, dentures (crowns
                installation), surgery, correction (braces) etc.</p>
              <p>
                <a className="btn btn-primary btn-round" data-aos="flip-up">More about practice</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="box-img" data-aos="fade-left" data-aos-duration={3000}>
              <img src="assets/images/why-choose-img.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Home Why choose us */}
    {/* Blog */}
    <div className="home-blog">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Latest </span>From Blog</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-1.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-2.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-3.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blog */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Department;