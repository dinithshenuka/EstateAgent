import React from "react";
import { Droppable } from "@hello-pangea/dnd";

const RemoveZone = () => {
  return (
    // Droppable component
    <Droppable droppableId="removeZone">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`card mt-3 text-center ${
            snapshot.isDraggingOver ? "bg-danger" : "bg-light"
          }`}
          // styles
          style={{
            minHeight: "100px",
            transition: "all 0.3s",
            opacity: snapshot.isDraggingOver ? 1 : 0.5,
            border: snapshot.isDraggingOver
              ? "2px dashed #fff"
              : "1px solid #dee2e6",
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            <i className="fas fa-trash fa-2x mb-2"></i>
            <p className="mb-0">Drop here to remove from favorites</p>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default RemoveZone;
