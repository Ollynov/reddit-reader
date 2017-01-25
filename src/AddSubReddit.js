import React from 'react';


class AddSubReddit extends React.Component {
  constructor() {
    super();

    this.paintSubReddit = this.paintSubReddit.bind(this);
  }

  componentDidMount() {
    console.log('this.props in constructor ', this.props);
  }

  paintSubReddit() {
    let query = 'politics';
    console.log('this.props ', this.props);
    this.props.snoowrapCredentials.getSubreddit(query).getNew().then(p => {
      let title = '';

      p.forEach(item => {
        title += '<d class="individualArticle">';
        title += '<img src=' + item['thumbnail'] + '>' + '<br>';
        title += '<div ><a href="' + item['url'] + '">' + item['title'] + '</a><br>';
        title += query;
        title += '<a class="button" href="' + 'http://www.reddit.com' + item["permalink"] + '">see comments</a></div><br>';
        title += '</d><br>';
      });
      document.getElementById('articles').innerHTML = title;
    });
  }

  render() {
    return (
      <button onClick={this.paintSubReddit}>Add SubReddit</button>
    );
  }
}
export default AddSubReddit;