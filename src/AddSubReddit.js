import React from 'react';


class AddSubReddit extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.paintSubReddit = this.paintSubReddit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('this.props in constructor ', this.props);
  }

  paintSubReddit(query) {
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
      document.getElementById('articles').innerHTML += title;
    });
  }

  displayPopup() {
    let form = '<form onsubmit="this.handleSubmit(e)">';
    form += '<input type="text">sdf<input type="submit">';
    form += '</form>';
    document.getElementById('displaypopup').innerHTML = form;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.paintSubReddit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add SubReddit"/>
      </form>
    );
  }
}

export default AddSubReddit;