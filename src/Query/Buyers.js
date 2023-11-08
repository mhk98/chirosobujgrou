import React from 'react';

const Buyers = () => {
    return (
       <div>
  {/*============== Page title Start ==============*/}
  <div className="full-row py-5" style={{marginTop: 100}}>
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-secondary">Our Buyers</h3>
        </div>
      </div>
    </div>
  </div>
  {/*============== Page title End ==============*/}
  {/*============== Agent Grid Section Start ==============*/}
  <div className="full-row pt-0">
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <div className="agent-sidebar">
            {/*============== Agent Search Widget Start ==============*/}
            <div className="widget agent-search">
              <h5 className="mb-30">Our Buyers</h5>
              <form action="#" method="POST" className="quick-search form-icon-right">
                <div className="row row-cols-1 g-3">
                  <div className="col">
                    <input type="text" className="form-control" name="search" placeholder="Keywords" />
                  </div>
                  <div className="col">
                    <select name="agent-type">
                      <option>Agent Type</option>
                      <option>Independent</option>
                      <option>Company Base</option>
                      <option>Agency</option>
                    </select>
                  </div>
                  <div className="col">
                    <div className="position-relative">
                      <input type="text" className="form-control" name="location" placeholder="Location" />
                      <i className="flaticon-placeholder flat-mini icon-font y-center text-dark" />
                    </div>
                  </div>
                  <div className="col">
                    <select name="agent-level">
                      <option>Agent Level</option>
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                    </select>
                  </div>
                  <div className="col">
                    <select name="category">
                      <option>Spacific Category</option>
                      <option>House</option>
                      <option>Office</option>
                      <option>Appartment</option>
                      <option>Condos</option>
                      <option>Villa</option>
                      <option>Small Family</option>
                      <option>Single Room</option>
                    </select>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary w-100">Search</button>
                  </div>
                </div>
              </form>
            </div>
            {/*============== Agent Search Widget End ==============*/}
            {/*============== Feature Property Widget Start ==============*/}
            <div className="widget property_carousel_widget">
              <h5 className="mb-30">Feature Property</h5>
              <div className="single-carusel owl-carousel nav-disable">
                <div className="item">
                  <div className="property-grid-2 property-block transation mb-3">
                    <div className="overflow-hidden position-relative transation thumbnail-img rounded bg-secondary hover-img-zoom">
                      <div className="cata position-absolute">
                        <span className="sale bg-secondary text-white">For Sale</span>
                      </div>
                      <a href="property-single-v1.html"><img src="assets/images/property_grid/property-grid-5.png" alt="Image Not Found!" /></a>
                      <ul className="position-absolute quick-meta">
                        <li>
                          <a href="#" title="Add Compare"><i className="flaticon-transfer flat-mini" /></a>
                        </li>
                        <li>
                          <a href="#" title="Add Favourite"><i className="flaticon-like-1 flat-mini" /></a>
                        </li>
                        <li className="md-mx-none">
                          <a className="quick-view" href="#quick-view" title="Quick View"><i className="flaticon-zoom-increasing-symbol flat-mini" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content py-3">
                      <div className="post-meta font-small text-uppercase list-color-primary">
                        <a href="#" className="listing-ctg"><i className="fa-solid fa-building" /><span>Villa</span></a>
                      </div>
                      <h5 className="listing-title">
                        <a href="property-single-v1.html">Gorgeous Villa Bay View</a>
                      </h5>
                      <span className="listing-location"><i className="fas fa-map-marker-alt" /> 2305 Tree
                        Frog Lane Overlandpk</span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span><i className="fa-solid fa-bed" /></span>3
                        </li>
                        <li title="Baths">
                          <span><i className="fa-solid fa-shower" /></span>2
                        </li>
                        <li title="Area">
                          <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                        </li>
                        <li title="Gas">
                          <span><i className="fa-solid fa-fire" /></span>Yes
                        </li>
                      </ul>
                      <span className="listing-price">$12000<small> ( Monthly )</small></span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="property-grid-2 property-block transation mb-3">
                    <div className="overflow-hidden position-relative transation thumbnail-img rounded bg-secondary hover-img-zoom">
                      <div className="cata position-absolute">
                        <span className="sale bg-secondary text-white">For Sale</span>
                      </div>
                      <a href="property-single-v1.html"><img src="assets/images/property_grid/property-grid-6.png" alt="Image Not Found!" /></a>
                      <ul className="position-absolute quick-meta">
                        <li>
                          <a href="#" title="Add Compare"><i className="flaticon-transfer flat-mini" /></a>
                        </li>
                        <li>
                          <a href="#" title="Add Favourite"><i className="flaticon-like-1 flat-mini" /></a>
                        </li>
                        <li className="md-mx-none">
                          <a className="quick-view" href="#quick-view" title="Quick View"><i className="flaticon-zoom-increasing-symbol flat-mini" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content py-3">
                      <div className="post-meta font-small text-uppercase list-color-primary">
                        <a href="#" className="listing-ctg"><i className="fa-solid fa-building" /><span>Appartment</span></a>
                      </div>
                      <h5 className="listing-title">
                        <a href="property-single-v1.html">Luxury Condos</a>
                      </h5>
                      <span className="listing-location"><i className="fas fa-map-marker-alt" /> 2305 Tree
                        Frog Lane Overlandpk</span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span><i className="fa-solid fa-bed" /></span>3
                        </li>
                        <li title="Baths">
                          <span><i className="fa-solid fa-shower" /></span>2
                        </li>
                        <li title="Area">
                          <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                        </li>
                        <li title="Gas">
                          <span><i className="fa-solid fa-fire" /></span>Yes
                        </li>
                      </ul>
                      <span className="listing-price">$1205500 <del>$1210000</del><small> ( Price Only )</small></span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="property-grid-2 property-block transation mb-3">
                    <div className="overflow-hidden position-relative transation thumbnail-img rounded bg-secondary hover-img-zoom">
                      <div className="cata position-absolute">
                        <span className="sale bg-secondary text-white">For Rent</span>
                      </div>
                      <a href="property-single-v1.html"><img src="assets/images/property_grid/property-grid-7.png" alt="Image Not Found!" /></a>
                      <ul className="position-absolute quick-meta">
                        <li>
                          <a href="#" title="Add Compare"><i className="flaticon-transfer flat-mini" /></a>
                        </li>
                        <li>
                          <a href="#" title="Add Favourite"><i className="flaticon-like-1 flat-mini" /></a>
                        </li>
                        <li className="md-mx-none">
                          <a className="quick-view" href="#quick-view" title="Quick View"><i className="flaticon-zoom-increasing-symbol flat-mini" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content py-3">
                      <div className="post-meta font-small text-uppercase list-color-primary">
                        <a href="#" className="listing-ctg"><i className="fa-solid fa-building" /><span>Appartment</span></a>
                      </div>
                      <h5 className="listing-title">
                        <a href="property-single-v1.html">New Developed Condos</a>
                      </h5>
                      <span className="listing-location"><i className="fas fa-map-marker-alt" /> 2305 Tree
                        Frog Lane Overlandpk</span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span><i className="fa-solid fa-bed" /></span>3
                        </li>
                        <li title="Baths">
                          <span><i className="fa-solid fa-shower" /></span>2
                        </li>
                        <li title="Area">
                          <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                        </li>
                        <li title="Gas">
                          <span><i className="fa-solid fa-fire" /></span>Yes
                        </li>
                      </ul>
                      <span className="listing-price">$17500 <del>$21000</del><small> ( Monthly )</small></span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="property-grid-2 property-block transation mb-3">
                    <div className="overflow-hidden position-relative transation thumbnail-img rounded bg-secondary hover-img-zoom">
                      <div className="cata position-absolute">
                        <span className="sale bg-secondary text-white">For Rent</span>
                      </div>
                      <a href="property-single-v1.html"><img src="assets/images/property_grid/property-grid-8.png" alt="Image Not Found!" /></a>
                      <ul className="position-absolute quick-meta">
                        <li>
                          <a href="#" title="Add Compare"><i className="flaticon-transfer flat-mini" /></a>
                        </li>
                        <li>
                          <a href="#" title="Add Favourite"><i className="flaticon-like-1 flat-mini" /></a>
                        </li>
                        <li className="md-mx-none">
                          <a className="quick-view" href="#quick-view" title="Quick View"><i className="flaticon-zoom-increasing-symbol flat-mini" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content py-3">
                      <div className="post-meta font-small text-uppercase list-color-primary">
                        <a href="#" className="listing-ctg"><i className="fa-solid fa-building" /><span>Condos</span></a>
                      </div>
                      <h5 className="listing-title">
                        <a href="property-single-v1.html">Residensial Appartment</a>
                      </h5>
                      <span className="listing-location"><i className="fas fa-map-marker-alt" /> 2305 Tree
                        Frog Lane Overlandpk</span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span><i className="fa-solid fa-bed" /></span>3
                        </li>
                        <li title="Baths">
                          <span><i className="fa-solid fa-shower" /></span>2
                        </li>
                        <li title="Area">
                          <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                        </li>
                        <li title="Gas">
                          <span><i className="fa-solid fa-fire" /></span>Yes
                        </li>
                      </ul>
                      <span className="listing-price">$22000 <del>$26200</del><small> ( Monthly )</small></span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="property-grid-2 property-block transation mb-3">
                    <div className="overflow-hidden position-relative transation thumbnail-img rounded bg-secondary hover-img-zoom">
                      <div className="cata position-absolute">
                        <span className="sale bg-secondary text-white">For Sale</span>
                      </div>
                      <a href="property-single-v1.html"><img src="assets/images/property_grid/property-grid-5.png" alt="Image Not Found!" /></a>
                      <ul className="position-absolute quick-meta">
                        <li>
                          <a href="#" title="Add Compare"><i className="flaticon-transfer flat-mini" /></a>
                        </li>
                        <li>
                          <a href="#" title="Add Favourite"><i className="flaticon-like-1 flat-mini" /></a>
                        </li>
                        <li className="md-mx-none">
                          <a className="quick-view" href="#quick-view" title="Quick View"><i className="flaticon-zoom-increasing-symbol flat-mini" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content py-3">
                      <div className="post-meta font-small text-uppercase list-color-primary">
                        <a href="#"><span>Villa</span></a>
                      </div>
                      <h5 className="listing-title">
                        <a href="property-single-v1.html">Gorgeous Villa Bay View</a>
                      </h5>
                      <span className="listing-location"><i className="fas fa-map-marker-alt" /> 2305 Tree
                        Frog Lane Overlandpk</span>
                      <ul className="d-flex quantity font-fifteen">
                        <li title="Beds">
                          <span><i className="fa-solid fa-bed" /></span>3
                        </li>
                        <li title="Baths">
                          <span><i className="fa-solid fa-shower" /></span>2
                        </li>
                        <li title="Area">
                          <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                        </li>
                        <li title="Gas">
                          <span><i className="fa-solid fa-fire" /></span>Yes
                        </li>
                      </ul>
                      <span className="listing-price">$12000 <del>$15000</del><small> ( Monthly )</small></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*============== Feature Property Widget End ==============*/}
            {/*============== Recent Property Widget Start ==============*/}
            <div className="widget widget_recent_property">
              <h5 className="text-secondary mb-4">Recent Property</h5>
              <ul>
                <li>
                  <img src="assets/images/thumbnaillist/01.jpg" alt />
                  <div className="thumb-body">
                    <h6 className="listing-title">
                      <a href="property-single-1.html">Nirala Appartment</a>
                    </h6>
                    <span className="listing-price">$3200<small>( Monthly )</small></span>
                    <ul className="d-flex quantity font-fifteen">
                      <li title="Area">
                        <span><i className="fa-solid fa-vector-square" /></span>6500 Sqft
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <img src="assets/images/thumbnaillist/02.jpg" alt />
                  <div className="thumb-body">
                    <h6 className="listing-title">
                      <a href="property-single-1.html">Condo House</a>
                    </h6>
                    <span className="listing-price">$11500<small>( Monthly )</small></span>
                    <ul className="d-flex quantity font-fifteen">
                      <li title="Area">
                        <span><i className="fa-solid fa-vector-square" /></span>2200 Sqft
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <img src="assets/images/thumbnaillist/03.jpg" alt />
                  <div className="thumb-body">
                    <h6 className="listing-title">
                      <a href="property-single-1.html">Luxury Condos</a>
                    </h6>
                    <span className="listing-price">$17000<small>( Monthly )</small></span>
                    <ul className="d-flex quantity font-fifteen">
                      <li title="Area">
                        <span><i className="fa-solid fa-vector-square" /></span>3500 Sqft
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <img src="assets/images/thumbnaillist/04.jpg" alt />
                  <div className="thumb-body">
                    <h6 className="listing-title">
                      <a href="property-single-1.html">Small Appartment</a>
                    </h6>
                    <span className="listing-price">$5200<small>( Monthly )</small></span>
                    <ul className="d-flex quantity font-fifteen">
                      <li title="Area">
                        <span><i className="fa-solid fa-vector-square" /></span>1200 Sqft
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/*============== Recent Property Widget End ==============*/}
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row">
            <div className="col">
              <div className="woo-filter-bar p-3 d-flex flex-wrap justify-content-between">
                <div className="d-flex flex-wrap">
                  <form className="woocommerce-ordering" method="get">
                    <select name="orderby2">
                      <option>Default</option>
                      <option>Most Popular</option>
                      <option>Top Rated</option>
                      <option>Newest Items</option>
                      <option>Price low to high</option>
                      <option>Price hight to low</option>
                    </select>
                  </form>
                </div>
                <div className="d-flex">
                  <span className="woocommerce-ordering-pages me-4 font-fifteen">Showing at 15 result</span>
                  <form className="view-category" method="get">
                    <button title="List" className="list-view" value="list" name="display" type="submit">
                      <i className="flaticon-grid-1 flat-mini" />
                    </button>
                    <button title="Grid" className="grid-view active" value="grid" name="display" type="submit">
                      <i className="flaticon-grid flat-mini" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-2 row-cols-1 g-4 agent-style-1">
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <div className="agent-level">
                    <span title="Agenet level">Top Agent</span>
                  </div>
                  <img src="assets/images/team/1.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Luann McLawhorn</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="customer-review ms-auto">
                      <div className="member-score font-small bg-primary d-table text-white">
                        <span title="Feedback Score">4.90 / 5</span>
                      </div>
                      <span className="review-number">( 237 Review )</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/2.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Melvin Dawson</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <div className="agent-level">
                    <span title="Agenet level">Top Agent</span>
                  </div>
                  <img src="assets/images/team/3.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Guadalupe Allen</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/4.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Lyle Echevarria</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/5.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Kyle Brown</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <div className="agent-level">
                    <span title="Agenet level">Top Agent</span>
                  </div>
                  <img src="assets/images/team/6.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Charles Constantine</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/7.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Lawrence Spencer</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/8.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">George Campbell</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <img src="assets/images/team/9.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Michael Clinton</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agent thumb */}
            <div className="col">
              <div className="entry-wrapper bg-white transation-this hover-shadow">
                <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
                  <div className="agent-level">
                    <span title="Agenet level">Top Agent</span>
                  </div>
                  <img src="assets/images/team/10.jpg" alt="Agent Photo" />
                </div>
                <div className="entry-content-wrapper">
                  <div className="entry-header d-flex pb-2">
                    <div className="me-auto">
                      <h6 className="text-dark mb-0">
                        <a href="#">Cody Ramos</a>
                      </h6>
                      <span className="text-primary font-fifteen">From 1st April, 2012</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                      <span title="Feedback Score">4.90 / 5</span>
                    </div>
                  </div>
                  <div className="enrey-content">
                    <ul className="agent-contact py-1">
                      <li><span>Mobile:</span>891 456 9874</li>
                      <li><span>Email:</span>pakulla@findhouse.com</li>
                      <li>
                        <span>Website:</span><a href="#">www.websitename.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-footer d-flex align-items-center post-meta py-2 border-top">
                    <div className="agent">
                      <a href="#" className="d-flex text-general align-items-center">
                        <img className="rounded-circle mr-2" src="assets/images/logo/1.png" alt="avata" /><span>Company Name</span>
                      </a>
                    </div>
                    <div className="post-date ms-auto">
                      <span>27 Listed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Pagination */}
            <div className="col mt-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-dotted-active justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous Page</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next Page</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============== Agent Grid Section End ==============*/}
</div>

    );
};

export default Buyers;