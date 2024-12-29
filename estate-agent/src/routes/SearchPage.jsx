import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import FavoritesList from "../components/FavoritesList";
import SearchForm from "../components/SearchForm";
import RemoveZone from "../components/RemoveZone";

const SearchPage = () => {
  const { properties, addToFavorites, removeFromFavorites } =
    useContext(PropertyContext);
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
    const { source, destination, draggableId } = result;

    // Handle removing from favorites
    if (!destination || destination.droppableId === "removeZone") {
      if (source.droppableId === "favoritesList") {
        removeFromFavorites(draggableId);
      }
      return;
    }

    // Handle adding to favorites
    if (destination.droppableId === "favoritesList") {
      const property = filteredResults.find((p) => p.id === draggableId);
      if (property) {
        addToFavorites(property);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Search Properties</h1>

        <SearchForm
          filters={filters}
          setFilters={setFilters}
          onSearch={handleSearch}
        />

        <div className="row mt-4">
          <div className="col-md-9">
            <Droppable droppableId="propertyList">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="row"
                >
                  {filteredResults.length > 0 ? (
                    filteredResults.map((property, index) => (
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
                                style={{ height: "200px", objectFit: "cover" }}
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
                                    {property.location} ({property.postalCode})
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
                    ))
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

          <div className="col-md-3">
            <Droppable droppableId="favoritesList">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <FavoritesList />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <RemoveZone />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default SearchPage;
