import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../containers/Header/Header.component';
// import CarouselSlider from '../CarouselSlider/CarouselSlider.component';
import MainSection from '../../containers/MainSection/MainSection.component';
import Footer from '../../containers/Footer/Footer.component';
import MockPostGenerator from '../../util/MockPostGenerator.class';
import AppConfig from '../../config/AppConfig.const';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: MockPostGenerator.genMockPosts(AppConfig.NUM_POSTS),
    }
  }

  onComment = (postId, comment) => {
    console.log("lala");
    this.setState(prevState => {
      const posts = prevState.posts;
      posts[postId].comments.push({
        ...comment,
        date: Date.now(),
      });
      return {
        ...prevState,
        posts,
      };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <MainSection posts={this.state.posts} onComment={this.onComment} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
