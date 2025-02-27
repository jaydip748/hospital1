import Footer from "./Footer";
import Layout from "./Layout";

function Blog (){
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
        <div className="col-lg-8 col-md-12 left-box">
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">All photographs are accurate. None of them is the truth</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-red" />Traumatology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-3.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">Apple Introduces Search Ads Basic</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-amber" />Orthodontics</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">WTCR from 2018: new rules, more cars, more races</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-lime" />Traumatology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 18</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">CSS Timeline Examples from CodePen</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-green" />Cardiology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 8</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-4.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>                               
          <ul className="pagination pagination-primary" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
            <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
          </ul>                
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
export default Blog;