import { Outlet, Link } from "react-router-dom";

function Layout  () {
  return (
    <>
  
<div>
  <div id="loading" className="page-loader-wrapper">
    <div className="loader">
      <div className="m-t-30"><img className="zmdi-hc-spin" src="assets/images/loader.svg" width={48} height={48} alt="Oreo" /></div>
      <p>Please wait...</p>        
    </div>
  </div>
  <div className="wrapper">
    {/* start loading */}    
    <div className="main_header">
      <section id="top-nav">
        <div className="container">
          <div className="top">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="left">
                  <ul className="list-unstyled m-b-0">
                    <li><a href="#" className="btn btn-link"><i className="zmdi zmdi-email m-r-5" />info@example.com</a>
                      <a href="#" className="btn btn-link"><i className="zmdi zmdi-phone m-r-5" />+
                        202-555-0191</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="text-right d-none d-md-block">
                  <ul className="list-unstyled m-b-0">
                    <li><a href="/Login" className="btn btn-link">Sign in</a> <a href="/Register" className="btn btn-link">sign
                        up</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header id="header">
        <div className="container">
          <div className="head">
            <div className="row">
              <div className="col-lg-5 col-sm-5">
                <div className="left">
                  <a href="/" className="navbar-brand"><img src="assets/images/logo.svg" alt="logo" /></a>
                </div>
              </div>
              <div className="col-lg-7 col-sm-7">
                <div className="text-right d-none d-md-block">
                  <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
                    Sunday CLOSED </p>
                  <p className="col-white m-b-0"><i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
                    94559. United States </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="navbar" data-aos="fade-down">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><a className="nav-link" href="/Service">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="Department">Departments</a></li>
             
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctor</a>
                  <div className="dropdown-menu p-0">
                  <li className="nav-item"><a className="nav-link" href="/Doctor">Doctors</a></li>
                  <li className="nav-item"><a className="nav-link" href="/Doctor_detail">Doctor_detail</a></li>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/Blog">Blog</a>
                    <a className="dropdown-item" href="/Blog_detail">Blog Detail</a>
                  </div>
                </li>
              
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/About">About Us</a>
                    <a className="dropdown-item" href="/Faq">FAQs</a>
                    <a className="dropdown-item" href="/Galary">Galary</a>
                    <a className="dropdown-item" href="/Price_list">Price list</a>
                  </div>
                </li>
                <li className="nav-item"><a className="nav-link" href="/Contact">Contact Us</a></li>
                <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign in</a></li>
                <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign up</a></li>
              </ul>
              <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* start hero */}
   
    {/* Content Area */}
 
    {/* start footer */}
  
  </div>
</div>


      <Outlet />
    </>
  )
};

export default Layout;