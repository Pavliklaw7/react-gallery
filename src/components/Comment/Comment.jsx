import React from 'react';

import './Comment.scss';

export const Comment = ({ comment }) => {

  return (
    <li className="Comment">
      <p className="Comment__author">{comment.name}</p>
      <p className="Comment__description">{comment.description}</p>
    </li>
  )
}
