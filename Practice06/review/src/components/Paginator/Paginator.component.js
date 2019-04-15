import React from 'react';
import { Link } from "react-router-dom";

const Paginator = ({ numPages, pageId }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <div className="col-md-12 text-center">
      <nav aria-label="Page navigation" className="text-center">
        <ul className="pagination">
          {
            (pageId <= 0)
            ? ''
            : <li className="page-item"><Link className="page-link" to={`/page/${pageId - 1}`} onClick={scrollToTop}>&lt;</Link></li>
          }
          <li className="page-item active"><Link className="page-link" to={`/page/${pageId}`}>{pageId}</Link></li>
          {
            (pageId >= numPages - 1)
            ? ''
            : <li className="page-item"><Link className="page-link" to={`/page/${pageId + 1}`} onClick={scrollToTop}>&gt;</Link></li>
          }
          
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;
