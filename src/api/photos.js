import { request } from './api';

export const getPhotos = async(photoId = '') => {
  const response = request(`/images/${photoId}`, {
    method: 'GET',
  });

  const result = await response;

  return result
};
