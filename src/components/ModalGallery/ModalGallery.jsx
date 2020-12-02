import React, { useState, useEffect, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import './ModalGallery.scss';

import { getPhotos } from '../../api/photos';
import { getComments, postCommentToServer } from '../../api/comments';
import { Comments } from '../Comments';
import Portal from '../../Portal';


export const ModalGallery = (
  { photoId, closeModalGallery, isOpen},
  ) => {
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [comments, setComments] = useState([]);
  const [commentError, setCommentError] = useState('');

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      name: '',
      description: '',
    },
  );
  
  const loadPhotos = async(id) => {
    const loadedPhoto = await getPhotos(id)

    setCurrentPhoto(loadedPhoto);
  }

  const setAllComments = async(photoId) => {
    const comments = await getComments(photoId);

    setComments(comments);
  };

  useEffect(() => {
    setAllComments(photoId);
    loadPhotos(photoId)
  }, [photoId])


  const addComment = useCallback(async(event) => {
    event.preventDefault();

    const { name, description } = userInput;

    if (!name || !description) {
      return;
    }

    const newComment = {
      name,
      description,
      image_id: comments.length + 1,
    };

    const addedComment = await postCommentToServer(newComment);

    if (addedComment === 'Error') {
      setCommentError('Error');

      return;
    }

    setComments(prevComments => [...prevComments, newComment]);
    setUserInput(name, description);
    setUserInput(description);
  }, [comments, userInput]);

  const handleChange = (evt) => {
    const newValue = evt.target.value;

    setUserInput({ [evt.target.name]: newValue });
  };


  return (
    <>
      {
        isOpen && 
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              {/* <icon name="times" onClick={onCancel} /> */}
            {
              currentPhoto && (
                <div className="ModalGallery__photo-frame">
                  <img
                    className="ModalGallery__photo"
                    src={currentPhoto.src}
                    alt="something and somewhare"
                    style={{ height: '100%' }}
                  />
                </div>
              )
            }

            <form className="ModalGallery__form" onSubmit={addComment}>
              <input
                type="text"
                name="name"
                className="ModalGallery__input"
                placeholder="Your Name"
                value={userInput.name}
                onChange={handleChange}

                
              />
              <input
                type="text"
                name="description"
                className="ModalGallery__input"
                placeholder="Your Comment"
                value={userInput.description}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="ModalGallery__btn"
              >
                Submit the comment
              </button>
              <button
                className='ModalGallery__btn__cancel'
                onClick={closeModalGallery}
              >
                Cancel
              </button>
              {commentError
                && (
                  <p className="errorText">
                    Try again leter.
                  </p>
              )}
            </form>

            <Comments comments={comments} />
            </div>
          </div>
        </Portal>  
      }
    </>
  );
} 

ModalGallery.propTypes = {
  photoId: PropTypes.number.isRequired,
  closeModalGallery: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}
