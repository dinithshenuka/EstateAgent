import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropertyContext } from "../context/PropertyContext";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PropertyPage = () => {
  const { id } = useParams();
  const { properties, addToFavorites } = useContext(PropertyContext);
  const [mainImage, setMainImage] = useState(0);

  // Load Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // property by id
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="text-center py-5">Property not found</div>;
  }

  // Map container style
  const mapContainerStyle = {
    width: "100%",
    height: "clamp(300px, 50vw, 400px)",
    borderRadius: "8px",
  };

  // Image Gallery
  const galleryImages = property.gallery.map((img) => ({
    original: img.replace(/\.png$/, ".webp"),
    thumbnail: img.replace(/\.png$/, ".webp"),
    originalHeight: "auto",
  }));

  // Property location for Google Maps
  const propertyLocation = {
    lat: property.coordinates.lat,
    lng: property.coordinates.lng,
  };

  return (
    <div className="container py-4">
      {/* Image Gallery Section */}
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            thumbnailPosition="bottom"
            autoPlay={false}
          />
        </div>
        <div className="col-12 col-lg-4">
          <div className="text-center text-lg-start">
            <h3 className="fs-4 fs-lg-3 mb-3">{property.name}</h3>
            <p className="h4 text-warning mb-3">
              {property.currency} {property.price.toLocaleString()}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {property.location} (
              {property.postalCode})
            </p>
            <p className="mb-3">
              <strong>Type:</strong> {property.type} • {property.bedrooms}{" "}
              bedrooms
            </p>
            <button
              className="btn btn-warning w-100"
              onClick={() => addToFavorites(property)}
            >
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="row mt-5">
        <div className="col-12">
          <Tabs>
            <TabList className="nav nav-tabs mb-4 flex-nowrap overflow-auto">
              <Tab className="nav-item">
                <button className="nav-link px-4">Description</button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link px-4">Floor Plan</button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link px-4">Location</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="p-3 p-lg-4 bg-light rounded">
                <p className="mb-0">{property.description}</p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-3 p-lg-4 bg-light rounded">
                <div className="row g-4">
                  {property.flloorPlan?.map((plan, index) => (
                    <div key={index} className="col-12 col-md-6">
                      <img
                        src={plan.replace(/\.png$/, ".webp")}
                        alt={`Floor plan ${index + 1}`}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-3 p-lg-4 bg-light rounded">
                {!isLoaded ? (
                  <div className="text-center py-4">Loading map...</div>
                ) : (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={propertyLocation}
                    zoom={15}
                  >
                    <MarkerF position={propertyLocation} />
                  </GoogleMap>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
