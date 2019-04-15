import React, { Component } from 'react';
import SocialGroup from '../../components/SocialGroup/SocialGroup.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import Logo from '../../components/Logo/Logo.component';
import AppConfig from '../../config/AppConfig.const';

class Header extends Component {
  render() {
    return (
      <header role="banner">
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <SocialGroup sites={AppConfig.SOCIAL_SITES} />
              <SearchBar />
            </div>
          </div>
        </div>
        <Logo />
      </header>
    );
  }
}

export default Header;
