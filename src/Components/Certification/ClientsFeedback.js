import React from "react";

const ClientsFeedback = () => {
  return (
    <div>
      {/*============== Page Banner Start ==============*/}
      <div
        className="page-banner-simple bg-secondary py-40 "
        style={{
          backgroundImage: "url(assets/images/background/bg-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          marginTop: "140px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="banner-title text-white">Client Feedback</h3>
              <span className="banner-tagline font-medium text-white">
                Whether buying or renting, finding the right place to live is a
                personal and unique experience
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*============== Page Banner End ==============*/}
      {/*============== Award Content Start ==============*/}
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="innter-sidebar widget-box-model">
                {/* Category Field */}
                <div className="widget widget_sidebarnav">
                  <h5 className="widget-title mb-3">Sidebar Navigation</h5>
                  <ul>
                    <li className="cat-item cat-item-3">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="our-mission.html">Mission</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="our-services.html">Our Services</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="advance-search-v1.html">Slide Filter Search</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="left-filter-property-v1.html">
                        Left Filter Search
                      </a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="career.html">Career</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="cat-item cat-item-2">
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="bg-white border rounded p-30">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="border-end sm-mb-20">
                      <h5 className="text-primary mb-1">
                        BEST BUSINESS AWARDS
                      </h5>
                      <span>Melbourne, Australia</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-secondary mb-2">Description :</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="border-end sm-mb-20">
                      <h5 className="text-primary mb-1">
                        AQUNATION TRADE AWARDS
                      </h5>
                      <span>Melbourne, Australia</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-secondary mb-2">Description :</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="border-end sm-mb-20">
                      <h5 className="text-primary mb-1">
                        BEST CONSULTING AWARDS
                      </h5>
                      <span>Melbourne, Australia</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-secondary mb-2">Description :</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Award Content End ==============*/}
    </div>
  );
};

export default ClientsFeedback;
