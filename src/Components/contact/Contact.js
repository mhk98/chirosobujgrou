import React from "react";

const Contact = () => {
  return (
    <div>
      {/*============== Page title Start ==============*/}
      <div className="full-row py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-secondary">Contact</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-primary"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/*============== Page title End ==============*/}
      {/*============== Contact form Start ==============*/}
      <div className="full-row pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-2">
              <h4 className="down-line mb-4">Get In Touch</h4>
              <p>
                Nullam vel enim risus. Integer rhoncus hendrerit sem egestas
                porttitor.
              </p>
              <div className="mb-3">
                <ul>
                  <li className="mb-3">
                    <h6 className="mb-0">Office Address :</h6> Level 13, 2
                    Elizabeth St, Melbourne, Victoria 3000 Australia
                  </li>
                  <li className="mb-3">
                    <h6>Contact Number :</h6> (1) 000 991 8830, (800) 8001-8588
                  </li>
                  <li className="mb-3">
                    <h6>Email Address :</h6> Info@patron.com, support@patron.com
                  </li>
                </ul>
              </div>
              <h5 className="mb-2">Career Info</h5>
              <p>
                If you’re interested in employment opportunities at Unicoder,
                please email us:
                <br /> <a href="#">support@unicoderbd.com</a>
              </p>
            </div>
            <div className="col-md-7 order-md-1">
              <h4 className="down-line mb-4">Send Message</h4>
              <div className="form-simple">
                <form
                  id="contact-form"
                  action="#"
                  method="post"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6 mb-20">
                      <label className="mb-2">Full Name:</label>
                      <input
                        type="text"
                        className="form-control bg-white border"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-20">
                      <label className="mb-2">Your Email:</label>
                      <input
                        type="email"
                        className="form-control bg-white border"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-20">
                      <label className="mb-2">Subject:</label>
                      <input
                        type="text"
                        className="form-control bg-white border"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-20">
                      <label className="mb-2">Message:</label>
                      <textarea
                        className="form-control bg-white border"
                        name="message"
                        rows={8}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary"
                        name="submit"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Contact form End ==============*/}

      <section className="google-map google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="google-map__one"
          allowFullScreen
        />
      </section>
    </div>
  );
};

export default Contact;
