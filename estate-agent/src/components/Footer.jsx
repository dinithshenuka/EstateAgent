import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-light py-5">
      <div className="container">
        {/* Main Content */}
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 text-center text-sm-start">Estate Agent</h5>
            <p className="text-muted text-center text-sm-start">
              Your trusted partner in finding the perfect property. We help
              connect buyers with their dream homes and sellers with qualified
              prospects.
            </p>
          </div>

          {/* Property Types */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 text-center text-sm-start">Property Types</h5>
            <ul className="list-unstyled text-center text-sm-start">
              <li className="mb-2">
                <Link className="nav-link" to="/properties/houses">
                  Houses
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/properties/apartments">
                  Apartments
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/properties/land">
                  Land
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/properties/commercial">
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 text-center text-sm-start">Quick Links</h5>
            <ul className="list-unstyled text-center text-sm-start">
              <li className="mb-2">
                <Link className="nav-link" to="/search">
                  Search Properties
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/favorites">
                  My Favorites
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3 text-center text-sm-start">Contact</h5>
            <ul className="list-unstyled text-center text-sm-start">
              <li className="mb-2">
                <span className="text-muted">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  123 Property Lane, Real Estate City
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  contact@estateagent.com
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  (033) 123-4567
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Footer */}
        <div className="row">
          <div className="col-12 col-sm-6 text-center text-sm-start mb-3 mb-sm-0">
            <span className="text-muted">
              © {new Date().getFullYear()} Estate Agent. All rights reserved.
            </span>
          </div>
          <div className="col-12 col-sm-6">
            <ul className="list-inline mb-0 text-center text-sm-end">
              <li className="list-inline-item">
                <a
                  href="https://facebook.com"
                  className="nav-link px-2"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com"
                  className="nav-link px-2"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com"
                  className="nav-link px-2"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://linkedin.com"
                  className="nav-link px-2"
                  aria-label="LinkedIn"
                >
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
