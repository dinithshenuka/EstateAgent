import { start } from "@popperjs/core";
import React from "react";
import { useState } from "react";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    postalCode: "",
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
    startDate: "",
    endDate: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="search-bar container" >
      <div role="group">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`btn ${query.type === type ? "btn-dark" : "btn-light"}`}
          >
            {type}
          </button>
        ))}
      </div>
      
      <form>

        <div className="form-align">

        {/* type of property (house, flat, any) */}
        <div className="row">
          <input
            className="col-sm-6 col-12"
            type="text"
            name="type"
            placeholder="House, Flat, Any"
          />
        </div>   

        {/* location */}
      
        <div className="row">
          <input
            className="col-sm-4 col-12"
            type="text"
            name="location"
            placeholder="City Location"
          />
          <input
            className="col-sm-2 col-12"
            type="number"
            name="postalCode"
            placeholder="Postal Code"
          />
        </div>

        {/* price */}
       
        <div className="row">
          <input
            className="col-sm-2 col-12"
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="Min Price"
          />
          <input
            className="col-sm-2 col-12"
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="Max Price"
          />
        </div>

        {/* bedrooms */}

        <div className="row">
          <input
            className="col-sm-2 col-12"
            type="number"
            name="minBedrooms"
            min={0}
            max={10}
            placeholder="Min Bedrooms"
          />
          <input
            className="col-sm-2 col-12"
            type="number"
            name="maxBedrooms"
            min={0}
            max={10}
            placeholder="Max Bedrooms"
          />
        </div>

        {/* date */}
        <div className="row">
          <input
            className="col-sm-3 col-12"
            type="date"
            name="startDate"
            placeholder="Start Date"
          />
          <input
            className="col-sm-3 col-12"
            type="date"
            name="endDate"
            placeholder="End Date"
          />
        </div> 

        </div>
    
        <button type="submit" className="btn btn-warning col-sm-2 col-12 mb-5">
        <i className="fa fa-search"></i>
        </button>
        
      </form>
    </div>
  );
}

export default SearchBar;
