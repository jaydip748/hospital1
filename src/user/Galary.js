import Footer from "./Footer";
import Layout from "./Layout";

function Galary () {
    return(

  <div className="wrapper">
  {/* start loading */}
 <Layout/>

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-gallery.jpg)'}}>
      <div className="container">
        <h3 className="title">Oreo<br /><strong>Gallery</strong></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* FAQs */}
    <div className="img-gallery">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>View</span> our best Gallery</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic1.jpg"> <img src="assets/images/gallery/Portfolio-pic1.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic2.jpg"><img src="assets/images/gallery/Portfolio-pic2.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic3.jpg"><img src="assets/images/gallery/Portfolio-pic3.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic4.jpg"><img src="assets/images/gallery/Portfolio-pic4.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic5.jpg"><img src="assets/images/gallery/Portfolio-pic5.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="popup-gallery"> <a className="popup2" href="assets/images/gallery/Portfolio-pic6.jpg"><img src="assets/images/gallery/Portfolio-pic6.jpg" alt="pic" /><span className="eye-wrapper"><i className="zmdi zmdi-eye" /></span></a> </div>
          </div>
        </div>
      </div>
    </div>
    {/* FAQs */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Galary;