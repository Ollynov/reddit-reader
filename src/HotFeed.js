'use strict';
import React from 'react';
const snoowrap = require('snoowrap');

var snoowrapCredentials = new snoowrap({
  userAgent: '<browser> Javascript ollynov14.Here we go',
  clientId: 'bQrCovIpgmO1yQ',
  clientSecret: 'OB-W4WPLl-PeYrgp2MVqw5kI95s',
  username: 'ollynov14',
  password: 'Ucsbsoph9!'
});


class HotFeed extends React.Component {
  constructor() {
    super();
  }

  paintArticles() {
    snoowrapCredentials.getHot().map(post => post).then(p => {
      let title = '';

      console.log(p[0]);
      p.forEach(item => {
        title += '<d class="individualArticle">';
        title += '<img src=' + item['thumbnail'] + '>' + '<br>';
        title += '<div class="commentsAndArticle"><a href="' + item['url'] + '">' + item['title'] + '</a><br>';
        title += '<a class="button" href="' + 'http://www.reddit.com' + item["permalink"] + '">see comments</a></div><br>';
        title += '</d><br>';
      });
      document.getElementById('articles').innerHTML = title;
    });
  }

  componentDidMount() {
    this.paintArticles();
  }


  render() {
    return (
      <p id='feed'>Hottest Articles</p>
    );
  }
}


export default HotFeed;