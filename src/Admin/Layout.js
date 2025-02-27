import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <>

            <div className="theme-cyan">
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>
                {/* Overlay For Sidebars */}
                <div className="overlay" />
                {/* Top Bar */}
                <nav className="navbar p-l-5 p-r-5">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <div className="navbar-header">
                                <a href="javascript:void(0);" className="bars" />
                                <a className="navbar-brand" href="/Dashboard"><img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={30} alt="Oreo" /><span className="m-l-10">Oreo</span></a>
                            </div>
                        </li>
                        <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></a></li>
                        <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
                            <div className="notify"><span className="heartbit" /><span className="point" /></div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="body">
                                    <ul className="menu list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">30min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">31min ago</span></span>
                                                        <span className="message">There are many variations of passages of Lorem Ipsum</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Isabella <span className="time">35min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Alexander <span className="time">35min ago</span></span>
                                                        <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Grayson <span className="time">1hr ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
                            <div className="notify">
                                <span className="heartbit" />
                                <span className="point" />
                            </div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="header">Project</li>
                                <li className="body">
                                    <ul className="menu tasks list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-primary">
                                                    <span className="progress-badge">Neurology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                                                            <span className="progress-value">86%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-info">
                                                    <span className="progress-badge">Gynecology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                                                            <span className="progress-value">45%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar10.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar9.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar8.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-warning">
                                                    <span className="progress-badge">Cardio Monitoring</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }}>
                                                            <span className="progress-value">29%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="javascript:void(0);">View All</a></li>
                            </ul>
                        </li>
                        <li className="d-none d-md-inline-block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-search" />
                                </span>
                            </div>
                        </li>
                        <li className="float-right">
                            <a href="/logout" className="mega-menu" data-close="true"><i className="zmdi zmdi-power" /></a>
                            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
                        </li>
                    </ul>
                </nav>
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
                {/* Main Content */}
               
            </div>



            <Outlet />
        </>
    )
};

export default Layout;