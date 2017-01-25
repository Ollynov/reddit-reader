'use strict';
import React from 'react';
const snoowrap = require('snoowrap');


class HotFeed extends React.Component {
  constructor() {
    super();
  }

  paintArticles(query) {
    this.props.snoowrapCredentials.getHot().map(post => post).then(p => {
      let title = '';

      p.forEach(item => {
        title += '<d class="individualArticle">';
        title += '<img src=' + item['thumbnail'] + '>' + '<br>';
        title += '<div ><a href="' + item['url'] + '">' + item['title'] + '</a><br>';
        title += "Front Page<br>";
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