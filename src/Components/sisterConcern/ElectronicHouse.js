import React from "react";

const ElectronicHouse = () => {
  return (
    <div>
      {/*============== Page Banner Start ==============*/}
      <div
        className="page-banner-simple bg-secondary py-50"
        style={{
          backgroundImage: "url(assets/images/background/bg-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          marginTop: 100,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="banner-title text-white">Land Wanted</h3>
              <span className="banner-tagline font-medium text-white">
                We make strategies, design &amp; development to create valuable
                products.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*============== Page Banner End ==============*/}

      <div className="full-row">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-lg-5">
              <img src="assets/images/about-us/1660046501O37Zo_m.jpg" alt />
            </div>
            <div className="col-lg-5">
              <h1>Description</h1>
              <p>
                Customer satisfaction and unique needs are of the utmost
                importance to us. Anwar Landmark upholds ethical business
                conduct across its internal divisions and teams.
              </p>
              <p>
                Our employees uphold discipline and adhere to company values
                with their hearts, which significantly impacts the level of
                service and commitment we provide to our esteemed clients and
                customers.
              </p>
              <p>
                Our human resources are cooperative and united to create a
                highly qualified cross-functional team.
              </p>
              <p>
                It fosters a strong sense of professionalism and experienced
                leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="full-row">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-lg-5">
              <h1>Description</h1>
              <p>
                Customer satisfaction and unique needs are of the utmost
                importance to us. Anwar Landmark upholds ethical business
                conduct across its internal divisions and teams.
              </p>
              <p>
                Our employees uphold discipline and adhere to company values
                with their hearts, which significantly impacts the level of
                service and commitment we provide to our esteemed clients and
                customers.
              </p>
              <p>
                Our human resources are cooperative and united to create a
                highly qualified cross-functional team.
              </p>
              <p>
                It fosters a strong sense of professionalism and experienced
                leadership.
              </p>
            </div>

            <div className="col-lg-5">
              <img src="assets/images/about-us/1660046501O37Zo_m.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicHouse;
