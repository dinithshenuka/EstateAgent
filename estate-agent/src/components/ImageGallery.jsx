import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const PropertyGallery = ({ images }) => {
  const galleryItems = images.map((image) => ({
    original: image.replace(/\.png$/, ".webp"),
    thumbnail: image.replace(/\.png$/, ".webp"),
    originalHeight: 500,
    thumbnailHeight: 80,
  }));

  return (
    <ImageGallery
      items={galleryItems}
      showPlayButton={false}
      showFullscreenButton={true}
      showNav={true}
      thumbnailPosition="bottom"
      autoPlay={false}
    />
  );
};

export default PropertyGallery;
