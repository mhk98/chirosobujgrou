import React from "react";

const CompanyBackground = () => {
  return (
    <div>
      <div id="page_wrapper" class="bg-light">
        <div
          className="page-banner-simple bg-secondary py-40"
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
                <h3 className="banner-title text-white">About Us</h3>
                <span className="banner-tagline font-medium text-white">
                  Whether buying or renting, finding the right place to live is
                  a personal and unique experience
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
              <h2>Our Story</h2>
              <p>
                <b>“Chiro Sobuj Housing & Developers Limited”</b> became known
                as CS in 2015. This group is very successful in gaining people's
                trust and confidence. Through various services across the
                country, “Chiro Sobuj” is leading to breakthrough success.
                Around 2020 “Chiro Sobuj” group established a sister concern.{" "}
              </p>
              <p>
                For example, Chiro Sobuj Travels, CS Transport, CS Land selling
                Business, Chiro Sobuj Somobay Somity, CS Promotional & Printing
                Item Suppliers, CS Electric & Electronics House, Jahangir Gym
                Club. The company achieved tremendous success in less than 5
                (five) years. The only reason for the success of the
                organization is honesty and transparency, the group now has
                about 10 (ten) projects in different areas of the country.{" "}
              </p>
              <p>
                The latest addition to the group is the "Chiro Sobuj Hawkers
                Market", going a long way towards realizing customer needs and
                implementing creativity with experience from past projects.
                “Chiro Sobuj” has meaningfully contributed to the country's
                economic stability in financial and capital markets through
                major investment initiatives in all key sectors.{" "}
              </p>
              <p>
                Observed the development of close relationship by managing all
                activities of the group according to customer needs. Most of the
                "Chiro Sobuj" projects are success stories. This fact alone is
                enough to justify a sense of confidence in the group's future.{" "}
              </p>

              <button style={{ width: "200px" }}>Read More...</button>
            </div>
          </div>
        </div>
        <div className="scroll-top-vertical xs-mx-none" id="scroll">
          Go Top <i className="ms-2 fa-solid fa-arrow-right-long" />
        </div>
      </div>
      );
    </div>
  );
};

export default CompanyBackground;
