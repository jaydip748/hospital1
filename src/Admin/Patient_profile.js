import Sidebar from "./Sidebar";

function Patient_profile () {
    return(
    <div className="theme-cyan">
  {/* Page Loader */}
  <div className="page-loader-wrapper">
    <div className="loader">
      <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
      <p>Please wait...</p>
    </div>
  </div>
  {/* Overlay For Sidebars */}
  <div className="overlay" />
  {/* Top Bar */}

  {/* Left Sidebar */}
 <Sidebar/>
  {/* Right Sidebar */}

  {/* Chat-launcher */}
  <div className="chat-launcher" />
  <div className="chat-wrapper">
    <div className="card">
      <div className="header">
        <ul className="list-unstyled team-info margin-0">
          <li className="m-r-15"><h2>Doctor Team</h2></li>
          <li>
            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
          </li>
          <li>
            <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
          </li>
        </ul>                       
      </div>
      <div className="body">
        <div className="chat-widget">
          <ul className="chat-scroll-list clearfix">
            <li className="left float-left">
              <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
              <div className="chat-info">
                <a className="name" href="#">Alexander</a>
                <span className="datetime">6:12</span>                            
                <span className="message">Hello, John </span>
              </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
            </li>
            <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
              <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
            </li>
            <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
              <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
            </li>
            <li className="right">
              <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
            </li>
          </ul>
        </div>
        <div className="input-group p-t-15">
          <input type="text" className="form-control" placeholder="Enter text here..." />
          <span className="input-group-addon">
            <i className="zmdi zmdi-mail-send" />
          </span>
        </div>
      </div>
    </div>
  </div>
  <section className="content profile-page">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Patient Profile
            <small className="text-muted">Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
            <i className="zmdi zmdi-plus" />
          </button>
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
            <li className="breadcrumb-item active">Patient Profile</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="card member-card">
            <div className="header l-coral">
              <h4 className="m-t-10">Eliana Smith</h4>
            </div>
            <div className="member-img">
              <a href="patient-invoice.html">
                <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle" alt="profile-image" />
              </a>
            </div>
            <div className="body">
              <div className="col-12">
                <ul className="social-links list-unstyled">
                  <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>                            
              </div>
              <hr />
              <strong>Occupation</strong>
              <p>UI UX Design</p>
              <strong>Email ID</strong>
              <p>will.smith@info.com</p>
              <strong>Phone</strong>
              <p>+123 456 789</p>
              <hr />
              <strong>Address</strong>
              <address>85 Bay Drive, New Port Richey, FL 34653</address>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h2><strong>General</strong> Report</h2>                                
            </div>
            <div className="body">
              <ul className="list-unstyled">
                <li>
                  <div>Blood Pressure</div>
                  <div className="progress m-b-20">
                    <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}> <span className="sr-only">40% Complete (success)</span> </div>
                  </div>
                </li>
                <li>
                  <div>Heart Beat</div>
                  <div className="progress m-b-20">
                    <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}> <span className="sr-only">20% Complete</span> </div>
                  </div>
                </li>
                <li>
                  <div>Haemoglobin</div>
                  <div className="progress m-b-20">
                    <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> <span className="sr-only">60% Complete (warning)</span> </div>
                  </div>
                </li>
                <li>
                  <div>Sugar</div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> <span className="sr-only">80% Complete (danger)</span> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> 
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card">
            <div className="body">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
            </div>
          </div>        
          <div className="card" id="timeline">
            <div className="body">
              <div className="timeline-body">
                <div className="timeline m-border">
                  <div className="timeline-item">
                    <div className="item-content">
                      <div className="text-small">Just now</div>
                      <p>Discharge.</p>
                    </div>
                  </div>
                  <div className="timeline-item border-info">
                    <div className="item-content">
                      <div className="text-small">11:30</div>
                      <p>Routine Checkup</p>
                    </div>
                  </div>
                  <div className="timeline-item border-warning border-l">
                    <div className="item-content">
                      <div className="text-small">10:30</div>
                      <p>Operation </p>
                    </div>
                  </div>
                  <div className="timeline-item border-warning">
                    <div className="item-content">
                      <div className="text-small">3 days ago</div>
                      <p>Routine Checkup</p>
                    </div>
                  </div>
                  <div className="timeline-item border-danger">
                    <div className="item-content">
                      <div className="text--muted">Thu, 10 Mar</div>
                      <p>Routine Checkup</p>
                    </div>
                  </div>
                  <div className="timeline-item border-info">
                    <div className="item-content">
                      <div className="text-small">Sat, 5 Mar</div>
                      <p>Routine Checkup</p>
                    </div>
                  </div>
                  <div className="timeline-item border-danger">
                    <div className="item-content">
                      <div className="text-small">Sun, 11 Feb</div>
                      <p>Blood checkup test</p>
                    </div>
                  </div>
                  <div className="timeline-item border-info">
                    <div className="item-content">
                      <div className="text-small">Thu, 17 Jan</div>
                      <p>Admit patient ward no. 21</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    );
}
export default Patient_profile;