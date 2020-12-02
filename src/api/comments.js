import { request } from './api';

export const getComments = async(photoId = '') => {
  const response = request(`/comments/${photoId}`, {
    method: 'GET',
  });

  const result = await response;

  return result
};

export const postCommentToServer = async(newComment) => {
  const response = request('/comments/add/', {
    method: 'POST',
    body: JSON.stringify(newComment),
  });

  const result = await response;

  return result.data;
};
