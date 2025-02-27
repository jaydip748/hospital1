import Footer from "./Footer";
import Layout from "./Layout";

function Blog_detail () {
    return(
<div className="wrapper">
  {/* start loading */}
<Layout/>

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-blog.jpg)'}}>
      <div className="container">
        <h3 className="title">Our <br /><big><strong>Blog</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section blog-page">
    {/* Blog */}
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="card single_post">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="https://www.thememakker.com/templates/oreo/hospital/front/blog-details.html">All photographs are accurate. None of them is the truth</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-red" />Photography</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-1.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
              <a href="https://www.thememakker.com/templates/oreo/hospital/front/blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h2><strong>Comments</strong> 3</h2>
            </div>
            <div className="body">
              <ul className="comment-reply list-unstyled">
                <li className="row" data-aos="fade-left" data-aos-offset={100} data-aos-duration={2000}>
                  <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="assets/images/sm/avatar2.jpg" alt="Awesome Image" /></div>
                  <div className="text-box col-md-10 col-8 p-l-0">
                    <h6>Gigi Hadid </h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <ul className="list-inline">
                      <li><a href="javascript:void(0);">Jan 09 2018</a></li>
                      <li><a href="javascript:void(0);">Reply</a></li>
                    </ul>
                  </div>
                </li>
                <li className="row" data-aos="fade-left" data-aos-offset={100} data-aos-duration={2000}>
                  <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="assets/images/sm/avatar3.jpg" alt="Awesome Image" /></div>
                  <div className="text-box col-md-10 col-8 p-l-0">
                    <h6>Christian Louboutin</h6>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble</p>
                    <ul className="list-inline">
                      <li><a href="javascript:void(0);">Jan 12 2018</a></li>
                      <li><a href="javascript:void(0);">Reply</a></li>
                    </ul>
                  </div>
                </li>
                <li className="row" data-aos="fade-left" data-aos-offset={100} data-aos-duration={2000}>
                  <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src="assets/images/sm/avatar4.jpg" alt="Awesome Image" /></div>
                  <div className="text-box col-md-10 col-8 p-l-0">
                    <h6>Kendall Jenner</h6>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    <ul className="list-inline">
                      <li><a href="javascript:void(0);">Jan 20 2018</a></li>
                      <li><a href="javascript:void(0);">Reply</a></li>
                    </ul>
                  </div>
                </li>
              </ul>                                        
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-offset={100} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Leave</strong> a reply <small>Your email address will not be published. Required fields are marked*</small></h2>
            </div>
            <div className="body">
              <div className="comment-form">
                <form className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn btn-primary btn-round">SUBMIT</button>
                  </div>                                
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 right-box">
          <div className="card">
            <div className="body search">
              <div className="input-group m-b-0">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Popular</strong> Posts</h2>                        
            </div>
            <div className="body widget popular-post">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="border single_post">                                    
                    <div className="img-post m-b-5">
                      <img src="assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />                                        
                    </div>
                    <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                    <small>Dec 20, 2017</small>
                  </div>
                  <div className="border single_post m-t-20">
                    <div className="img-post m-b-5">
                      <img src="assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />                                            
                    </div>
                    <p className="m-b-0">new rules, more cars, more races</p>
                    <small>Dec 20, 2017</small>
                  </div>
                </div>
              </div>
            </div>
          </div>                
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Tag</strong> Clouds</h2>                        
            </div>
            <div className="body widget tag-clouds">
              <ul className="list-unstyled m-b-0">
                <li><a href="javascript:void(0);" className="tag badge badge-default">Cardio Monitoring</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-success">Traumatology</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-info">Creative UX</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-success">Pulmonary</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-warning">Cardiology</a></li>
              </ul>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Instagram</strong> Post</h2>                        
            </div>
            <div className="body widget">
              <ul className="list-unstyled instagram-plugin m-b-0">
                <li><a href="javascript:void(0);"><img src="assets/images/blog/05-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/06-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/07-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/08-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/09-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/10-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/11-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/12-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/13-img.jpg" alt="image description" /></a></li>
              </ul>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Email</strong> Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
            </div>
            <div className="body widget newsletter">                        
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Email" />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-mail-send" />
                </span>
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
export default Blog_detail;