import Sidebar from "./Sidebar";

function Doctor_schedule () {
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
  <section className="content page-calendar">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Calendar
            <small>Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">App</a></li>
            <li className="breadcrumb-item active">Calendar</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">        
      <div className="row">
        <div className="col-md-12 col-lg-4 col-xl-4">
          <div className="card">
            <div className="body">
              <button type="button" className="btn btn-sm btn-round btn-success waves-effect" data-toggle="modal" data-target="#addevent">Add Events</button>
              <button className="btn btn-simple btn-sm btn-primary btn-round d-xl-none m-t-0 float-right" data-toggle="collapse" data-target="#open-events" aria-expanded="false" aria-controls="collapseExample"><i className="zmdi zmdi-chevron-down" /></button>                        
            </div>
          </div>
          <div className="collapse-xs collapse-sm collapse" id="open-events">
            <div className="card">
              <div className="header">
                <h2><strong>Repeating</strong> Event</h2>
                <ul className="header-dropdown">
                  <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                      <li><a href="javascript:void(0);">Action</a></li>
                      <li><a href="javascript:void(0);">Another action</a></li>
                      <li><a href="javascript:void(0);">Something else</a></li>
                    </ul>
                  </li>
                  <li className="remove">
                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                  </li>
                </ul>                        
              </div>
              <div className="body">
                <div className="event-name b-lightred row">
                  <div className="col-2 text-center">
                    <h4>09<span>Dec</span><span>2017</span></h4>
                  </div>
                  <div className="col-10">
                    <h6>Repeating Event</h6>
                    <p>It is a long established fact that a reader will be distracted</p>
                    <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                  </div>
                </div>
                <div className="event-name b-greensea row">
                  <div className="col-2 text-center">
                    <h4>16<span>Dec</span><span>2017</span></h4>
                  </div>
                  <div className="col-10">
                    <h6>Repeating Event</h6>
                    <p>It is a long established fact that a reader will be distracted</p>
                    <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                  </div>
                </div>
                <div className="event-name b-primary row">
                  <div className="col-2 text-center">
                    <h4>11<span>Dec</span><span>2017</span></h4>
                  </div>
                  <div className="col-10">
                    <h6>Conference</h6>
                    <p>It is a long established fact that a reader will be distracted</p>
                    <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h2><strong>Activity</strong></h2>
                <ul className="header-dropdown">
                  <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                      <li><a href="javascript:void(0);">Action</a></li>
                      <li><a href="javascript:void(0);">Another action</a></li>
                      <li><a href="javascript:void(0);">Something else</a></li>
                    </ul>
                  </li>
                  <li className="remove">
                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                  </li>
                </ul>                        
              </div>
              <div className="body">                                                    
                <div className="event-name b-primary row">
                  <div className="col-2 text-center">
                    <h4>13<span>Dec</span><span>2017</span></h4>
                  </div>
                  <div className="col-10">
                    <h6>Birthday</h6>
                    <p>It is a long established fact that a reader will be distracted</p>
                    <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                  </div>
                </div>
              </div>
            </div>                
          </div>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-8">
          <div className="card">
            <div className="body">
              <button className="btn btn-primary btn-sm btn-round waves-effect" id="change-view-today">today</button>
              <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-day">Day</button>
              <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-week">Week</button>
              <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-month">Month</button>                        
            </div>
          </div>
          <div className="card">
            <div className="body">
              <div id="calendar" />
            </div>
          </div>
        </div>
      </div>        
    </div>
  </section>
</div>

);

}

export default Doctor_schedule;