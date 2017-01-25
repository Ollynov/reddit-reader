'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('mount')
  );
});

let paintTitle = (title) => {

};

const snoowrap = require('snoowrap');

// NOTE: The following examples illustrate how to use snoowrap. However, hardcoding
// credentials directly into your source code is generally a bad idea in practice (especially
// if you're also making your source code public). Instead, it's better to either (a) use a separate
// config file that isn't committed into version control, or (b) use environment variables.

// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
// const r = new snoowrap({
//   userAgent: '<browser> javascript.ollynov14',
//   clientId: 'vOQvh_Rwn2vAzg',
//   clientSecret: 'QimGYmnxDHx7cq_XJPRaGvT8mSY',
//   refreshToken: '-ZrOanWVwsy7lUp8RUPkI1k10q8'
// });

//Alternatively, just pass in a username and password for script-type apps.
const r = new snoowrap({
  userAgent: '<browser> Javascript ollynov14.Here we go',
  clientId: 'bQrCovIpgmO1yQ',
  clientSecret: 'OB-W4WPLl-PeYrgp2MVqw5kI95s',
  username: 'ollynov14',
  password: 'Ucsbsoph9!'
});

// Printing a list of the titles on the front page
r.getHot().map(post => post).then(p => {
  p.forEach(item => {
    let title = '<p>';
    title += item['title'];
    title += '</p>';
  });
});
