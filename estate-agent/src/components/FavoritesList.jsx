import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { Draggable } from "@hello-pangea/dnd";

const FavoritesList = () => {
  const { favorites, removeFromFavorites, clearFavorites } =
    useContext(PropertyContext);

  return (
    <div className="card">
      <div className="card-header bg-warning d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Favorites ({favorites.length})</h5>
        {favorites.length > 0 && (
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={clearFavorites}
          >
            Clear All
          </button>
        )}
      </div>
      <div className="card-body">
        {favorites.length === 0 ? (
          <p className="text-muted">No favorites yet</p>
        ) : (
          favorites.map((property, index) => (
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
                  className="d-flex align-items-center mb-2 p-2 border-bottom"
                >
                  <img
                    src={property.picture}
                    alt={property.name}
                    className="me-2 rounded"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <small className="fw-bold">{property.name}</small>
                    <br />
                    <small className="text-muted">
                      {property.currency} {property.price.toLocaleString()}
                    </small>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromFavorites(property.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              )}
            </Draggable>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
