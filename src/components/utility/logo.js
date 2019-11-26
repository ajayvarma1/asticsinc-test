import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';


export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <img src={"http://welovecaring.in/images/logo.png"} alt='Clinic' style={{width:80}}/>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
