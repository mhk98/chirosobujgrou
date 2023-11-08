import React from 'react';

const ChairmanMessage = () => {
    return (
       <div>
  {/*============== Page title Start ==============*/}
  <div className="full-row" style={{marginTop: 50}}>
    <div className="container">
      <div className="row">
        <div className="col inner-page-banner">
          <h3 className="text-secondary">CHAIRMAN MESSAGE</h3>
        </div>
      </div>
    </div>
  </div>
  {/*============== Page title End ==============*/}
  {/*============== Agent Details Start ==============*/}
  <div className="full-row pt-0">
    <div className="container">
      <div className="row">
        <div className="col-12 agent-style-1 list-view agent-details">
          <div className="entry-wrapper bg-white transation-this hover-shadow mb-4">
            <div className="entry-thumbnail-wrapper transation bg-secondary hover-img-zoom">
              <div className="agent-level">
                <span title="Agenet level">Top Agent</span>
              </div>
              <img src="assets/images/team/1.jpg" alt="Agent Photo" />
            </div>
            <div className="entry-content-wrapper">
              <div className="entry-header d-flex pb-2">
                <div className="me-auto">
                  <h6 className="agent-name text-dark mb-0">
                    <a href="#">Luann McLawhorn</a>
                  </h6>
                  <span className="text-primary font-fifteen">From 1st April, 2012</span>
                </div>
              </div>
              <div className="enrey-content">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe
                  ndisse suscorem ipsum dolor sit ametcipsum dolor sit t,
                  consec tetur atetur cing elit. Suspe ndisse susco rem
                  ipsum dolor sit ametcipsum doloamet.
                </p>
                <ul className="agent-contact py-1">
                  <li><span>Mobile:</span>891 456 9874</li>
                  <li><span>Email:</span>pakulla@findhouse.com</li>
                  <li>
                    <span>Website:</span><a href="#">www.websitename.com</a>
                  </li>
                  <li><span>Language:</span>English, French, Spanish</li>
                </ul>
                <div className="social-media">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 order-xl-1">
          <div className="entry-wrapper">
            {/* Agent Overview */}
            <div className="agent-overview p-30 bg-white mb-50">
              <h4 className="mb-4">Message</h4>
              <p>
                Maecenas egestas quam et volutpat bibendum metus vulputate
                platea eleifend sed Integer dictum ultricies consectetuer
                nunc vivamus a. Eu mus justo magna lacinia purus sodales
                scelerisque. Sociosqu pede facilisi. Sociis pretium gravida
                auctor mus amet accumsan adipiscing id dignissim, potenti.
                Curae; massa ridiculus lobortis consectetuer condimentum
                mollis vulputate hymenaeos tellus egestas auctor dictumst
                imperdiet curae; quisque ut porta molestie dui duis blandit
                molestie etiam enim erat sociis lacinia litora phasellus
                sit. Ipsum Lacinia class enim pharetra interdum potenti
                tellus parturient. Potenti scelerisque erat facilisi mauris
                tortor, mattis euismod augue nascetur rutrum augue ipsum
                tortor cum Porta primis.
              </p>
              <p>
                Praesent lectus facilisi tempor ridiculus arcu pharetra non
                tellus. Torquent nisl tempor. Magnis mollis lobortis nam,
                montes ut, consequat sed amet nullam, malesuada nascetur
                ornare sociosqu magna cum gravida quam tincidunt dapibus
                tellus felis nibh inceptos netus convallis facilisis
                torquent. Laoreet pulvinar ut. Fringilla lacus tellus lectus
                erat hac conubia eget quisque nisi aliquam nibh molestie
                nisi hymenaeos id phasellus metus duis inceptos arcu
                hendrerit ligula blandit lectus nisl fermentum sociosqu
                pretium eros libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*============== Agent Details End ==============*/}
</div>

    );
};

export default ChairmanMessage;