import React from 'react';
import PropTypes from 'prop-types';

import './Photo.scss';

export const Photo = ({ photo, openPhoto }) => (
  <div className="Gallery__photo-wrapper">
    <img
      src={photo.src}
      alt="something and somewhare"
      className="photo"
      onClick={() => openPhoto(photo.image_id)}
      role="presentation"
    />
  </div>
);

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  openPhoto: PropTypes.func.isRequired,
};
