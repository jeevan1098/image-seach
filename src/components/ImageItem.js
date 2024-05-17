import React from 'react';
import { Tooltip } from 'react-tooltip';

const ImageItem = ({ image }) => {
  return (
    <div className="image-container">
      <a href={image.links.html} target="_blank" rel="noopener noreferrer">
        <img
          src={image.urls.small}
          alt={image.alt_description}
          data-tip
          data-for={`tooltip-${image.id}`}
        />
      </a>
      <Tooltip id={`tooltip-${image.id}`} place="top" effect="solid">
        <div className="tooltip-content">
          <p><strong>Description:</strong> {image.description || 'No description available'}</p>
          <p><strong>Photographer:</strong> {image.user.name}</p>
          <p><strong>Likes:</strong> {image.likes}</p>
        </div>
      </Tooltip>
    </div>
  );
};

export default ImageItem;
