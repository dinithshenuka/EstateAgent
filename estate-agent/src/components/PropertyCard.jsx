// src/components/PropertyCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, isFavorite, onAction, actionIcon }) => (
  <div className="card h-100 shadow-sm">
    <img
      src={property.picture}
      className="card-img-top"
      alt={property.name}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="card-title mb-0">{property.name}</h5>
        <button
          className={`btn btn-sm ${
            isFavorite ? "btn-outline-danger" : "btn-outline-warning"
          }`}
          onClick={onAction}
        >
          <i className={`fas ${actionIcon}`}></i>
        </button>
      </div>
      <p className="card-text">
        <small className="text-muted">
          {property.type} • {property.bedrooms} bedrooms
        </small>
      </p>
      <p className="card-text fw-bold">
        {property.currency} {property.price.toLocaleString()}
      </p>
      <p className="card-text">
        <small className="text-muted">
          {property.location} ({property.postalCode})
        </small>
      </p>
      {!isFavorite && (
        <Link to={`/property/${property.id}`} className="btn btn-warning">
          View Details
        </Link>
      )}
    </div>
  </div>
);

export default PropertyCard;
