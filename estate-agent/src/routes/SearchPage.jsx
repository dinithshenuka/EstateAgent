import React, { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Slider, TextField } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import "react-datepicker/dist/react-datepicker.css";
import FavoritesList from "../components/FavoritesList";

const SearchPage = () => {
  const { properties, addToFavorites } = useContext(PropertyContext);
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAfter: null,
    dateBefore: null,
    postalCode: "",
  });
  const [filteredResults, setFilteredResults] = useState(properties);

  const typeOptions = [
    { value: "", label: "Any Type" },
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
  ];

  const handleSearch = () => {
    const results = properties.filter((property) => {
      return (
        (!filters.type || property.type === filters.type) &&
        (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || property.price <= parseInt(filters.maxPrice)) &&
        (!filters.minBedrooms ||
          property.bedrooms >= parseInt(filters.minBedrooms)) &&
        (!filters.maxBedrooms ||
          property.bedrooms <= parseInt(filters.maxBedrooms)) &&
        (!filters.postalCode ||
          property.postalCode.startsWith(filters.postalCode)) &&
        (!filters.dateAfter ||
          new Date(
            `${property.added.month} ${property.added.day}, ${property.added.year}`
          ) >= filters.dateAfter) &&
        (!filters.dateBefore ||
          new Date(
            `${property.added.month} ${property.added.day}, ${property.added.year}`
          ) <= filters.dateBefore)
      );
    });
    setFilteredResults(results);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const property = filteredResults.find((p) => p.id === result.draggableId);
    if (property) {
      addToFavorites(property);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mt-4">
        <h1 className="text-warning text-center mb-4">Search Properties</h1>
        <div className="row">
          {/* Search Filters */}
          <div className="col-md-3">
            <div className="card p-3 mb-4">
              <h5 className="card-title mb-3">Search Filters</h5>

              <div className="mb-3">
                <label className="form-label">Property Type</label>
                <Select
                  options={typeOptions}
                  value={typeOptions.find(
                    (option) => option.value === filters.type
                  )}
                  onChange={(option) =>
                    setFilters({ ...filters, type: option?.value || "" })
                  }
                  placeholder="Select Type"
                  className="basic-select"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price Range</label>
                <div className="input-group">
                  <TextField
                    type="number"
                    className="form-control"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: e.target.value })
                    }
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    type="number"
                    className="form-control"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value })
                    }
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Bedrooms</label>
                <div className="input-group">
                  <TextField
                    type="number"
                    className="form-control"
                    placeholder="Min Bedrooms"
                    value={filters.minBedrooms}
                    onChange={(e) =>
                      setFilters({ ...filters, minBedrooms: e.target.value })
                    }
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    type="number"
                    className="form-control"
                    placeholder="Max Bedrooms"
                    value={filters.maxBedrooms}
                    onChange={(e) =>
                      setFilters({ ...filters, maxBedrooms: e.target.value })
                    }
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Date Range</label>
                <div className="d-flex gap-2">
                  <div className="w-50">
                    <DatePicker
                      selected={filters.dateAfter}
                      onChange={(date) =>
                        setFilters({ ...filters, dateAfter: date })
                      }
                      maxDate={filters.dateBefore || new Date()}
                      minDate={new Date(2020, 0, 1)}
                      className="form-control"
                      placeholderText="Date After"
                      dateFormat="MM/dd/yyyy"
                      isClearable
                      showYearDropdown
                      scrollableYearDropdown
                    />
                  </div>
                  <div className="w-50">
                    <DatePicker
                      selected={filters.dateBefore}
                      onChange={(date) =>
                        setFilters({ ...filters, dateBefore: date })
                      }
                      minDate={filters.dateAfter}
                      maxDate={new Date()}
                      className="form-control"
                      placeholderText="Date Before"
                      dateFormat="MM/dd/yyyy"
                      isClearable
                      showYearDropdown
                      scrollableYearDropdown
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Postal Code</label>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Enter Postal Code"
                  value={filters.postalCode}
                  onChange={(e) =>
                    setFilters({ ...filters, postalCode: e.target.value })
                  }
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </div>

              <button className="btn btn-warning w-100" onClick={handleSearch}>
                Search Properties
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="col-md-6">
            <Droppable droppableId="propertyList">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {filteredResults.length > 0 ? (
                    <div className="row">
                      {filteredResults.map((property, index) => (
                        <Draggable
                          key={property.id}
                          draggableId={property.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="col-md-6 mb-4"
                            >
                              <div className="card h-100 shadow-sm">
                                <img
                                  src={property.picture}
                                  className="card-img-top"
                                  alt={property.name}
                                  style={{
                                    height: "200px",
                                    objectFit: "cover",
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="card-title mb-0">
                                      {property.name}
                                    </h5>
                                    <button
                                      className="btn btn-sm btn-outline-warning"
                                      onClick={() => addToFavorites(property)}
                                    >
                                      <i className="fas fa-heart"></i>
                                    </button>
                                  </div>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      {property.type} • {property.bedrooms}{" "}
                                      bedrooms
                                    </small>
                                  </p>
                                  <p className="card-text fw-bold">
                                    {property.currency}{" "}
                                    {property.price.toLocaleString()}
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      {property.location} ({property.postalCode}
                                      )
                                    </small>
                                  </p>
                                  <Link
                                    to={`/property/${property.id}`}
                                    className="btn btn-warning"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5">
                      <h3 className="text-muted">No properties found</h3>
                      <p>Try adjusting your search filters</p>
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Favorites Section */}
          <Droppable droppableId="favoritesList">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="col-md-3"
              >
                <FavoritesList />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default SearchPage;
