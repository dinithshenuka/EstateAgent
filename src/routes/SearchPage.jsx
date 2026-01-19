import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import FavoritesList from "../components/FavoritesList";
import SearchForm from "../components/SearchForm";
import RemoveZone from "../components/RemoveZone";
import PropertyCard from "../components/PropertyCard";

const SearchPage = () => {
  const { properties, addToFavorites, removeFromFavorites } =
    useContext(PropertyContext);

  // hold search filters
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

  // filter properties
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

    // remove from fav
    if (!destination || destination.droppableId === "removeZone") {
      if (source.droppableId === "favoritesList") {
        removeFromFavorites(draggableId);
      }
      return;
    }

    // add to fav
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
                  {/* filterd results */}
                  {filteredResults.length > 0 ? (
                    filteredResults.map((property, index) => (
                      <Draggable
                        key={property.id}
                        draggableId={property.id}
                        index={index}
                      >
                        {(provided) => (
                          <PropertyCard
                            property={property}
                            isFavorite={false}
                            onAction={() => addToFavorites(property)}
                            actionIcon="fa-heart"
                            isDraggable={true}
                            dragHandleProps={{
                              ref: provided.innerRef,
                              ...provided.draggableProps,
                              ...provided.dragHandleProps,
                            }}
                          />
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
