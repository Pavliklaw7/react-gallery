import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Photos.scss';

import { Photo } from '../Photo';
import { ModalGallery } from '../ModalGallery';

export const Photos = ({ photos, comments }) => {
  const [currentModalPhotoId, setCurrentModalPhotoId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModalGallery = (id) => {
    setCurrentModalPhotoId(id);
    setIsOpen(true);
  }

  const closeModalGallery = () => {
    setIsOpen(false);
  }

  return (
    <div className="Photos Gallery__wrapper">
      {
        photos.map(photo => (
          <Photo
            key={photo.image_id}
            photo={photo}
            openPhoto={openModalGallery}
          />
        ))
      }

      {
        isOpen && (
          <ModalGallery
            isOpen={isOpen}
            photoId={currentModalPhotoId}
            closeModalGallery={closeModalGallery}
          />
        )
      }
    </div>
  );
}

PropTypes.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  ), 
};
