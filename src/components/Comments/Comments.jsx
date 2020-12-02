import React from 'react'
// import PropTypes from 'prop-types';

import './Comments.scss';

import { Comment } from '../Comment';

export const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <ul className="Comments">
    {comments.map(comment => (
      <Comment
        key={comments.length + 1}
        comment={comment}
      />
    ))}
  </ul>
  )
}
