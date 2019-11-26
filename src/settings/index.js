import logo from '../image/icon/logo.png'
//const config = require('../config').config;
export default {
  apiUrl: process.env.REACT_APP_API_URL,
  localApiUrl: process.env.REACT_APP_LOCAL_API_URL,

};

const siteConfig = {
  siteName: 'Dashboard',
  siteIcon: logo,
  footerText: 'Clinic ©2019 Created by iTechNotion',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';

const jwtConfig = {
  fetchUrl: 'http://localhost:9000/api/',
  secretKey: 'secretKey',
};

export { siteConfig, language, themeConfig, jwtConfig };
