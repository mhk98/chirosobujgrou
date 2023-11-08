import React from "react";

const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
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

      {/*============== Ongoing Project Start ==============*/}
      <div className="full-row px-4 pb-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="me-auto">
                <h2 className="d-table mb-4 down-line">Ongoing Projects</h2>
                <span className="d-table sub-title text-secondary">
                  Mauris primis turpis Laoreet magna felis mi amet quam enim
                  curae. Sodales semper tempor dictum.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <a href="#" className="ms-auto btn-link d-table py-3 md-mx-0">
                View All Properties
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row pt-5 px-4 sm-px-0">
        <div className="container-fluid">
          <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/1.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1850<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Family House Residense</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/2.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1221850<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Luxury Condos</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/3.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1801250<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      Florida Sea View Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/4.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $11250<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      New Yourk City Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/5.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $11250<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      New Yourk City Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Ongoing Project End ==============*/}
      {/*============== Upcoming Project Start ==============*/}
      <div className="full-row px-4 pb-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="me-auto">
                <h2 className="d-table mb-4 down-line">Upcoming Projects</h2>
                <span className="d-table sub-title text-secondary">
                  Mauris primis turpis Laoreet magna felis mi amet quam enim
                  curae. Sodales semper tempor dictum.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <a href="#" className="ms-auto btn-link d-table py-3 md-mx-0">
                View All Properties
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row pt-5 px-4 sm-px-0">
        <div className="container-fluid">
          <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/6.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1850<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Family House Residense</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/7.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1221850<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Luxury Condos</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/8.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1801250<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      Florida Sea View Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/9.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $11250<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      New Yourk City Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Upcoming Project End ==============*/}
      {/*============== Handover Project Start ==============*/}
      <div className="full-row px-4 pb-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="me-auto">
                <h2 className="d-table mb-4 down-line">Handover Projects</h2>
                <span className="d-table sub-title text-secondary">
                  Mauris primis turpis Laoreet magna felis mi amet quam enim
                  curae. Sodales semper tempor dictum.
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <a href="#" className="ms-auto btn-link d-table py-3 md-mx-0">
                View All Properties
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row pt-5 px-4 sm-px-0">
        <div className="container-fluid">
          <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/10.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1850<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Family House Residense</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/11.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1221850<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">Luxury Condos</a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Sale
                    </span>
                  </div>
                  <img src="assets/images/property/12.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $1801250<small> ( Only )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      Florida Sea View Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="property-grid-7 property-block bg-white transation-this">
                <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                  <div className="cata position-absolute">
                    <span className="sale bg-secondary text-black">
                      For Rent
                    </span>
                  </div>
                  <img src="assets/images/property/13.jpg" alt />
                </div>
                <div className="property_text">
                  <span className="listing-price">
                    $11250<small> ( Monthly )</small>
                  </span>
                  <h5 className="listing-title">
                    <a href="property-single-v1.html">
                      New Yourk City Appartment
                    </a>
                  </h5>
                  <span className="listing-location">
                    <i className="fas fa-map-marker-alt" /> 4213 South
                    Burlington, VT 05403
                  </span>
                  <ul className="d-flex quantity font-fifteen">
                    <li title="Beds">
                      <span>
                        <i className="fa-solid fa-bed" />
                      </span>
                      7
                    </li>
                    <li title="Baths">
                      <span>
                        <i className="fa-solid fa-shower" />
                      </span>
                      5
                    </li>
                    <li title="Area">
                      <span>
                        <i className="fa-solid fa-vector-square" />
                      </span>
                      1200 Sqft
                    </li>
                    <li title="Gas">
                      <span>
                        <i className="fa-solid fa-fire" />
                      </span>
                      Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Handover Project End ==============*/}
      {/*============== Apartment Sketch Section Start ==============*/}
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="tagline-3 d-table text-dark font-500 mx-auto mb-3">
                Apartment Sketch
              </span>
              <h1 className="main-title w-50 mx-auto mb-4 text-dark text-center w-sm-100">
                Apartments Plan
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tab-style-1 list-color-secondary mb-4">
                <ul className="nav nav-pills list-dark-active">
                  <li className="nav-item">
                    <a
                      href="#pill1-deluxe"
                      className="nav-link active"
                      data-bs-toggle="pill"
                    >
                      Deluxe Portion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#pill1-garden"
                      className="nav-link"
                      data-bs-toggle="pill"
                    >
                      Garden House
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#pill1-double"
                      className="nav-link"
                      data-bs-toggle="pill"
                    >
                      Double Room
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="pill1-deluxe">
                  <div className="row row-cols-lg-2 row-cols-1 g-4">
                    <div className="col">
                      <div
                        className="apartments-plan-info text-dark"
                        style={{ backgroundColor: "#DBE61D" }}
                      >
                        <h2 className="text-dark">Deluxe Portion</h2>
                        <p>
                          Enimad minim veniam quis nostrud exercitation ullamco
                          laboris. Lorem ipsum dolor sit amet cons aetetur
                          adipisicing elit sedo eiusmod tempor.Incididunt labore
                          et dolore magna aliqua. sed ayd minim veniam.
                        </p>
                        <div className="apartments-info-list mt-40">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bathroom</label> <span>45 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="apartments-plan-img">
                        <img src="assets/images/clipart/17.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pill1-garden">
                  <div className="row row-cols-xl-2 row-cols-sm-2 row-cols-1 g-4">
                    <div className="col">
                      <div className="apartments-plan-info bg-primary text-dark">
                        <h2 className="text-dark">Deluxe Portion</h2>
                        <p>
                          Enimad minim veniam quis nostrud exercitation ullamco
                          laboris. Lorem ipsum dolor sit amet cons aetetur
                          adipisicing elit sedo eiusmod tempor.Incididunt labore
                          et dolore magna aliqua. sed ayd minim veniam.
                        </p>
                        <div className="apartments-info-list mt-40">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bathroom</label> <span>45 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="apartments-plan-img">
                        <img src="assets/images/clipart/17.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pill1-double">
                  <div className="row row-cols-xl-2 row-cols-sm-2 row-cols-1 g-4">
                    <div className="col">
                      <div className="apartments-plan-info bg-primary text-dark">
                        <h2 className="text-dark">Deluxe Portion</h2>
                        <p>
                          Enimad minim veniam quis nostrud exercitation ullamco
                          laboris. Lorem ipsum dolor sit amet cons aetetur
                          adipisicing elit sedo eiusmod tempor.Incididunt labore
                          et dolore magna aliqua. sed ayd minim veniam.
                        </p>
                        <div className="apartments-info-list mt-40">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bathroom</label> <span>45 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="apartments-plan-img">
                        <img src="assets/images/clipart/17.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Apartment Sketch Section End ==============*/}
      {/*============== Recent Property End ==============*/}
      {/*============== Property Category Start ==============*/}
      <div className="full-row bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col mb-5">
              <h2 className="down-line w-50 mx-auto mb-4 text-center text-white w-sm-100">
                What You Area Looking For?
              </h2>
              <span className="d-table w-50 w-sm-100 sub-title text-white fw-normal mx-auto text-center">
                Mauris primis turpis Laoreet magna felis mi amet quam enim
                curae. Sodales semper tempor dictum faucibus habitasse.
              </span>
            </div>
          </div>
          <div className="row row-cols-lg-5 row-cols-sm-4 row-cols-1 g-3 justify-content-center">
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-home flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Living House</h6>
                <p>Preview listing of accommodation property living houses</p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-sketch-1 flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Solid Land</h6>
                <p>
                  Hight listed solid use-able land in most popular area for
                  development
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-online-booking flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Office Floor</h6>
                <p>Preview most popular are office building listed category</p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-shop flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Commercial</h6>
                <p>
                  Listing Commercial property for business and factory
                  development
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-real-estate flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Hostel Room</h6>
                <p>
                  If you are single looking for sinlge living, preview the
                  hostel listing
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-online-booking flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Appartment</h6>
                <p>
                  For family living appartment, find your best appartment in our
                  directort list
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-sketch flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Condo</h6>
                <p>
                  In our directory we have listed luxury condo for rent and sale
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-spa flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Villa House</h6>
                <p>
                  Please who like villa house click here this category listed
                </p>
              </a>
            </div>
            <div className="col">
              <a
                href="#"
                className="text-center d-flex flex-column align-items-center hover-text-black p-4 bg-white transation text-general hover-bg-primary h-100"
              >
                <div className="box-70px position-relative">
                  <i className="flaticon-bed flat-medium d-inline-block text-primary position-absolute xy-center" />
                </div>
                <h6 className="d-block text-secondary">Hotel Room</h6>
                <p>
                  The traveller people can find best hotel here for living night
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <h3 className="mb-4 text-center w-50 w-sm-100 mx-auto">
                Corporate Services For Our Honourable Customer
              </h3>
              <span className="text-secondary w-75 d-table text-center w-sm-100 mx-auto pb-4">
                Molestie accumsan ipsum condimentum curabitur euismod tempor
                aptent nullam aliquet phasellus. Lobortis felis tortor curae mi
                semper porta pellentesque.
              </span>
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-capital flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Funding New Business</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-cost flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Finincial Planing &amp; Budget</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-insurance flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Business Insurance</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-money-1 flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Stock Exchange Help</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-cargo flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Export &amp; Trade Assistance</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
            <div className="col mb-5">
              <div className="thumb-modern-border p-4 h-100">
                <i className="flaticon-group flat-medium text-primary bg-gray d-table" />
                <h5 className="my-3">
                  <a href="#">Development Program</a>
                </h5>
                <p>
                  Mollis lorem posuere porta class sociis rhoncus primis ornare.
                  Suscipit risus volutpat varius eget. Elementum mauris tempor
                  at class nullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Our Service End*/}
      {/*============== Property Location Start ==============*/}
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="text-secondary text-center mb-5">
                <h2 className="text-secondary mx-auto mb-4">
                  Find Properties in These Cities
                </h2>
                <span className="d-table w-50 w-sm-100 sub-title mx-auto text-center">
                  Mauris primis turpis Laoreet magna felis mi amet quam enim
                  curae. Sodales semper tempor dictum faucibus habitasse.
                </span>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-5 row-cols-md-5 row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="hover-img-zoom text-center mb-4">
                <div className="overflow-hidden transation thumbnail-img rounded-circle bg-secondary">
                  <img
                    src="assets/images/location/3.png"
                    alt="image not found"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="transation">
                    <a href="#" className="font-400">
                      Miami
                    </a>
                  </h5>
                  <p>82 Properties</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hover-img-zoom text-center mb-4">
                <div className="overflow-hidden transation thumbnail-img rounded-circle bg-secondary">
                  <img
                    src="assets/images/location/1.png"
                    alt="image not found"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="transation">
                    <a href="#" className="font-400">
                      Los Angeles
                    </a>
                  </h5>
                  <p>57 Properties</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hover-img-zoom text-center mb-4">
                <div className="overflow-hidden transation thumbnail-img rounded-circle bg-secondary">
                  <img
                    src="assets/images/location/2.png"
                    alt="image not found"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="transation">
                    <a href="#" className="font-400">
                      Rome
                    </a>
                  </h5>
                  <p>170 Properties</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hover-img-zoom text-center mb-4">
                <div className="overflow-hidden transation thumbnail-img rounded-circle bg-secondary">
                  <img
                    src="assets/images/location/4.png"
                    alt="image not found"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="transation">
                    <a href="#" className="font-400">
                      Paris
                    </a>
                  </h5>
                  <p>17 Properties</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hover-img-zoom text-center mb-4">
                <div className="overflow-hidden transation thumbnail-img rounded-circle bg-secondary">
                  <img
                    src="assets/images/location/5.png"
                    alt="image not found"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="transation">
                    <a href="#" className="font-400">
                      Florida
                    </a>
                  </h5>
                  <p>27 Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Property Location End ==============*/}
      {/*============== Data Counting Start ==============*/}
      <div className="full-row p-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="fact-counter bg-secondary pt-5 pb-4 rounded">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div
                      className="mb-30 text-center count wow fadeIn animate"
                      data-wow-duration="300ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "300ms",
                        animationName: "fadeIn",
                      }}
                    >
                      <span
                        className="count-num text-primary h2"
                        data-speed={3000}
                        data-stop={310}
                      >
                        3210
                      </span>
                      <h5 className="text-white font-400 pt-2">
                        Listed Property
                      </h5>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="mb-30 text-center count wow fadeIn animate"
                      data-wow-duration="300ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "300ms",
                        animationName: "fadeIn",
                      }}
                    >
                      <span
                        className="count-num text-primary h2"
                        data-speed={3000}
                        data-stop={51}
                      >
                        51
                      </span>
                      <h5 className="text-white font-400 pt-2">Mega Project</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="mb-30 text-center count wow fadeIn animate"
                      data-wow-duration="300ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "300ms",
                        animationName: "fadeIn",
                      }}
                    >
                      <span
                        className="count-num text-primary h2"
                        data-speed={3000}
                        data-stop={25}
                      >
                        25
                      </span>
                      <h5 className="text-white font-400 pt-2">Awards Won</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="mb-30 text-center count wow fadeIn animate"
                      data-wow-duration="300ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "300ms",
                        animationName: "fadeIn",
                      }}
                    >
                      <span
                        className="count-num text-primary h2"
                        data-speed={3000}
                        data-stop={2130}
                      >
                        2130
                      </span>
                      <h5 className="text-white font-400 pt-2">
                        Happy Clients
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row">
        <div className="container">
          <div className="row">
            <div className="col mb-5">
              <span className="text-primary tagline pb-2 d-table m-auto">
                Testimonial
              </span>
              <h2 className="down-line w-50 mx-auto mb-4 text-center w-sm-100">
                Whay Client Says About Us
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="testimonial-simple text-center px-5">
                <div className="text-carusel owl-carousel">
                  <div className="item">
                    <i className="flaticon-right-quote flat-large text-primary d-table mx-auto" />
                    <blockquote className="text-secondary fs-5 fst-italic">
                      “ Posuere mus curabitur parturient scelerisque suspendisse
                      elementum facilisis dignissim non purus torquent turpis
                      interdum hendrerit erat ultrices pretium risus elementum.
                      Fringilla aliquet mattis lacinia quam a montes maecenas
                      parturient urna varius. Sollicitudin pede sapien taciti
                      dui. ”
                    </blockquote>
                    <h4 className="mt-4 font-400">Mark Wiggins</h4>
                    <span className="text-primary font-fifteen">
                      CEO ( Grodins Group )
                    </span>
                  </div>
                  <div className="item">
                    <i className="flaticon-right-quote flat-large text-primary d-table mx-auto" />
                    <blockquote className="text-secondary fs-5 fst-italic">
                      “ Posuere mus curabitur parturient scelerisque suspendisse
                      elementum facilisis dignissim non purus torquent turpis
                      interdum hendrerit erat ultrices pretium risus elementum.
                      Fringilla aliquet mattis lacinia quam a montes maecenas
                      parturient urna varius. Sollicitudin pede sapien taciti
                      dui. ”
                    </blockquote>
                    <h4 className="mt-4 font-400">Mark Wiggins</h4>
                    <span className="text-primary font-fifteen">
                      CEO ( Grodins Group )
                    </span>
                  </div>
                  <div className="item">
                    <i className="flaticon-right-quote flat-large text-primary d-table mx-auto" />
                    <blockquote className="text-secondary fs-5 fst-italic">
                      “ Posuere mus curabitur parturient scelerisque suspendisse
                      elementum facilisis dignissim non purus torquent turpis
                      interdum hendrerit erat ultrices pretium risus elementum.
                      Fringilla aliquet mattis lacinia quam a montes maecenas
                      parturient urna varius. Sollicitudin pede sapien taciti
                      dui. ”
                    </blockquote>
                    <h4 className="mt-4 font-400">Mark Wiggins</h4>
                    <span className="text-primary font-fifteen">
                      CEO ( Grodins Group )
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============== Testimonial Section End ==============*/}

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

export default Home;
