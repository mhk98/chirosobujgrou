import React from "react";
import logo from "../assets/images/logo/CS.png";
const Navbar = () => {
  return (
    <div>
      <div className="preloader">
        <div className="loader xy-center" />
      </div>
      <div id="page_wrapper">
        {/*============== Header Section Start ==============*/}
        <header className="header-style-1 nav-on-banner fixed-bg-secondary bg-dark p-3">
          <div className="top-header xs-mx-none">
            <div className="container">
              <div className="row row-cols-md-2 row-cols-1">
                <div className="col">
                  <ul className="top-contact list-color-black">
                    <li>
                      <a href="#" className="text-white">
                        <i className="fa fa-phone" aria-hidden="true" /> Need
                        Support ? +8801739995456, +8801919236690
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav-bar-top right  d-flex">
                    <li>
                      <a className="text-white" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="signup.html">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="signin.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="main-nav">
            <div className="container">
              <div className="row">
                <div className="col">
                  <nav className="navbar navbar-expand-lg nav-white nav-primary-hover nav-line-active">
                    <a className="navbar-brand" href="#">
                      <img
                        className="nav-logo"
                        src={logo}
                        alt="Image not found !"
                      />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon flaticon-menu flat-small text-primary" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav one-page-nav mx-auto">
                        {/* <li class="nav-item">
                                    <a class="nav-link" href="#all-demo">Demos</a>
                                  </li> */}
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href="index.html"
                          >
                            About Us
                          </a>
                          <ul className="dropdown-menu">
                            {/* <li>
                                        <a class="dropdown-item" href="index.html"
                                          >All Demos</a
                                        >
                                      </li> */}
                            <li>
                              <a
                                className="dropdown-item"
                                href="/why-cs-group"
                                target="_blank"
                              >
                                Why CS Group Ltd{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/company-background"
                              >
                                Company Background
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/our-mission">
                                Our Mission
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/our-vission">
                                Our Vision
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/chairman-message"
                              >
                                Chairman Message
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/managing-director-message"
                              >
                                Managing Director Message
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-toggle dropdown-item"
                                href=""
                              >
                                Board of Directors
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/board-director"
                                  >
                                    Our Board Directors
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/board-advisor"
                                  >
                                    Board Of Advistors
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/our-management"
                              >
                                {" "}
                                Our Management
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/notice-board">
                                Notice Board{" "}
                              </a>
                            </li>
                            {/* <li>
                                        <a class="dropdown-item" href="fullwidth/index-9.html"
                                          >Home 09</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="fullwidth/index-10.html"
                                          >Home 10</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="fullwidth/index-11.html"
                                          >Home 11</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="fullwidth/index-12.html"
                                          >Home 12</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="fullwidth/index-13.html"
                                          >Home 13</a
                                        >
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="fullwidth/index-14.html"
                                          >Home 14
                                          <span class="text-primary ps-3 font-mini"
                                            >New</span
                                          ></a
                                        >
                                      </li>
                                      <li>
                                        <a class="dropdown-item" href="rtl/index.html"
                                          >RTL
                                          <span class="text-primary ps-3 font-mini"
                                            >New</span
                                          ></a
                                        >
                                      </li> */}
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Query
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a className="dropdown-item" href="/land-wanted">
                                Land Wanted
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href="/buyers">
                                Buyers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Our Projects
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a className="dropdown-item" href="/ongoing">
                                On Going
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href="/upcoming">
                                Upcoming
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href="/handover">
                                Hand Over
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Properties
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a className="dropdown-toggle dropdown-item" href>
                                Assets
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="/asset1">
                                    Eicher Drum Truck
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/asset2">
                                    Isuzu Drum Truck
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/asset3">
                                    Noah
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Certification
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="/certification"
                              >
                                Certification{" "}
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href>
                                Clients Feedback
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href>
                                Shareholder Feedback
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Social Activities
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a className="dropdown-item" href="/help-fund">
                                Help Fund
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Sister Concern
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                Jahangir Gym Club
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                English Version School
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                CS Specialized Diagnostic Center
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                Chiro Sobuj Travels
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                CS Promotional &amp; Printing Items Suppliers
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="fullwidth/property-single-v1.html"
                              >
                                CS Electric &amp; Electronics House
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href
                          >
                            Media
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown">
                              <a
                                className="dropdown-item"
                                href="/photo-gallery"
                              >
                                Photo Gallery
                              </a>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-item" href>
                                Video Gallery
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="/contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                      {/* <a href="#" class="btn btn-primary add-listing-btn">+ Create Listing</a> */}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*============== Header Section End ==============*/}

        {/* =============== Counting ================*/}
      </div>
    </div>
  );
};

export default Navbar;
