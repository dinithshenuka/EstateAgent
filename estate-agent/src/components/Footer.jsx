import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="my-5">
      <footer className="text-center text-lg-start text-dark bg-light">
        <section className="d-flex justify-content-between p-4 text-white bg-dark">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="" className="text-white me-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>

                <p>
                  <a href="#!" className="text-dark">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Bootstrap Angular
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>

                <p>
                  <a href="#!" className="text-dark">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>

                <p>
                  <FontAwesomeIcon icon={faHome} className="me-2" /> New York,
                  NY 10012, US
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
                  info@example.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> + 01 234
                  567 88
                </p>
                <p>
                  <FontAwesomeIcon icon={faPrint} className="me-2" /> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
