import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="text-center hero">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Find Real Estate & Get Your Dream Place</h1>
        <p>
          Your go-to platform for finding your dream property. Start your search
          now.
        </p>
        <div className="mt-4">
          <Link to="/search" className="btn btn-warning btn-lg me-3">
            Start Searching
          </Link>
          <Link to="/favorites" className="btn btn-outline-warning btn-lg">
            View Favorites
          </Link>
        </div>
      </div>

      {/* Feature Highlights Section */}
      <div className="mt-5">
        <h2>Why Choose Us?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  Wide Selection
                </h5>
                <p className="card-text">
                  Explore a vast collection of properties, from cozy apartments
                  to luxurious homes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Easy Search
                </h5>
                <p className="card-text">
                  Use our advanced filters to find properties that meet your
                  exact needs and budget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faHeart} className="me-2" />
                  Save Your Favorites
                </h5>
                <p className="card-text">
                  Keep track of properties you love and revisit them anytime
                  with just a click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
