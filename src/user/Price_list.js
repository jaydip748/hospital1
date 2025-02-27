import Footer from "./Footer";
import Layout from "./Layout";

function Price_list(){
    return(
<div className="wrapper">
  {/* start loading */}
  <Layout/>

  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-doctors.jpg)'}}>
      <div className="container">
        <h3 className="title">Our <br /><big><strong>Pricing Table</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Price List */}
    <div className="price_list">
      <div className="container">
        <div className="row justify-content-between">
          <div className="section-title left col-lg-4" data-aos="fade-right">
            <h2><span>Pricing </span>Table</h2>
            <p>Description text here...</p>
          </div>
          <div className="section-title right col-lg-8" data-aos="fade-left">
            <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card text-center">
              <h5>MENS PACKAGE</h5>
              <p>Just need initial support</p>
              <div className="price xl-turquoise"><h3>$ 99 / <span>year</span></h3></div>
              <div className="body">
                <ul className="list-unstyled">
                  <li><strong>Internal</strong> Medicine Consultation</li>
                  <li>Internal <strong>Medicine</strong> Review</li>
                  <li><strong>Blood</strong> Sugar Fasting</li>
                  <li><strong>Blood</strong> Grouping and RH Factor</li>
                  <li>Creatinine, Serum</li>
                </ul>
                <button className="btn btn-default btn-simple btn-round btn-lg" data-aos="flip-up">Get this plan</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card text-center">
              <h5>WOMENS PACKAGE</h5>
              <p>Just need initial support</p>
              <div className="price xl-parpl"><h3>$ 99 / <span>year</span></h3></div>
              <div className="body">
                <ul className="list-unstyled">
                  <li><strong>Internal</strong> Medicine Consultation</li>
                  <li>Internal <strong>Medicine</strong> Review</li>
                  <li><strong>Blood</strong> Sugar Fasting</li>
                  <li><strong>Blood</strong> Grouping and RH Factor</li>
                  <li>Creatinine, Serum</li>
                </ul>
                <button className="btn btn-default btn-simple btn-round btn-lg" data-aos="flip-up">Get this plan</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card text-center">
              <h5>KIDS PACKAGE</h5>
              <p>Just need initial support</p>
              <div className="price xl-slategray"><h3>$ 99 / <span>year</span></h3></div>
              <div className="body">
                <ul className="list-unstyled">
                  <li><strong>Internal</strong> Medicine Consultation</li>
                  <li>Internal <strong>Medicine</strong> Review</li>
                  <li><strong>Blood</strong> Sugar Fasting</li>
                  <li><strong>Blood</strong> Grouping and RH Factor</li>
                  <li>Creatinine, Serum</li>
                </ul>
                <button className="btn btn-default btn-simple btn-round btn-lg" data-aos="flip-up">Get this plan</button>
              </div>
            </div>
          </div>                    
        </div>
      </div>
    </div>
    {/* Price List */}
  </section>
  {/* start footer */}
<Footer/>
</div>

    );
}
export default Price_list;