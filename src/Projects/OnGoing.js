import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OnGoing = () => {
  const [onGoing, setOnGoing] = useState([]);

  const getAllOnGoing = async () => {
    const data = await axios.get("http://localhost:5000/api/v1/ongoing");
    setOnGoing(data.data.data);
  };

  useEffect(() => {
    getAllOnGoing();
  }, []);
  return (
    <div>
      {/*============== On Going Project Start ==============*/}
      <div className="full-row px-4 pb-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="me-auto">
                <h2 className="d-table mb-4 down-line">On Going Projects</h2>
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
            {onGoing.map((project) => (
              <Link to={`/ongoing-details/${project.Ongoing_Id}`}>
                <div className="col">
                  <div className="property-grid-7 property-block bg-white transation-this">
                    <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                      {/* <div className="cata position-absolute">
                      <span className="sale bg-secondary text-white">
                        For Rent
                      </span>
                    </div> */}
                      {/* <a href={`/ongoing-details/${project.Ongoing_Id}`}> */}
                      <img src={`http://localhost:5000/${project.Image}`} alt />
                      {/* </a> */}
                    </div>
                    <div className="property_text">
                      {/* <span className="listing-price">
                      $1850<small> ( Monthly )</small>
                    </span> */}
                      {/* <h5 className="listing-title">
                      <a href="property-single-v1.html">
                        Family House Residense
                      </a>
                    </h5> */}
                      <span className="listing-location">
                        <i className="fas fa-map-marker-alt" />{" "}
                        {project.Address}
                      </span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span>
                            <i className="fa-solid fa-bed" />
                          </span>
                          {project.Flat}
                        </li>
                        <li title="Baths">
                          <span>
                            <i className="fa-solid fa-shower" />
                          </span>
                          {project.Floor}
                        </li>
                        <li title="Area">
                          <span>
                            <i className="fa-solid fa-vector-square" />
                          </span>
                          {project.Area}
                        </li>
                        {/* <li title="Gas">
                        <span>
                          <i className="fa-solid fa-fire" />
                        </span>
                        Yes
                      </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*============== On Going Project End ==============*/}
    </div>
  );
};

export default OnGoing;
