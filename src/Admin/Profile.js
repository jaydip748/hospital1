import Sidebar from "./Sidebar";

function Profile() {
  return (
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
      <Sidebar />
      {/* Right Sidebar */}

      {/* Chat-launcher */}
      <div className="chat-launcher" />
      <div className="chat-wrapper">
        <div className="card">
          <div className="header">
            <ul className="list-unstyled team-info margin-0">
              <li className="m-r-15"><h2>Dr. Team</h2></li>
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
              <h2>Profile
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-edit" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12">
              <div className="card profile-header">
                <div className="body text-center">
                  <div className="profile-image"> <img src="../assets/images/profile_av.jpg" alt /> </div>
                  <div>
                    <h4 className="m-b-0"><strong>Dr. Charlotte</strong> Deo</h4>
                    <span className="job_post">Neurologist</span>
                    <p>795 Folsom Ave, Suite 600<br /> San Francisco, CADGE 94107</p>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-round">Follow</button>
                    <button className="btn btn-primary btn-round btn-simple">Message</button>
                  </div>
                  <p className="social-icon m-t-5 m-b-0">
                    <a title="Twitter" href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a>
                    <a title="Facebook" href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a>
                    <a title="Google-plus" href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a>
                    <a title="Behance" href="javascript:void(0);"><i className="zmdi zmdi-behance" /></a>
                    <a title="Instagram" href="javascript:void(0);"><i className="zmdi zmdi-instagram " /></a>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="body">
                  <div className="workingtime">
                    <h6>Working Time</h6>
                    <small className="text-muted">Tuesday</small>
                    <p>06:00 AM - 07:00 AM</p>
                    <hr />
                    <small className="text-muted">Thursday</small>
                    <p>06:00 AM - 07:00 AM</p>
                    <hr />
                  </div>
                  <div className="reviews">
                    <h6>Reviews</h6>
                    <small className="text-muted">Staff</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Punctuality</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Helpfulness</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </p>
                    <hr />
                    <small className="text-muted">Knowledge</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Cost</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="card">
                <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Followers">Followers</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#friends">Friends</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane body active" id="Followers">
                    <ul className="right_chat list-unstyled">
                      <li className="online">
                        <a href="javascript:void(0);">
                          <div className="media">
                            <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt />
                            <div className="media-body">
                              <span className="name">Chris Fox</span>
                              <span className="message">Designer, Blogger</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="javascript:void(0);">
                          <div className="media">
                            <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt />
                            <div className="media-body">
                              <span className="name">Joge Lucky</span>
                              <span className="message">Java Developer</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="offline">
                        <a href="javascript:void(0);">
                          <div className="media">
                            <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt />
                            <div className="media-body">
                              <span className="name">Isabella</span>
                              <span className="message">CEO, Thememakker</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="offline">
                        <a href="javascript:void(0);">
                          <div className="media">
                            <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt />
                            <div className="media-body">
                              <span className="name">Folisise Chosielie</span>
                              <span className="message">Art director, Movie Cut</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="javascript:void(0);">
                          <div className="media">
                            <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt />
                            <div className="media-body">
                              <span className="name">Alexander</span>
                              <span className="message">Writter, Mag Editor</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane body" id="friends">
                    <ul className="new_friend_list list-unstyled row">
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Jackson</h6>
                          <small className="join_date">Today</small>
                        </a>
                      </li>
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar2.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Aubrey</h6>
                          <small className="join_date">Yesterday</small>
                        </a>
                      </li>
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar3.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Oliver</h6>
                          <small className="join_date">08 Nov</small>
                        </a>
                      </li>
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar4.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Isabella</h6>
                          <small className="join_date">12 Dec</small>
                        </a>
                      </li>
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Jacob</h6>
                          <small className="join_date">12 Dec</small>
                        </a>
                      </li>
                      <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                        <a href="#">
                          <img src="../assets/images/sm/avatar5.jpg" className="img-thumbnail" alt="User Image" />
                          <h6 className="users_name">Matthew</h6>
                          <small className="join_date">17 Dec</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="card">
                <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Account">Account</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane body active" id="about">
                    <p>Dr. Charlotte Deo Leon is a neurosurgeon in East Patchogue,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. He received his medical degree from Harvard Medical School and has been in practice for 21 years. He is one of 5 doctors at Brookhaven Memorial Hospital Medical Center and one of 9 at Southside Hospital who specialize in Neurological Surgery.</p>
                    <h6>Qualifications</h6>
                    <hr />
                    <ul className="list-unstyled">
                      <li>
                        <p><strong>Hospital Affiliations:</strong> UCSF MEDICAL CENTER</p>
                      </li>
                      <li>
                        <p><strong>Medical School:</strong> Palmer College of Chiropractic 1978</p>
                      </li>
                      <li>
                        <p><strong>Residency:</strong> New york</p>
                      </li>
                      <li>
                        <p><strong>Certifications:</strong> Certified Chiropractic Sports Physician 1982</p>
                      </li>
                      <li>
                        <p><strong>Gender:</strong> Female</p>
                      </li>
                      <li>
                        <p><strong>Experience / Tranining:</strong> Past-President, Int. Fed. 1991</p>
                      </li>
                      <li>
                        <p><strong>Internship:</strong> Palmer Clinic</p>
                      </li>
                    </ul>
                    <h6>Specialties</h6>
                    <hr />
                    <ul className="list-unstyled specialties">
                      <li>Breast Surgery</li>
                      <li>Colorectal Surgery</li>
                      <li>Endocrinology</li>
                      <li>Cardiology</li>
                      <li>Cosmetic Dermatology</li>
                      <li>Mole checks and monitoring</li>
                      <li>Clinical Neurophysiology</li>
                    </ul>
                  </div>
                  <div className="tab-pane body" id="Account">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Current Password" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="New Password" />
                    </div>
                    <button className="btn btn-info btn-round">Save Changes</button>
                    <hr />
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="City" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="E-mail" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Country" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group m-b-10">
                          <textarea rows={4} className="form-control no-resize" placeholder="Address Line 1" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkbox">
                          <input id="procheck2" type="checkbox" />
                          <label htmlFor="procheck2">New task notifications</label>
                        </div>
                        <div className="checkbox">
                          <input id="procheck3" type="checkbox" />
                          <label htmlFor="procheck3">New friend request notifications</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn-primary btn-round">Save Changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2><strong>Recent</strong> Activity</h2>
                  <ul className="header-dropdown">
                    <li className="remove">
                      <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                    </li>
                  </ul>
                </div>
                <div className="body user_activity">
                  <div className="streamline b-accent">
                    <div className="sl-item">
                      <img className="user rounded-circle" src="../assets/images/xs/avatar4.jpg" alt />
                      <div className="sl-content">
                        <h5 className="m-b-0">Admin Birthday</h5>
                        <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
                      </div>
                    </div>
                    <div className="sl-item">
                      <img className="user rounded-circle" src="../assets/images/xs/avatar5.jpg" alt />
                      <div className="sl-content">
                        <h5 className="m-b-0">Add New Contact</h5>
                        <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
                        <small><strong>P:</strong> +264-625-2323</small>
                        <small><strong>E:</strong> maryamamiri@gmail.com</small>
                      </div>
                    </div>
                    <div className="sl-item">
                      <img className="user rounded-circle" src="../assets/images/xs/avatar6.jpg" alt />
                      <div className="sl-content">
                        <h5 className="m-b-0">General Surgery</h5>
                        <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
                        <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                      </div>
                    </div>
                    <div className="sl-item">
                      <img className="user rounded-circle" src="../assets/images/xs/avatar7.jpg" alt />
                      <div className="sl-content">
                        <h5 className="m-b-0">General Surgery</h5>
                        <small>45min ago <a href="javascript:void(0);" className="text-info">Fidel Tonn</a>.</small>
                        <small><strong>P:</strong> +264-625-2323</small>
                        <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced used since the 1500s is reproduced</small>
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
export default Profile;