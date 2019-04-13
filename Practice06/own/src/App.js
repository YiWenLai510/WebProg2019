import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog.js';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div >
              <Blog />
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
