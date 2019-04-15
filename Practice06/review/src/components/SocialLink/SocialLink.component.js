import React from 'react';
import { Link } from "react-router-dom";

const SocialLink = ({ siteName }) => (
  <Link to="/page/0"><span className={`fa fa-${siteName}`}></span></Link>
);

export default SocialLink;
