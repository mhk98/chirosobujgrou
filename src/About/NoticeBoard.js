import React from 'react';

const NoticeBoard = () => {
    return (
        <div>
  {/*============== Page Banner Start ==============*/}
  <div className="page-banner-simple bg-light">
    <div className="container">
      <div className="row" style={{padding: '80px 0'}}>
        <div className="col-lg-6 col-md-12">
          <span className="banner-tagline d-table text-primary font-medium mb-2">Timeline Page</span>
          <h1 className="banner-title text-secondary">Whether buying or renting, finding the right place.</h1>
          <nav aria-label="breadcrumb" className="mb-2 ms-0">
            <ol className="breadcrumb mb-0 bg-transparent p-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active text-primary" aria-current="page">Timeline</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/*============== Page Banner End ==============*/}
  {/*============== Timeline Content Start ==============*/}
  <div className="full-row pt-0">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-10 col-md-12 mx-auto">
          <div className="vertical-timeline d-flex float-start pb-4">
            <div className="float-start d-table h6 text-secondary">25th Sep 2020</div>
            <div className="ps-5">
              <div className="thumb-blog-overlay bg-white hover-text-PushUpBottom mb-4">
                <div className="post-content p-35">
                  <h5 className="d-block font-400 mb-3"><a href="#" className="transation text-dark hover-text-primary">Our latest development projects by more efficie.</a></h5>
                  <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                  <div className="post-meta text-uppercase">
                    <a href="#"><span>By Robert Haven</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-timeline d-flex float-start pb-4">
            <div className="float-start d-table h6 text-secondary">10th May 2020</div>
            <div className="ps-5">
              <div className="thumb-blog-overlay bg-white hover-text-PushUpBottom mb-4">
                <div className="post-content p-35">
                  <h5 className="d-block font-400 mb-3"><a href="#" className="transation text-dark hover-text-primary">Our latest development projects by more efficie.</a></h5>
                  <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                  <div className="post-meta text-uppercase">
                    <a href="#"><span>By Robert Haven</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-timeline d-flex float-start pb-4">
            <div className="float-start d-table h6 text-secondary">1st Jan 2020</div>
            <div className="ps-5">
              <div className="thumb-blog-overlay bg-white hover-text-PushUpBottom mb-4">
                <div className="post-content p-35">
                  <h5 className="d-block font-400 mb-3"><a href="#" className="transation text-dark hover-text-primary">Our latest development projects by more efficie.</a></h5>
                  <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                  <div className="post-meta text-uppercase">
                    <a href="#"><span>By Robert Haven</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-timeline d-flex float-start pb-4">
            <div className="float-start d-table h6 text-secondary">31st Dec 2019</div>
            <div className="ps-5">
              <div className="thumb-blog-overlay bg-white hover-text-PushUpBottom mb-4">
                <div className="post-content p-35">
                  <h5 className="d-block font-400 mb-3"><a href="#" className="transation text-dark hover-text-primary">Our latest development projects by more efficie.</a></h5>
                  <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                  <div className="post-meta text-uppercase">
                    <a href="#"><span>By Robert Haven</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============== Timeline Content End ==============*/}
</div>

    );
};

export default NoticeBoard;