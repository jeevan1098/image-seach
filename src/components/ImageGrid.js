import React from 'react';
import ImageItem from './ImageItem';

const ImageGrid = ({ images, loading }) => {
  return (
    <div className="images">
      {loading && <p>Loading...</p>}
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
