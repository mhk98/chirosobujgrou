import React from "react";

const Footer = () => {
  return (
    <div>
      {/*============== Footer Section Start ==============*/}
      <footer
        className="full-row footer-default-dark bg-footer"
        style={{ paddingBottom: 30 }}
      >
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            <div className="col">
              <div className="footer-widget mb-4">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      src="assets/images/logo/CS.png"
                      alt="Image not found!"
                    />
                  </a>
                </div>
                <p>
                  Risus commodo congue augue phas ellus morbi hymenaeos ante
                  tincidu eu orci dictum bibe ndum lacus pla tea primis mi
                  lacinia
                </p>
              </div>
              <div className="footer-widget media-widget mb-4">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget contact-widget mb-4">
                <h3 className="widget-title mb-4">Contact Info</h3>
                <ul>
                  <li>
                    Unicoder Design Agency 301 The Greenhouse, Custard Factory,
                    London, E3 8DY.
                  </li>
                  <li>+1 246-345-0695</li>
                  <li>helpline@homex.com</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget footer-nav mb-4">
                <h3 className="widget-title mb-4">Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Investment Solution</a>
                  </li>
                  <li>
                    <a href="#">Frequenly Ask Question</a>
                  </li>
                  <li>
                    <a href="#">How It Work</a>
                  </li>
                  <li>
                    <a href="#">Become a Member</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget newslatter-widget mb-4">
                <h4 className="widget-title mb-4">Appointment</h4>
                <p>
                  Litora ligula dapibus scelerisque vitae, fermentum aenean
                  gravida lobortis mus pulvinar magna turient primis.
                </p>
                <a href="#" className="btn btn-primary w-100">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*============== Footer Section End ==============*/}
      {/*============== Copyright Section Start ==============*/}
      <div className="copyright bg-footer text-default py-4">
        <div className="container">
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col">
              <span className="text-black">
                © 2022 Uniland All right reserved
              </span>
            </div>
            <div className="col">
              <ul className="line-menu float-end list-color-gray">
                <li>
                  <a href="#">Privacy &amp; Policy </a>
                </li>
                <li>|</li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*============== Copyright Section End ==============*/}
    </div>
  );
};

export default Footer;
