'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('mount')
  );
});


const snoowrap = require('snoowrap');

// NOTE: The following examples illustrate how to use snoowrap. However, hardcoding
// credentials directly into your source code is generally a bad idea in practice (especially
// if you're also making your source code public). Instead, it's better to either (a) use a separate
// config file that isn't committed into version control, or (b) use environment variables.

// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
// const r = new snoowrap({
//   userAgent: 'put your user-agent string here',
//   clientId: 'put your client id here',
//   clientSecret: 'put your client secret here',
//   refreshToken: 'put your refresh token here'
// });

// Alternatively, just pass in a username and password for script-type apps.
const r = new snoowrap({
  userAgent: '<browser> Javascript ollynov14.Here we go',
  clientId: 'bQrCovIpgmO1yQ',
  clientSecret: 'OB-W4WPLl-PeYrgp2MVqw5kI95s',
  username: 'ollynov14',
  password: 'Ucsbsoph9!'
});

r.getHot().map(post => post.title).then(console.log);
r.getSubreddit('AskReddit').getWikiPage('bestof').content_md.then(console.log);
