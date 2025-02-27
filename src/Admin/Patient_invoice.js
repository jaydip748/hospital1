import Sidebar from "./Sidebar";

function Patient_invoice (){
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
                <a className="name" href="javascript:void(0);">Alexander</a>
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
              <div className="chat-info"> <a className="name" href="javascript:void(0);">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
            </li>
            <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
              <div className="chat-info"> <a className="name" href="javascript:void(0);">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
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
  <section className="content invoice">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Invoice
            <small>Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" /> Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
            <li className="breadcrumb-item active">Invoice</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2><strong>Single</strong> Invoice</h2>
              <ul className="header-dropdown">
                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="javascript:void(0);">Print Invoices</a></li>
                    <li role="presentation" className="divider" />
                    <li><a href="javascript:void(0);">Export to XLS</a></li>
                    <li><a href="javascript:void(0);">Export to CSV</a></li>
                    <li><a href="javascript:void(0);">Export to XML</a></li>
                  </ul>
                </li>
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <h3 className="m-b-0">Invoice Details : <strong className="text-primary">#2015000152</strong></h3>
              <ul className="nav nav-tabs">
                <li className="nav-item inlineblock"><a className="nav-link active" data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
                <li className="nav-item inlineblock"><a className="nav-link" data-toggle="tab" href="#notes" aria-expanded="false">Notes</a></li>
                <li className="nav-item inlineblock"><a className="nav-link" data-toggle="tab" href="#history" aria-expanded="false">History</a></li>
              </ul>                
            </div>
          </div>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane in active" id="details" aria-expanded="true">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                  <div className="card member-card">
                    <div className="header l-coral">
                      <h4 className="m-t-10">Eliana Smith</h4>
                    </div>
                    <div className="member-img">
                      <a href="patient-profile.html">
                        <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle" alt="profile-image" />
                      </a>
                    </div>
                    <div className="body">
                      <strong>Email ID</strong>
                      <p>eliana.smith@info.com</p>
                      <strong>Phone</strong>
                      <p>+123 456 789</p>                                        
                      <strong>Address</strong>
                      <address>85 Bay Drive, New Port Richey, FL 34653</address>                                        
                      <hr />
                      <div className="row">
                        <div className="col-4">
                          <h5>37</h5>
                          <small>Visit</small>
                        </div>
                        <div className="col-4">
                          <h5>5</h5>
                          <small>Surgery</small>
                        </div>
                        <div className="col-4">
                          <h5>1,256$</h5>
                          <small>Spent</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="card" id="details">
                    <div className="body">                                
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <address>
                            <strong>ThemeMakker Inc.</strong><br />
                            795 Folsom Ave, Suite 546<br />
                            San Francisco, CA 54656<br />
                            <abbr title="Phone">P:</abbr> (123) 456-34636
                          </address>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                          <p className="m-b-0"><strong>Order Date: </strong> Jun 15, 2018</p>
                          <p className="m-b-0"><strong>Order Status: </strong> <span className="badge bg-orange">Pending</span></p>
                          <p><strong>Order ID: </strong> #123456</p>
                        </div>
                      </div>
                      <div className="mt-40" />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-hover m-b-0">
                              <thead>
                                <tr>
                                  <th>#</th>                                                        
                                  <th>Item</th>
                                  <th>Description</th>
                                  <th>Treatment </th>
                                  <th>Unit Cost</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Welosef 126MG/6ML SYP</td>
                                  <td>Lorem ipsum dolor sit amet.</td>
                                  <td>1</td>
                                  <td>$180</td>
                                  <td>$180</td>
                                </tr> 
                                <tr>
                                  <td>2</td>
                                  <td>Welosef 126MG/6ML SYP</td>
                                  <td>Lorem ipsum dolor sit amet.</td>
                                  <td>1</td>
                                  <td>$380</td>
                                  <td>$380</td>
                                </tr>                                                    
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Note</h5>
                          <p>Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.</p>
                        </div>
                        <div className="col-md-6 text-right">
                          <p className="m-b-0"><b>Sub-total:</b> 480.00</p>
                          <p className="m-b-0">Discout: 12.9%</p>
                          <p className="m-b-0">VAT: 12.9%</p>                                        
                          <h3 className="m-b-0 m-t-10">USD 480.00</h3>
                        </div>
                      </div>
                      <hr />
                      <div className="hidden-print col-md-12 text-right">
                        <button className="btn btn-warning btn-icon  btn-icon-mini btn-round"><i className="zmdi zmdi-print" /></button>
                        <button className="btn btn-primary btn-round">Submit</button>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>                       
            </div>
            <div role="tabpanel" className="tab-pane" id="notes" aria-expanded="false">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>ID:</strong> 25822</h2>
                      <small>Created at: 8 Jan, 2018</small>
                    </div>
                    <div className="body">
                      <h6>This is Note</h6>
                      <p className="m-b-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                        Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                        pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                        sadipscing mel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>ID:</strong> 25823</h2>
                      <small>Created at: 19 Dec, 2017</small>
                    </div>
                    <div className="body">
                      <h6>This is Note</h6>
                      <p className="m-b-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                        Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                        pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                        sadipscing mel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>ID:</strong> 25824</h2>
                      <small>Created at: 18 Dec, 2017</small>
                    </div>
                    <div className="body">
                      <h6>This is Note</h6>
                      <p className="m-b-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                        Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                        pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                        sadipscing mel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <button className="btn btn-primary btn-round">Add Note</button>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="history" aria-expanded="false">
              <div className="card" id="details">
                <div className="body">                                
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <address>
                        <strong>ThemeMakker Inc.</strong><br />
                        795 Folsom Ave, Suite 546<br />
                        San Francisco, CA 54656<br />
                        <abbr title="Phone">P:</abbr> (123) 456-34636
                      </address>
                    </div>
                    <div className="col-md-6 col-sm-6 text-right">
                      <p className="m-b-0"><strong>Order Date: </strong> Jun 15, 2018</p>
                      <p className="m-b-0"><strong>Order Status: </strong> <span className="badge bg-orange">Pending</span></p>
                      <p><strong>Order ID: </strong> #123456</p>
                    </div>
                  </div>
                  <div className="mt-40" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Description</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Invoice Created</td>
                              <td>18 Dec, 2017</td>
                              <td><span className="badge badge-default">Panding</span></td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Invoice Sent</td>
                              <td>19 Dec, 2017</td>
                              <td><span className="badge badge-default">Panding</span></td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Invoice Paid</td>
                              <td>20 Dec, 2017</td>
                              <td><span className="badge badge-success">Success</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
export default Patient_invoice