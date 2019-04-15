import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import BrowsePage from '../../components/BrowsePage/BrowsePage.component';
import PostPage from '../../components/PostPage/PostPage.component';
import AppConfig from '../../config/AppConfig.const';


class MainSection extends Component {
  render() {
    const { posts, onComment } = this.props;
    return (
      <section className="site-section py-sm">
        <div className="container">
          <div className="row blog-entries">
            <Switch>
              <Route
                path="/page/:pageId?"
                render={
                  props => (
                    <BrowsePage
                      key={props.match.params.pageId}
                      {...props}
                      posts={
                        posts.slice(
                          parseInt(props.match.params.pageId) * AppConfig.NUM_POSTS_PER_PAGE,
                          (parseInt(props.match.params.pageId) + 1) * AppConfig.NUM_POSTS_PER_PAGE,
                        )
                      }
                      numPages={Math.ceil(AppConfig.NUM_POSTS / AppConfig.NUM_POSTS_PER_PAGE)}
                      pageId={parseInt(props.match.params.pageId)}
                    />
                  )
                }
              />
              <Route
                path="/post/:postId?"
                render={
                  props => (
                    <PostPage
                      key={props.match.params.postId}
                      {...props}
                      post={posts[parseInt(props.match.params.postId)]}
                      postId={parseInt(props.match.params.postId)}
                      onComment={(c) => { onComment(parseInt(props.match.params.postId), c); }}
                    />
                  )
                }
              />
              <Redirect to="/page/0/" />
            </Switch>
            {/* <MainSectionSideBar /> */}
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;
