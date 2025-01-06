import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import RemoveZone from "../components/RemoveZone";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useContext(PropertyContext);

  // end of drag
  const onDragEnd = (result) => {
    const { destination, draggableId } = result;

    // remove from fav
    if (!destination || destination.droppableId === "removeZone") {
      removeFromFavorites(draggableId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container py-4">
        <h1 className="text-center mb-4">My Favorites</h1>

        <div className="row">
          <div className="col-md-9">
            <Droppable droppableId="favoritesList">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="row"
                >
                  {/* if no favorites */}
                  {favorites.length === 0 ? (
                    <div className="col-12 text-center">
                      <p className="text-muted">No favorite properties yet.</p>
                    </div>
                  ) : (
                    // property card
                    favorites.map((property, index) => (
                      <Draggable
                        key={property.id}
                        draggableId={property.id}
                        index={index}
                      >
                        {(provided) => (
                          <PropertyCard
                            property={property}
                            isFavorite={true}
                            onAction={() => removeFromFavorites(property.id)}
                            actionIcon="fa-times"
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
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="col-md-3">
            <RemoveZone />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default FavoritesPage;
