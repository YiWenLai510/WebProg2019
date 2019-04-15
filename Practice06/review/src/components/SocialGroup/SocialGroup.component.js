import React from 'react';
import SocialLink from '../SocialLink/SocialLink.component';

const SocialGroup = ({ sites }) => (
  <div className="col-9 social">
    {sites.map((site, idx) => <SocialLink key={idx} siteName={site}/>)}
  </div>
)

export default SocialGroup;
