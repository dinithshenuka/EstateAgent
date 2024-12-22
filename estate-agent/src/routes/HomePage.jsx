import React from "react";
import SearchBar from "../components/SearchBar";
import FetchProperties from "../components/fetch";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mt-5">Find Your Perfect Home in Sri Lanka</h1>
          <p>Discover a Wide Range of Real Estate Opportunities</p>
        </div>
      </div>
      <SearchBar />
      <FetchProperties />
      <div className="row text-center mb-5">  
        <div className="col">
          <h3>16+</h3>
          <h4>Years of Experience</h4>
        </div>
        <div className="col">
          <h3>200</h3>
          <h4>Award Gained</h4>
        </div>
        <div className="col">
          <h3>2000+</h3>
          <h4>Property Ready</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
