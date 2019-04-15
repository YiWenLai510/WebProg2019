import React from 'react';
import { Link } from "react-router-dom";

const MainSectionContentUnit = ({ data: { id, image, author, postDate, comments, title } }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <div className="col-md-6">
      <Link to={`/post/${id}`} className="blog-entry" data-animate-effect="fadeIn" onClick={scrollToTop}>
        <img src={`/${image}`} alt="placeholder" />
        <div className="blog-content-body">
          <div className="post-meta">
            <span className="author mr-2"><img src={`/images/${author}.jpg`} alt="Colorlib" /> {author} </span>
            <span className="mr-2">{new Date(postDate).toDateString()}</span>
            <span className="ml-2"><span className="fa fa-comments"></span>{comments.length}</span>
          </div>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default MainSectionContentUnit;
