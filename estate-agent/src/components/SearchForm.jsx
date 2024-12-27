import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { TextField } from "@mui/material";

const SearchForm = ({ filters, setFilters, onSearch }) => {
  const typeOptions = [
    { value: "", label: "Any Type" },
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
  ];

  return (
    <div className="card p-3 mb-4">
      <h5 className="card-title mb-3">Search Filters</h5>
      <div className="row">
        <div className="col-md-2">
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
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label className="form-label">Price Range</label>
            <div className="d-flex gap-2">
              <TextField
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: e.target.value })
                }
                size="small"
                fullWidth
              />
              <TextField
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: e.target.value })
                }
                size="small"
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="mb-3">
            <label className="form-label">Bedrooms</label>
            <div className="d-flex gap-2">
              <TextField
                type="number"
                placeholder="Min"
                value={filters.minBedrooms}
                onChange={(e) =>
                  setFilters({ ...filters, minBedrooms: e.target.value })
                }
                size="small"
                fullWidth
              />
              <TextField
                type="number"
                placeholder="Max"
                value={filters.maxBedrooms}
                onChange={(e) =>
                  setFilters({ ...filters, maxBedrooms: e.target.value })
                }
                size="small"
                fullWidth
              />
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="mb-3">
            <label className="form-label">Date Added</label>
            <div className="d-flex gap-2">
              <DatePicker
                selected={filters.dateAfter}
                onChange={(date) => setFilters({ ...filters, dateAfter: date })}
                className="form-control"
                placeholderText="After"
                dateFormat="MM/dd/yyyy"
                isClearable
              />
              <DatePicker
                selected={filters.dateBefore}
                onChange={(date) =>
                  setFilters({ ...filters, dateBefore: date })
                }
                className="form-control"
                placeholderText="Before"
                dateFormat="MM/dd/yyyy"
                isClearable
              />
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="mb-3">
            <label className="form-label">Postal Code</label>
            <TextField
              type="text"
              placeholder="Postal Code"
              value={filters.postalCode}
              onChange={(e) =>
                setFilters({ ...filters, postalCode: e.target.value })
              }
              size="small"
              fullWidth
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-warning px-4" onClick={onSearch}>
          Search Properties
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
