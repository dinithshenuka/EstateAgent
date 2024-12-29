import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="navbar-light bg-light mt-5 py-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="navbar-brand mb-3">Estate Agent</div>
            <p className="text-muted">
              Your trusted partner in finding the perfect property. We help
              connect buyers with their dream homes and sellers with qualified
              prospects.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="nav-link mb-3">Property Types</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#!" className="nav-link px-0 text-black">
                  Houses
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link px-0 text-black">
                  Apartments
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link px-0 text-black">
                  Land
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link px-0 text-black">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="nav-link mb-3">Quick Links</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/search" className="nav-link px-0 text-black">
                  Search Properties
                </a>
              </li>
              <li className="nav-item">
                <a href="/favorites" className="nav-link px-0 text-black">
                  My Favorites
                </a>
              </li>
              <li className="nav-item">
                <a href="/agents" className="nav-link px-0 text-black">
                  Our Agents
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link px-0 text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="nav-link mb-3">Contact</h6>
            <div className="text-muted">
              <p>
                <FontAwesomeIcon icon={faHome} className="me-2" />
                123 Property Lane, Real Estate City
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                contact@estateagent.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                (555) 123-4567
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Mon-Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-8 text-muted">
            © {new Date().getFullYear()} Estate Agent. All rights reserved.
          </div>
          <div className="col-md-4">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a href="https://facebook.com" className="nav-link text-muted">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://twitter.com" className="nav-link text-muted">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://instagram.com" className="nav-link text-muted">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://linkedin.com" className="nav-link text-muted">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
