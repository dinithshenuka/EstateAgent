import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { Draggable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

const FavoritesList = () => {
  // from PropertyContext
  const { favorites, removeFromFavorites, clearFavorites, error } =
    useContext(PropertyContext);

  return (
    <div className="card">
      <div className="card-header bg-warning d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Favorites ({favorites.length})</h5>
        {favorites.length > 0 && (
          <button
            className="btn btn-sm btn-outline-dark d-flex align-items-center gap-2"
            onClick={clearFavorites}
          >
            <FontAwesomeIcon icon={faTrash} />
            Clear All
          </button>
        )}
      </div>

      {/* if error */}
      <div className="card-body">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {favorites.length === 0 ? (
          <p className="text-muted text-center py-3">
            No favorites yet. Drag properties here or click the heart icon to
            add.
          </p>
        ) : (
          // property card
          favorites.map((property, index) => (
            <Draggable
              key={property.id}
              draggableId={property.id}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`d-flex align-items-center mb-2 p-2 border rounded ${
                    snapshot.isDragging ? "bg-light shadow-sm" : ""
                  }`}
                  style={{
                    ...provided.draggableProps.style,
                    transition: "all 0.2s ease",
                  }}
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
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => removeFromFavorites(property.id)}
                    title="Remove from favorites"
                  >
                    <FontAwesomeIcon icon={faTimes} />
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
