import React from 'react';
import CommentUnit from '../CommentUnit/CommentUnit.component';
import CommentBox from '../CommentBox/CommentBox.component';

const PostPage = ({ post: { category, author, postDate, image, title, content, comments }, onComment}) => (
  <div className="col-md-12 col-lg-12 main-content">
    <div className="post-meta">
      <span className="author mr-2"><img src={`/images/${author}.jpg`} alt="Colorlib" className="mr-2" />{author}</span>
      <span className="mr-2">{new Date(postDate).toDateString()}</span>
      <span className="ml-2"><span className="fa fa-comments"></span>{comments.length}</span>
    </div>
    <h1 className="mb-4">{title}</h1>
    <span className="category mb-5">{category}</span>

    <hr />
    <img src={`/${image}`} alt="placeholder" className="img-fluid mb-5" />
    <div className="post-content-body">
      <p>{content}</p>
      <div className="row mb-5">
        <div className="col-md-12 mb-4"></div>
      </div>
    </div>

    <div className="pt-5">
      <h3 className="mb-5">{comments.length} Comments</h3>
      <ul className="comment-list">
        {comments.sort((a, b) => a.date >= b.date).map((c, idx) => <CommentUnit key={idx} comment={c} />)}
      </ul>
    </div>

    <CommentBox onSubmit={onComment}/>
  </div>
);

export default PostPage;
