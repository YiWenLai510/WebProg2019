import React from 'react';

const CommentUnit = ({ comment: { author, date, content } }) => (
  <li className="comment">
    <div className="vcard">
      <img src={`/images/${author}.jpg`} alt={author} />
    </div>
    <div className="comment-body">
      <h3>{author}</h3>
      <div className="meta">{new Date(date).toDateString()}</div>
        <p>{content}</p>
    </div>
  </li>
);

export default CommentUnit;
