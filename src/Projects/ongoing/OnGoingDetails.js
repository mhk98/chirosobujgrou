import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import { Link, useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const OnGoingDetails = () => {
  const [ongoingDetails, setOnGoingDetails] = useState([]);
  const { id } = useParams();
  console.log("ongoingDetailsId", ongoingDetails.blocks);

  const getAllOnGoingDetails = async () => {
    const res = await axios.get(
      `https://chirosobujgroup-backend.onrender.com/api/v1/ongoingDetails/${id}`
    );

    setOnGoingDetails(res.data.data);
  };

  useEffect(() => {
    getAllOnGoingDetails();
  }, []);

  // useEffect(() => {
  //   fetch(`https://chirosobujgroup-backend.onrender.com//api/v1/ongoingDetails/${id}`)
  //     .then((res) => res.json())

  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div id="page_wrapper" className="bg-light">
      {/*============== Header Section End ==============*/}
      {/*============== Page title Start ==============*/}
      <div className="full-row py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb" className="mb-2">
                <ol className="breadcrumb mb-0 bg-transparent p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Property</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-primary"
                    aria-current="page"
                  >
                    Single Property
                  </li>
                </ol>
              </nav>
              <h3 className="text-secondary">Single Property</h3>
            </div>
          </div>
        </div>
      </div>
      {/*============== Page title End ==============*/}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ marginTop: "-40px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/slider/slider-14-01.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slider/slider-14-02.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slider/slider-14-03.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*============== Property Details Start ==============*/}
      <div className="full-row pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 order-xl-2">
              {/* Message Form */}
              <div className="widget widget_contact  shadow-one rounded mb-30">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    Floor & Flats
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Bagement</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Ground Floor
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-submenu">
                        1st Floor
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link
                            to={`/ongoing-falt-details/${ongoingDetails.OngoingOngoingId}/Floor1/FlatA`}
                          >
                            Flat A
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            to={`/ongoing-falt-details/${ongoingDetails.OngoingOngoingId}/Floor1/FlatB`}
                          >
                            Flat B
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            to={`/ongoing-falt-details/${ongoingDetails.OngoingOngoingId}/Floor1/FlatC`}
                          >
                            Flat C
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            to={`/ongoing-falt-details/${ongoingDetails.OngoingOngoingId}/Floor1/FlatD`}
                          >
                            Flat D
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/*============== Recent Property Widget End ==============*/}
            </div>
            <div className="col-xl-4 order-xl-2">
              {/* Message Form */}
              <div className="widget widget_contact bg-white border p-30 shadow-one rounded mb-30">
                <h5 className="mb-4">Contact</h5>
                ...
                {/* <div className="media mb-3">
                  <img
                    className="rounded-circle me-3"
                    src="assets/images/user1.jpg"
                    alt="avata"
                  />
                  <div className="media-body">
                    <div className="h6 mt-0">Luann McLawhorn</div>
                    <span>+(81) 84 538 91231</span>
                    <span>info@website.com</span>
                  </div>
                </div> */}
                <form
                  className="quick-search form-icon-right"
                  action="#"
                  method="post"
                >
                  <div className="form-row">
                    <div className="col-12 mb-10">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-10">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-10">
                      <div className="form-group mb-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-10">
                      <div className="form-group mb-0">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <button className="btn btn-primary w-100">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/*============== Recent Property Widget End ==============*/}
            </div>

            <div className="col-xl-5 order-xl-1">
              <div className="property-overview border summary rounded bg-white p-30 mb-30">
                <div className="row mb-4">
                  <div className="col-12">
                    <h4>Overview</h4>
                    <hr />
                    <div className="mt-2">
                      <p style={{ fontSize: "20px" }}>
                        <span>Status:</span>{" "}
                        <span style={{ fontWeight: "bold" }}>Ongoing</span>
                      </p>
                      <p style={{ fontSize: "20px" }}>
                        <span>Category:</span>{" "}
                        <span style={{ fontWeight: "bold" }}>
                          Ongoing Project, Apartment
                        </span>
                      </p>
                      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Commercial property
                      </p>

                      <ul className="list-two-fold-width d-table">
                        <li>
                          <span className="font-500">Blocks:</span>{" "}
                          {ongoingDetails.blocks}
                        </li>
                        <li>
                          <span className="font-500">Floors:</span>{" "}
                          {ongoingDetails.floors}
                        </li>
                        <li>
                          <span className="font-500">Flats:</span>{" "}
                          {ongoingDetails.flats}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1">
                  <div className="col">
                    <h5 className="mb-3">Description</h5>
                    <p>{ongoingDetails.description}</p>
                  </div>
                </div>
              </div>

              <div className="property-overview border rounded bg-white p-30 mb-30">
                <div className="row row-cols-1">
                  <div className="col">
                    <h5 className="mb-3">Property Features</h5>

                    <ul className="list-three-fold-width list-style-tick">
                      <li>{ongoingDetails.feature1}</li>
                      <li>{ongoingDetails.feature2}</li>
                      <li>{ongoingDetails.feature3}</li>
                      <li>{ongoingDetails.feature4}</li>
                      <li>{ongoingDetails.feature5}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="property-overview border rounded bg-white p-30 mb-30">
                <div className="row row-cols-1">
                  <div className="col">
                    <h5 className="mb-3">Nearby Places</h5>
                    <div className="tab-simple tab-action">
                      <div className="tab-element">
                        <div
                          className="tab-pane tab-hide"
                          id="tb-panel-4"
                          style={{ display: "block" }}
                        >
                          <div className="table-striped overflow-x-scroll pb-2">
                            {ongoingDetails?.locations?.map((area) => (
                              <table className="w-100">
                                <thead>
                                  <tr>
                                    <th scope="col" className="font-fifteen">
                                      Name
                                    </th>
                                    <th scope="col" className="font-fifteen">
                                      Distance
                                    </th>
                                    <th scope="col" className="font-fifteen">
                                      Type
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{area.name}</td>
                                    <td>{area.distance}</td>
                                    <td>{area.type}</td>
                                  </tr>
                                </tbody>
                              </table>
                            ))}
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
      </div>
      {/*============== Property Details End ==============*/}

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
      {/* Scroll to top */}
      <div className="scroll-top-vertical xs-mx-none" id="scroll">
        Go Top <i className="ms-2 fa-solid fa-arrow-right-long" />
      </div>
      {/* End Scroll To top */}
      {/*============== Modal Start ==============*/}
      <div className="overlay-dark modal fade quick-view-modal" id="quick-view">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="close view-close">
              <span aria-hidden="true">×</span>
            </div>
            <div className="modal-body property-block summary p-3">
              <div className="row row-cols-xl-2 row-cols-1">
                <div className="col">
                  <div className="overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom m-2">
                    <div className="cata position-absolute">
                      <span className="sale bg-secondary text-black">
                        For Rent
                      </span>
                      <span className="featured bg-primary text-black">
                        Featured
                      </span>
                    </div>
                    <a href="#">
                      <img
                        className="w-100"
                        src="assets/images/property/2.png"
                        alt
                      />
                    </a>
                    <ul className="position-absolute quick-meta">
                      <li>
                        <a href="#">
                          <i className="flaticon-transfer flat-mini" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-like-1 flat-mini" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-share flat-mini" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-printer flat-mini" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="property_text transation py-3 pe-3">
                    <span className="d-inline-block text-primary">Condos</span>
                    <h5 className="modal-title mb-1" id="staticBackdropLabel">
                      <a
                        href="#"
                        className="text-secondary hover-text-primary transation"
                      >
                        Luxury Condos Infront of the street of Green Park
                      </a>
                    </h5>
                    <span className="mt-1 mb-3 d-block font-fifteen">
                      <i className="fas fa-map-marker-alt text-primary" /> 2305
                      Tree Frog Lane Overlandpk, MO 66210
                    </span>
                    <a
                      href="#"
                      className="d-block text-light hover-text-primary font-small mb-2"
                    >
                      ( 100 People Recommended )
                    </a>
                    <div className="d-flex">
                      <span className="text-secondary font-large">
                        $5600 - $8300/<small>mo</small>
                      </span>
                      <span className="text-black font-mini px-2 rounded product-status ms-5 my-1 bg-primary">
                        <i className="fas fa-check" /> Available
                      </span>
                    </div>
                    <div className="product-offers mt-3">
                      <ul className="product-offers-list">
                        <li className="product-offer-item">
                          {" "}
                          <strong>Special Price </strong>Get extra 19% off
                          (price inclusive of discount)
                        </li>
                        <li className="product-offer-item">
                          {" "}
                          <strong>Bank Offer </strong> 10% instant discount on
                          VISA Cards
                        </li>
                        <li className="product-offer-item">
                          {" "}
                          <strong>No cost EMI $49/month.</strong> Standard EMI
                          also available
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="quantity">
                      <ul className="d-flex">
                        <li>
                          <span>Rooms:</span> 5
                        </li>
                        <li>
                          <span>Beds:</span> 3
                        </li>
                        <li>
                          <span>Bathrooms:</span> 2
                        </li>
                        <li>
                          <span>Garage:</span> 1
                        </li>
                        <li>
                          <span>Area:</span> 1100 Sqft
                        </li>
                      </ul>
                    </div>
                    <h5 className="text-secondary my-3">Description</h5>
                    <p>
                      Bibendum purus aenean mus aenean eu interdum nonummy ipsum
                      ad consequat. Dui eros donec faucibus convallis tempus
                      rutrum id donec mus hymenaeos placerat congue curae mauris
                      turpis gravida viverra consequat consequat gravida luctus.
                    </p>
                    <div className="short-description d-flex">
                      <span className="me-4">
                        <b>Highlights:</b>
                      </span>
                      <div className="short-description">
                        <ul className="list-style-tick">
                          <li>Regular Fit.</li>
                          <li>Full sleeves.</li>
                          <li>Machine wash, tumble dry.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex align-items-center post-meta mt-2 py-3 border-top">
                      <div className="agent">
                        <a
                          href="#"
                          className="d-flex text-general align-items-center"
                        >
                          <img
                            className="rounded-circle me-2"
                            src="assets/images/team/1.jpg"
                            alt="avata"
                          />
                          <span>Ali Tufan</span>
                        </a>
                      </div>
                      <div className="post-date ms-auto">
                        <span>2 Month Ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Modal End ==============*/}
    </div>
  );
};

export default OnGoingDetails;
