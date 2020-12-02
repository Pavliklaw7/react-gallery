import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import { getPhotos } from '../../api/photos';

import { Photos } from '../Photos';

export const Gallery = () => {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const setAllPhotos = async() => {
    const photos = await getPhotos();

    setPhotos(photos);
    setIsLoading(false);
  };

  useEffect(() => {
    setAllPhotos();
  }, []);

  return (

    <div className="Gallery">

      {
        isLoading && <h2>Loading</h2>
      }

      <Photos photos={photos}/>

    </div>
  );
};
