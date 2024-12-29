import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faStar,
  faUsers,
  faHome,
  faAward,
  faHeart,
  faShieldAlt,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className=" mb-3">About Estate Agent</h1>
        <p className="lead text-muted">
          Your trusted partner in real estate since 2010
        </p>
      </div>

      {/* Mission Section */}
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <div className="card border-0 bg-light p-4">
            <FontAwesomeIcon icon={faHandshake} className=" mb-3" size="3x" />
            <h3>Our Mission</h3>
            <p className="text-muted">
              To help people find their perfect homes and make the real estate
              journey simple, efficient, and enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <h3 className="text-center mb-4">Our Values</h3>
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faShieldAlt} className=" mb-3" size="2x" />
              <h5 className="card-title">Trust</h5>
              <p className="card-text text-muted">
                Building lasting relationships through transparency and
                integrity
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faAward} className=" mb-3" size="2x" />
              <h5 className="card-title">Excellence</h5>
              <p className="card-text text-muted">
                Committed to providing exceptional service and results
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faChartLine} className=" mb-3" size="2x" />
              <h5 className="card-title">Innovation</h5>
              <p className="card-text text-muted">
                Embracing technology to enhance the real estate experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center mb-5 g-4">
        <div className="col-md-3">
          <FontAwesomeIcon icon={faHome} className=" mb-3" size="2x" />
          <h2 className="h4">1000+</h2>
          <p className="text-muted">Properties Sold</p>
        </div>
        <div className="col-md-3">
          <FontAwesomeIcon icon={faUsers} className=" mb-3" size="2x" />
          <h2 className="h4">500+</h2>
          <p className="text-muted">Happy Clients</p>
        </div>
        <div className="col-md-3">
          <FontAwesomeIcon icon={faStar} className=" mb-3" size="2x" />
          <h2 className="h4">4.8/5</h2>
          <p className="text-muted">Average Rating</p>
        </div>
        <div className="col-md-3">
          <FontAwesomeIcon icon={faClock} className=" mb-3" size="2x" />
          <h2 className="h4">13 Years</h2>
          <p className="text-muted">Experience</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="mb-4">Ready to Find Your Dream Home?</h3>
        <a href="/search" className="btn btn-warning btn-lg px-4">
          Start Searching
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
