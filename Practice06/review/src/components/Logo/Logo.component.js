import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="container logo-wrap">
    <div className="row pt-5">
      <div className="col-12 text-center">
        <Link className="absolute-toggle d-block d-md-none" data-toggle="collapse" to="/page/0" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></Link>
        <h1 className="site-logo"><Link to="/page/0">My React Blog</Link></h1>
      </div>
    </div>
  </div>
);

export default Logo;
