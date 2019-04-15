import React from 'react';
import ArticleUnit from '../ArticleUnit/ArticleUnit.component';
import Paginator from '../Paginator/Paginator.component';

const BrowsePage = ({ posts, numPages, pageId }) => (
  <div className="col-md-12 col-lg-12 main-content">
    <div className="row">
      {
        posts.map(p => <ArticleUnit key={p.id} data={p} />)
      }
    </div>

    <div className="row mt-5">
      <Paginator numPages={numPages} pageId={pageId} />
    </div>
  </div>
);

export default BrowsePage;
