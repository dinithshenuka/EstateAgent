import React from "react";
import SearchBar from "../components/SearchBar";

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
    </div>
  );
};

export default HomePage;
